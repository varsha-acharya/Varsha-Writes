import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Sushanth R Hegde is a 4th-year Information Science student at N.M.A.M. Institute of Technology
            </h2>
            <p className='text-gray-500 my-2'>

            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/SushanthRHegde" target='_blank' rel='noopener noreferrer'>
                    Visit My GitHub Profile
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.pinimg.com/736x/75/19/92/751992e01b33f985df37a212ee05d8ce.jpg" width={300} height={400} />
        </div>
    </div>
  )
}