'use client'

import React from 'react'
import Link from 'next/link';

import { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";



import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100); // Trigger when scrollY > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const  [isOpen, setIsOpen] = useState(false)

  



  /* eslint-disable react/no-unescaped-entities */
  return (
    <div  className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>

      <div 
        className={`side-bar absolute bg-white shadow w-[100vw] h-[100vw] p-5 mb-[100vh]  duration00 left-0 top-0 transition-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} `}
        style={{
          height: '100vh',
        }}
      >
        <div className='relative h-full flex flex-col gap-2'>
          
          {/* Logo and close button */}
          <div className='flex items-center justify-between'>
            <div>
              {/* <Image src="/logo.png" alt="Logo" width={100} height={100} className=" w-22 sm:w-24 md:w-21 lg:w-25 h-auto" /> */}
              <h1 className='font-bold text-2xl'>ObaTech</h1>
            </div>

            {/* Close Button */}
            <div className=' bg-gray-100/20 p-1 rounded-lg w-fit cursor-pointer' onClick={() => setIsOpen(false)}>

              <IoMdClose className='text-3xl cursor-pointer'  size={20}/>
            </div>
          </div>
            

            {/* Nav links */}
          <ul className="flex flex-col justify-between gap-3 py-5 text-lg transition-all duration-1000 ease-in-out text-[#0d1321]">
            <Link href="/"><li className='hover:text-[#c5832b] cursor-pointer'>Home</li></Link>
            <Link href="/about"><li className='hover:text-[#c5832b] py-2 cursor-pointer'>About</li></Link>
            <Link href="/contact">
              <li className='hover:text-[#c5832b] py-2 cursor-pointer'>Contact</li>
            </Link>

          </ul>



          {/* Schedule a meeting button */}
          <button className='bg-[#0d1321] text-white hover:bg-[#c5832b]  shadow transition-all duration-200 lg:px-7 px-4  py-4 md:rounded-xl rounded-lg lg:text-lg md:text-base sm:text-base text-[5vw] cursor-pointer w-full absolute bottom-10'>Let's Work</button>
        </div>
      </div>

      <div className='flex justify-between items-center md:py-4 py-2 md:w-[90%] w-[95%] m-auto '>
        <div className='flex items-center gap-20'>
          <div>
            {/* <Image src="/logo.png" alt="Logo" width={100} height={100} className="pl-2 w-20 sm:w-24 md:w-21 lg:w-25 h-auto" /> */}
            <h1 className='font-bold text-2xl'>ObaTech</h1>
          </div>
          <div className='lg:block hidden'>
            <ul className="flex justify-between gap-10 text-lg transition-all duration-1000 ease-in-out">
              <Link href="/"><li className='hover:text-[#c5832b] cursor-pointer'>Home</li></Link>
              <Link href="/about"><li className='hover:text-[#c5832b] cursor-pointer'>About</li></Link>
              <Link href="/contact">
              <li className='hover:text-[#c5832b] cursor-pointer'>Contact</li>
            </Link>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button className='bg-[#0d1321] text-white hover:bg-[#c5832b]  shadow transition-all duration-200 lg:px-7 px-4  py-2 md:rounded-xl rounded-lg lg:text-lg md:text-sm sm:text-sm text-[3vw] cursor-pointer'>Schedule a Metting</button>

          <div className='lg:hidden md:block cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className=' bg-gray-100/20 p-1 rounded-lg'>
              <CgMenuRightAlt className='text-3xl cursor-pointer'  size={30}/>
            </div>
           
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar