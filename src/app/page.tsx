import React from "react";

import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import ScrollToTop from "@/components/ui/scrollToTop";
import Footer from "@/components/ui/footer";
import { Hero, Cta, Technologies } from "@/components/ui/serviceContainer";
import PortfolioCard from '@/components/ui/portfolioCard'

export default function Home() {

  const projects = [
    {
      name: "Website Development For Brela Agency",
      image: "/brela.png",
      link: "https://brela.vercel.app"
    },
    {
      name: 'Website Development For TechCrib Agency',
      image: "techcrib.png",
      link: 'https://techcrib.vercel.app'
    },
    {
      name: 'Website Development For Eazii Exchange',
      image: "eazii.png",
      link: 'https://eazii-exchange-mtap.vercel.app'
    },
  ];

  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Hero
        subHead="Crafting Seamless Digital Experiences"
        head="Frontend Web Developer"
        description="Building responsive, accessible, and visually striking websites with clean code and modern frameworks. Let’s turn your vision into reality."
        btn="Let's Connect"
        imageSrc="/code_landscape.jpg"
      />


      {/* Projects */}
      <div className=' bg-gray-100'>
        <div className="lg:w-[88%] w-[85%] m-auto flex flex-col gap-20 py-20">
          <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold  h-fit'>Projects</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 '>
          
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                name={project.name}
                image={project.image}
                link={project.link} 
              />
            ))}
          </div>
        </div>
      </div>

      <Technologies
        head='Technologies I Utilize'
        description='I harness the power of cutting-edge technologies to craft innovative and robust solutions for our clients. Our team is well-versed and proficient in a variety of tools, languages, and frameworks.'
        btn='Start a project'
      >
          <div className='grid lg:grid-cols-3 grid-cols-2 sm:gap-20 gap-10 place-items-center'>
            <img src="/php.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/react.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/laravel.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/node.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/aws.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/ionic.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/digitalocean.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/python.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
          </div>
      </Technologies>

      <Cta
        head1='Need a custom solution'
        head2='for your business?'
        description="Let's collaborate and turn your vision into reality. Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect"
        btn="Let's Work"
      />




      <Footer/>
    </div>
  );
}
