import React from 'react'
import Link from 'next/link'
import Schedule from '@/components/ui/schedule'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


interface HeroProps {
  subHead?: string;
  head: string;
  description: string;
  imageSrc: string;
  btn: string;
  link?: string;
}

export const Hero: React.FC<HeroProps> = ({
    head, 
    description, 
    btn, 
    imageSrc,
    subHead = 'Services',
    link
  }) => {
  return (
    <div className=" lg:h-[99vh] grid place-items-center  py-24  relative transition-all duration-1000">

        <div className="lg:grid lg:grid-cols-3 flex flex-col lg:gap-5 gap-10 justify-between items-center  lg:w-[88%] w-[90%] m-auto m text-[#0d1321]  ">

          <div className="col-span-2 flex flex-col  gap-3">
              <h5 className='text-lg font-medium text-[#c5832b]'>
                {subHead}
              </h5> 
            
              <h1 className=" font-medium lg:text-8xl md:text-7xl sm:text-5xl text-4xl">{head}</h1>

              <p className="lg:text-2xl md:text-xl sm:text-lg  leading-relaxed lg:w-[75%]">{description}</p>
            
            <div className='flex items-center gap-5  h-fit'>
              <Link href={`${link}`}>
                <Schedule className="bg-[#0d1321] hover:bg-[#c5832b] transition-all duration-500 text-white lg:px-10 px-6 py-2  lg:py-4 md:rounded-2xl rounded-2xl lg:text-base sm:text-base text-sm cursor-pointer flex items-center gap-3 w-fit " text={btn}/>
              </Link>
              <Link href="https://github.com/mbachibueze" className=''><FaGithub size={25}/></Link>
              <Link href="https://www.linkedin.com/in/mba-chibueze-8118a9252"><FaLinkedin size={25}/></Link>
              <Link href="https://twitter.com/mba_chibuezez"><FaTwitter size={25}/></Link>
              <Link href="https://wa.me/+2347012108363"><FaWhatsapp size={25}/></Link>
            </div>
          </div>

          <div className='grid place-items-center   '>
            <img src={imageSrc} alt={head} className=' lg:w-[100%] sm:w-[90%] w-[100%] object-contain lg:ml-auto shadow  rounded-xl' />
          </div>

        </div>
      </div>
  )
}

interface crafting {
  number: string;
  title: string;
  description: string;
}

export const HowWeCraft: React.FC<crafting> = ({ number, title, description }) => {
  return (
    <div className='grid lg:grid-cols-5 gap-5 grid-cols-1 md:py-10 '>
      <div className='flex col-span-2 gap-5 lg:gap-10 font-medium sm:text-xl '>
        <h2 className='text-[#c5832b]'>{number}</h2>
        <h2 className=''>{title}</h2>
      </div>
      <div className='col-span-3 font-medium text-lg'>
        <p className='text-gray-500 font-medium sm:text-lg'>{description}</p>
      </div>
    </div>
  )
}





export const HowWeCraftContainer = () => {

  const craft = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We kick off by understanding your goals, vision, and requirements. Through in-depth discussions and analysis, we identify the scope of your project, defining key objectives and outlining a strategic roadmap."
    },
    {
      number: "02",
      title: "Design & Strategy",
      description: "Our creative minds take charge, translating your vision into a comprehensive design and strategy. We craft wireframes, prototypes, and design concepts, ensuring alignment with your brand identity and user-centric functionality."
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Once the blueprint is approved, our expert developers bring it to life. With a keen eye for detail, we meticulously build your project, focusing on robust functionality, smooth performance, and seamless user experiences."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Before the big reveal, we conduct rigorous testing. From functionality checks to performance optimization and cross-device compatibility, we ensure every element works flawlessly."
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description: "It’s showtime! Your project is now ready for the spotlight. We carefully deploy your website or application, ensuring a smooth transition into the digital sphere."
    },
    {
      number: "06",
      title: "Post-Launch Support & Optimization",
      description: "Our commitment doesn’t end at launch. We provide ongoing support and optimization, making necessary tweaks and updates to ensure your project remains at its peak performance."
    },
  ]

  return (


    <div className='bg-[#0d1321] text-white md:py-24 py-10 rounded-t-3xl '>
      <div className='lg:w-[70%] w-[85%] m-auto flex flex-col gap-10'>
        <div className='text-center flex flex-col gap-3'>
          <h3 className='font-medium text-[#c5832b] text-lg'>How it works</h3>
          <h1 className='font-medium lg:text-7xl text-4xl'>Crafting Your Digital Vision</h1>
        </div>
        {craft.map((craft, index) => (
            <HowWeCraft
              key={index}
              number={craft.number}
              title={craft.title}
              description={craft.description}
            />
          ))}
      </div>
    </div>
  )
};

