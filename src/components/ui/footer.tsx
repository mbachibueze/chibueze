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
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <Link href="/services/wordpress">
                  <li>WordPress Development</li>
                </Link>
                <Link href="/services/web-development">
                  <li>Web Applications</li>
                </Link>
                <Link href="/services/portals">
                  <li>School/University Portals</li>
                </Link>
                <Link href="/services/e-commerce">
                  <li>E-commerce Solutions</li>
                </Link>
                <Link href="/services/membership-platforms">
                  <li>Membership Platforms</li>
                </Link>
                <Link href="/services/enterprise-solutions">
                  <li>Enterprise Solutions</li>
                </Link>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Company</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <Link href='/about'>
                  <li>About us</li>
                </Link>
                <Link href='/about'>
                  <li>Careers</li>
                </Link>
                <Link href='/contact'>
                  <li>Contact </li>
                </Link>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Resources</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <li>Blog</li>
                <Link href="/corporate-responsibility">
                  <li>Coporate Responsibilty </li>
                </Link>
                <li>Support</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Social</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='font-semibold text-white'>Legal</h5>
              <ul className='text-gray-500 flex flex-col gap-4 lg:text-lg sm:text-base text-xs'>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookies policy</li>
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