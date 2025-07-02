'use client'

import React from "react";


import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import ScrollToTop from "@/components/ui/scrollToTop";
import Footer from "@/components/ui/footer";
import { Hero, Cta, Technologies, Testimonials, Testimony } from "@/components/ui/serviceContainer";
import PortfolioCard from '@/components/ui/portfolioCard'
import ServiceCard from "@/components/ui/serviceCard";


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

  const services = [
    {
      icon: "🌐",
      number: "01",
      title: "Website Development",
      description: "Design and develop fully responsive and interactive websites tailored to your brand or business. Whether it's a landing page, personal blog, portfolio, or company site, your project will be built with clean, optimised, and scalable code using the latest web technologies."
    },
    {
      icon: "🧩",
      number: "02",
      title: "UI/UX Implementation from Figma/Designs",
      description: "Transform static designs into pixel-perfect, interactive web interfaces. Specialised in converting Figma, Adobe XD, or Sketch designs into modern and responsive frontends, ensuring a seamless experience across all devices."
    },
    {
      icon: "📱",
      number: "03",
      title: "Responsive & Mobile-First Development",
      description: "Ensure your website looks great and functions perfectly on all devices—phones, tablets, and desktops. Expert in building mobile-first layouts that adapt gracefully to any screen size, using Tailwind CSS and modern CSS techniques."
    },
    {
      icon: "⚙",
      number: "04",
      title: "Integration with APIs and Backends",
      description: "Integrate dynamic data from RESTful or GraphQL APIs, enabling real-time updates, content management, form submissions, authentication, and more. Perfect for portfolios, dashboards, or business platforms that need interactive features."
    },
    {
      icon: "🛒",
      number: "05",
      title: "E-commerce Frontend Development",
      description: "Build elegant and conversion-focused online stores with clean UI and responsive components. Experience working with platforms like Shopify Headless, WooCommerce themes, or custom e-commerce using React/Next.js."
    },
    {
      icon: "📊",
      number: "06",
      title: "Admin Dashboards & Web Applications",
      description: "Develop intuitive, data-driven admin dashboards, SaaS platforms, and user interfaces that provide real-time insights and interactivity. Skilled in chart libraries, state management, and modular UI frameworks."
    },
    {
      icon: "🚀",
      number: "07",
      title: "Performance Optimisation",
      description: "Optimise page load times, reduce asset sizes, and improve Core Web Vitals to boost your SEO rankings and user retention. Ideal for businesses that want speed, efficiency, and a smoother user experience."
    },
    {
      icon: "🎨",
      number: "08",
      title: "Custom Component & UI Library Design",
      description: "Create reusable UI components using tools like Storybook, Chakra UI, ShadCN, and Tailwind CSS, ensuring design consistency and faster development across large-scale projects."
    },
    {
      icon: "🔧",
      number: "09",
      title: "Maintenance & Feature Updates",
      description: "Offer ongoing frontend support for existing websites or apps. Add new features, fix bugs, refactor outdated code, and implement the latest best practices to keep your project modern and secure."
    },
  ]

  const testimony = [
     {
      image: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Adeola Olufemi',
      company: 'Bugu Pay',
      testimony: "I had a fantastic experience working with this frontend developer. He were professional, responsive, and delivered a high-quality website that exceeded my expectations. The attention to detail and commitment to excellence is truly commendable!"
    },
    {
      image: 'https://img.freepik.com/premium-photo/close-up-portrait-young-woman-with-dreadlocks-against-white-background_1048944-19549237.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Aisha Kofi',
      company: 'todex',
      testimony: "The website is a masterpiece! The design is sleek, the functionality is top-notch, and the user experience is seamless. I couldn't be happier with the results. Highly recommend!"
    },
    {
      image: 'https://img.freepik.com/premium-photo/minimal-head-shoulders-portrait-handsome-africanamerican-man-looking-camera-against-blue_236854-33949.jpg?uid=R77772689&ga=GA1.1.746289648.1661586601&semt=ais_hybrid',
      name: 'Victor Emmanuel',
      company: 'Eazzi Exchange',
      testimony: "I am thoroughly impressed with the quality of work delivered. The website is not only visually appealing but also highly functional. The developer's expertise in frontend technologies is evident in every aspect of the site. I highly recommend their services!"
    },

   
  ]
 

  
  return (
    <main>
      <Navbar/>
      <ScrollToTop/>
      <Hero
        subHead="Crafting Seamless Digital Experiences"
        head="Frontend Web Developer"
        description="Building responsive, accessible, and visually striking websites with clean code and modern frameworks. Let’s turn your vision into reality."
        btn="Let's Connect"
        imageSrc="/code_landscape.jpg"
      />


      {/* services */}
      <div className='bg-gray-100'>
        <div className="lg:w-[88%] w-[85%] m-auto flex flex-col gap-10 py-20">
          <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold  h-fit'>Services</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 '>
          
            {services.map ((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              number={service.number}
              description={service.description}
            />
          ))}
          </div>
        </div>
      </div>


      {/* Projects */}
      <div className='bg-gray-200'>
        <div className="lg:w-[88%] w-[85%] m-auto flex flex-col gap-10 py-20">
          <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold  h-fit'>Projects</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
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
            <img src="/react.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/node.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
            <img src="/python.webp" alt="php" className='lg:w-[150px] sm:w-[200px] w-[150px]'/>
          </div>
      </Technologies>

      {/* Testimonials */}
      <Testimonials>
        {testimony.map((testimony, index) => (
          <Testimony
            key={index}
            image={testimony.image}
            name={testimony.name}
            company={testimony.company}
            testimony={testimony.testimony}
          />
        ))}
      </Testimonials>

      <Cta
        head1='Need a custom solution'
        head2='for your business?'
        description="Let's collaborate and turn your vision into reality. Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect"
        btn="Let's Work"
      />




      <Footer/>
    </main>
  );
}