interface CtaProps {
  head1: string;
  head2: string;
  description: string;
  btn: string;
}

export const Cta: React.FC<CtaProps> = ({head1, head2, description, btn}) => {
  return (
    <div className='w-[90%] m-auto grid place-items-center bg-[#c5832b] md:p-20 p-10 lg:py-28 rounded-3xl text-white text-center my-20'>
        <div className='flex flex-col md:gap-7 gap-5 items-center lg:w-[65%] '>
          <div className='flex flex-col gap-2 lg:gap-5'>
            <h1 className='font-medium text-2xl sm:text-4xl lg:text-7xl'>{head1} <br /> {head2}</h1>
            <p className='text-gray-300 text-lg lg:text-xl'>{description}</p>
          </div>
          <Link href="">
            <Schedule text={btn} className='hover:bg-white sm:text-base lg:px-10 px-7 py-3 lg:py-4 hover:text-[#0d1321] transition duration-300 font-medium '/>
          </Link>
        </div>
      </div>
  )
}


interface Technologies {
  head: string;
  description: string;
  btn: string;
  children: React.ReactNode
  className?: string;
  className2?: string;
}

export const Technologies: React.FC<Technologies> = ({head, description, btn, children, className, className2}) => {
  return (
     <div className='md:py-20'>
        <div className={`w-[88%] m-auto lg:grid lg:grid-cols-2 flex flex-col lg:gap-20 gap-10 my-20 items-center ${className2 ? className2 : ''}`}>
          <div className={`flex flex-col gap-3 ${className ? className : ''}`}>
            <h1 className='font-medium lg:text-7xl md:text-4xl sm:text-4xl text-3xl'>{head}</h1>
            <p className='text-lg lg:text-xl leading-relaxed'>{description}</p>
            <Schedule text={btn}/>
          </div>

          <div>
            {children}
          </div>
        </div>

      </div>
  )
}

interface Testimonials{
  children: React.ReactNode
}

export const Testimonials: React.FC<Testimonials> = ({children}) =>{
  return (
    <div className="w-[88%] m-auto lg:grid lg:grid-cols-1 flex flex-col lg:gap-20 gap-10 my-20 items-center">
        <div className="flex flex-col gap-2 md:text-left text-center">
          <h1 className='font-medium lg:text-7xl md:text-4xl sm:text-4xl text-3xl '>Testimonials</h1>
          <p className='text-lg lg:text-xl leading-relaxed'>
            My client's satisfaction is at the heart of everything I do. I believe in building strong, collaborative relationships and delivering solutions that truly make a difference. Each project is approached with dedication, creativity, and a commitment to excellence, ensuring that every detail aligns with my client's goals and vision. From the initial consultation to the final delivery and beyond, I strive to exceed expectations and provide ongoing support. The testimonials below reflect the trust my clients place in me and the positive impact my work has had on their businesses. I'm are proud to be a part of their journeys and grateful for the opportunity to help them grow and succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[70%] md:w-[80%] w-[95%] m-auto">
          {children}
        </div>
      </div>
  )
}

interface Testimony {
  image: string;
  name: string;
  company?: string;
  testimony: string;
}

export const Testimony: React.FC<Testimony> = ({image, name, testimony, company}) => {
  return (
    <div className="shadow p-2 rounded-lg bg-[#0d1321]/40 text-white flex flex-col gap-2">

      <img src={image} alt="About Us" className='w-[100%]  object-fit rounded-xl' />

      <div className="flex flex-col gap-1 ">
        <h3 className="font-medium text-lg text-center capitalize">{name} - <span className="text-amber-700">{company}</span></h3>
        <p className="text-sm text-center">{testimony}</p>
      </div>

    </div>
  )
}
