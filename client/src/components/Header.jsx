import { useState } from 'react';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <Link
            to='/'
            className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white mr-4'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Suzzy
            </span>
            Writes
          </Link>
          <form className='hidden lg:flex md:flex' onSubmit={handleSubmit}>
            <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <Button className='w-12 h-10 lg:hidden md:hidden' color='gray' pill>
            <AiOutlineSearch />
          </Button>
        </div>
        <div className='flex gap-2 items-center md:order-2'>
          <Link to='/' className={`text-purple-500 ${path === "/" ? "font-bold" : ""} hidden lg:block mr-4`}>
            Home
          </Link>
          <Link to='/about' className={`text-purple-500 ${path === "/about" ? "font-bold" : ""} hidden lg:block mr-4`}>
            About
          </Link>
          <Link to='/projects' className={`text-purple-500 ${path === "/projects" ? "font-bold" : ""} hidden lg:block mr-12` }>
            Projects
          </Link>
          <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
          {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' >
              Sign In
            </Button>
          </Link>
        )}
          <Navbar.Toggle onClick={toggleNavbar} />
        </div>
      </div>
      <Navbar.Collapse className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <Link to='/' className={`text-black ${path === "/" ? "font-bold" : ""}`}>
          Home
        </Link>
        <Link to='/about' className={`text-black ${path === "/about" ? "font-bold" : ""}`}>
          About
        </Link>
        <Link to='/projects' className={`text-black ${path === "/projects" ? "font-bold" : ""}`}>
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
