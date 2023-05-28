import React from 'react'

import HTML from './assets/html.png';
import CSS from './assets/css.png';
import JavaScript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import GitHub from './assets/github.png';
import Tailwind from './assets/tailwind.png';


const Skills = () => {
  return (
    <div name ='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
      <div className='max-w-[1000px] mx-auto justify-center flex flex-col p-4 w-full h-full'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
        <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
      

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt="html" className='w-20 mx-auto' />
            <p className='py-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt="css" className='w-20 mx-auto' />
            <p className='py-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={JavaScript} alt="html" className='w-20 mx-auto' />
            <p className='py-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={ReactImg} alt="html" className='w-20 mx-auto' />
            <p className='py-4'>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={GitHub} alt="html" className='w-20 mx-auto' />
            <p className='py-4'>GITHUP</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Tailwind} alt="html" className='w-20 mx-auto' />
            <p className='py-4'>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
