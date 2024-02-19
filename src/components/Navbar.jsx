import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import MyPDF from '../assets/curriculo.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#E45338] text-white z-10 rounded-full'>
      {/* menu*/}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='experience' smooth={true} duration={500}>
            Experiência
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#E45338] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
            Experiência
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
      </ul>

      {/* Social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/carrllosz'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fff]'>
            <a className='flex justify-between items-center w-full text-black' href='https://github.com/Carrllosz'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F58219]'>
            <a className='flex justify-between items-center w-full text-white' href={MyPDF} download='resumo.pdf'>
              Currículo <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
