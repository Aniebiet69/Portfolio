import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { click } from '@testing-library/user-event/dist/click'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const clickHandle = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo img" style={{width: '50px'}} />
        </div>

    {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


        {/* Hambuger menu */}
        <div onClick={clickHandle} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl' onClick={clickHandle}>  Home</li>
                <li className='py-6 text-4xl'onClick={clickHandle}>About</li>
                <li className='py-6 text-4xl'onClick={clickHandle}>Skills</li>
                <li className='py-6 text-4xl'onClick={clickHandle}>Work</li>
                <li className='py-6 text-4xl'onClick={clickHandle}>Contact</li>
            </ul>
        </div>

        {/* social menu */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[160px] flex justify-between items-center'>
                    <a className='flex justify-between items-center w-full'
                    href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
