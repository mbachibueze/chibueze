import React from 'react'
import Link from 'next/link';


import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

// #0d1321
// #c5832b



const Footer = () => {
  

  
  return (
    <div className=''>
      <div className='bg-[#0d1321] text-white lg:pt-20 md:pt-10 pt-15 rounded-t-3xl pb-1'>
        <div className=' lg:w-[85%] w-[85%] m-auto my-10 flex flex-col gap-5'>

          <div className='lg:grid lg:grid-cols-2 lg:place-items-center flex flex-col lg:gap-36 gap-5 '>

            <div className='flex flex-col gap-5'>
              <h2 className='lg:text-4xl md:text-2xl text-2xl font-semibold'>Contact information</h2>
              <p className='text-gray-500 lg:text-lg'>Whether you’re looking to elevate your brand, need expert input on your website, or are ready to launch your next digital project — I’m here to help bring it to life, every step of the way.</p>
            </div>

            <div>
              <ul className='flex flex-col gap-2'>
                <li className="flex items-center gap-3"><LuMail color="#c5832b"/>mbachibueze27@gmail.com</li>
                <li className="flex items-center gap-3"><FaPhoneAlt color="#c5832b"/>07012108363</li>
                <li className="flex items-center gap-3"><FaLocationDot color="#c5832b"/>Port Harcourt, Nigeria</li>
              </ul>
            </div>

          </div>


        </div>

          <hr className=" border-t border-gray-700 md:w-[90%] w-[95%] m-auto"/>

        <div className='lg:w-[85%] w-[85%] m-auto my-10 flex flex-col gap-5'>
          <div className='footer grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  sm:gap-10 gap-9 py-10'>
            
            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Services</h5>
              <ul className='service text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                  <li>Web Applications</li>
                  <li>School/University Portals</li>
                  <li>E-commerce Solutions</li>
                  <li>Membership Platforms</li>
                  <li>Enterprise Solutions</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Me</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <Link href='/about'>
                  <li>About</li>
                </Link>
                <Link href='/contact'>
                  <li>Contact </li>
                </Link>
              </ul>
            </div>


            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Social</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <Link href='https://github.com/mbachibueze'>GitHub</Link>
                <Link href='https://www.linkedin.com/in/mba-chibueze-8118a9252'>LinkedIn</Link>
                <Link href='https://twitter.com/mba_chibuezez'>Twitter</Link>
                <Link href='https://wa.me/+2347012108363'>Whatsapp</Link>
              </ul>
            </div>

          </div>
        </div>

          <hr className=" border-t border-gray-700 md:w-[90%] w-[95%] m-auto"/>

        <div className='lg:w-[85%] w-[85%] m-auto my-5 text-center'>
           {/* <Image src="/logo.webp" alt="Logo" width={100} height={100} className="pl-2 w-24 sm:w-24 md:w-21 lg:w-36 h-auto" /> */}

           <p className='text-gray-500 lg:text-lg sm:text-base text-xs text-center leading-loose'>Copyright © 2025 <span className='text-white cursor-pointer hover:text-[#c5832b] '>Mba Chibueze</span> All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer