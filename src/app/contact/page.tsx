'use client'
import React, {useState} from 'react'


import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import toast from "react-hot-toast";
import ScrollToTop from '@/components/ui/scrollToTop'
import { FaTwitter, FaGithub, FaWhatsapp,FaLinkedin, FaChevronDown } from "react-icons/fa";
import Link from 'next/link'




const ContactUs = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    industry: '',
    interest: '',
    referral: '',
    agreed: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
  
    const updatedValue =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    toast('Form Submitted!');

    setFormData({
      fullName: '',
      companyName: '',
      workEmail: '',
      industry: '',
      interest: '',
      referral: '',
      agreed: false,
    });
  };
  

  return (
    <div>
      <Navbar/>
      <ScrollToTop/>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 py-20 w-[85%] mx-auto'>

          {/* Left Section */}
          <div className='bg-[#0d1321] text-white p-10 pb-0 flex flex-col rounded-2xl gap-5 pr-20'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-medium text-2xl'>Contact Us</h1>
              <p className='text-gray-500 text-lg'>Let’s work together to create amazing things online. Get in touch with us today and let’s get started on making your digital dreams come true.</p>
            </div>

            {/* links */}
            <div className='flex gap-3'>
              <Link href="https://www.linkedin.com/in/mba-chibueze-8118a9252" className='p-3 rounded bg-[#c5832b] text-[#0d1321] text-xl w-fit'><FaLinkedin /></Link>
              <Link href="https://twitter.com/mba_chibuezez" className='p-3 rounded bg-[#c5832b] text-[#0d1321] text-xl w-fit'><FaTwitter /></Link>
              <Link href="https://wa.me/+2347012108363" className='p-3 rounded bg-[#c5832b] text-[#0d1321] text-xl w-fit'><FaWhatsapp /></Link>
              <Link href="https://github.com/mbachibueze" className='p-3 rounded bg-[#c5832b] text-[#0d1321] text-xl w-fit'><FaGithub /></Link>
            </div>

            <img src="/contact.webp" alt="About Us" className='w-[100%] h-[100%] object-fit rounded-t-xl' />
            
          </div>

          {/* Form */}
          <div className='shadow p-10 flex flex-col gap-10 justify-between rounded-2xl relative'>
            <p>Please fill out the form below to schedule a meeting</p>

            <form action="" className='flex flex-col gap-3 justify-between h-[100%] sm:text-base text-sm' onSubmit={handleSubmit}>
              <input
                onChange={handleChange} 
                required 
                type="text" 
                placeholder='Full Name' 
                name='fullName'
                value={formData.fullName}
                className=' outline-gray-400 outline-1   p-2 rounded-lg bg-gray-200 w-full' />

              <input
                onChange={handleChange} 
                required 
                type="text" 
                name='companyName'
                value={formData.companyName}
                placeholder='Company Name' 
                className='outline-gray-400  p-2 rounded-lg bg-gray-200 w-full' />

              <input
                onChange={handleChange} 
                required 
                name='workEmail'
                value={formData.workEmail}
                type="email" 
                placeholder='Work Email' 
                className='outline-gray-400  p-2 rounded-lg bg-gray-200 w-full' />


              {/* Industry */}
              <div className='flex items-center gap-2 bg-gray-200 rounded-lg pr-2 relative'>
                <input
                  onChange={handleChange}
                  required
                  readOnly
                  type="text"
                  name="industry"
                  value={formData.industry}
                  placeholder="Select Industry"
                  className='outline-gray-400 text-black p-2 rounded-lg bg-gray-200 w-full'
                />
                <FaChevronDown className='absolute right-3 pointer-events-none' />
                <select
                  name="industry"
                  onChange={handleChange}
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                >
                  <option value="">Select Industry</option>
                  <option value="Education">Education</option>
                  <option value="Financial">Financial</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Start Up">Start Up</option>
                  <option value="NGO/Foundation">NGO/Foundation</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>

              {/* Interest */}
              <div className='flex items-center gap-2 bg-gray-200 rounded-lg pr-2 relative'>
                <input
                  onChange={handleChange}
                  required
                  readOnly
                  type="text"
                  name="interest"
                  value={formData.interest}
                  placeholder="I'm Interested In"
                  className='outline-gray-400 text-black p-2 rounded-lg bg-gray-200 w-full'
                />
                <FaChevronDown className='absolute right-3 pointer-events-none' />
                <select
                  name="interest"
                  onChange={handleChange}
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                >
                  <option value="">I'm Interested In</option>
                  <option value="Custom Web App">Custom Web App</option>
                  <option value="School Portal">School Portal</option>
                  <option value="E-commerce">E-commerce Solutions</option>
                  <option value="Referral Program">Referral Program</option>
                </select>
              </div>

              {/* Discovery */}
              <div className='flex items-center gap-2 bg-gray-200 rounded-lg pr-2 relative'>
                <input
                  onChange={handleChange}
                  required
                  readOnly
                  type="text"
                  name="referral"
                  value={formData.referral}
                  placeholder="How did you learn about us?"
                  className='outline-gray-400 text-black p-2 rounded-lg bg-gray-200 w-full'
                />
                <FaChevronDown className='absolute right-3 pointer-events-none' />
                <select
                  name="referral"
                  onChange={handleChange}
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                >
                  <option value="">How did you learn about me?</option>
                  <option value="Algorithm">Algorithm Conference</option>
                  <option value="Referral">Referral</option>
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google">Google</option>
                </select>
              </div>


              <div className='flex items-start gap-2 md:text-lg sm:text-base text-sm font-medium text-[#0d1321]'>
                <input
                  onChange={handleChange}
                  required
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  className='mt-2 accent-[#0d1321] bg-[#0d1321]'
                />
                <div>
                  Agree on our <span className='text-[#c5832b]'>terms and conditions</span> for using your submitted data?
                </div>
              </div>

              <button 
                type='submit'
                className='bg-[#0d1321]  p-3 rounded-lg hover:bg-[#c5832b] text-white transition-all duration-200 cursor-pointer w-full'
              >Submit</button>
            </form>
            

          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ContactUs

