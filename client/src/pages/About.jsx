import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Suzzy's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Suzzy's Blog! This blog was created by Suzzy to share
              thoughts and ideas with the world. Suzzy is a passionate developer
              who loves to write about technology and coding.
            </p>

            <p>
              Here, you'll find articles and tutorials on web development,
              software engineering, and programming languages. Suzzy is always
              learning new things, so check back often for fresh content!
            </p>

            <p>
              Feel free to leave comments and engage with other readers. You can
              like and reply to comments. We believe a community of learners can
              help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
