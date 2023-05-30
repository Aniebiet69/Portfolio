import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { click } from '@testing-library/user-event/dist/click'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const clickHandle = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
        <div className='text-pink-600'>
            Aniebiet
            {/* <img src={Logo} alt="logo img" style={{width: '50px'}} /> */}
        </div>

    {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>
                    <Link activeClass="active" to="home" 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >Home </Link> </li>

                <li>
                    <Link activeClass="active" to="about" 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >About </Link> </li>

                <li>
                    <Link activeClass="active" to="skills" 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >Skills </Link> </li>

                     <li>
                    <Link activeClass="active" to="work" 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >Work </Link> </li>

             <li>
                    <Link activeClass="active" to="contact" 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >Contact </Link> </li>

            </ul>


        {/* Hambuger menu */}
        <div onClick={clickHandle} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
            <ul>
              <li className='py-6 text-4xl'>
          <Link onClick={clickHandle} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandle} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandle} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandle} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandle} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
        </div>

        {/* social menu */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] text-b flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/aniebiet-archibong-7bb094241/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] text-b flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Aniebiet69/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] text-b flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] text-b flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
