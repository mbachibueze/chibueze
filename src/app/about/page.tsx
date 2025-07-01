import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import ScrollToTop from '@/components/ui/scrollToTop'
import React from 'react'

const About = () => {
  return (
    <div >
      <Navbar/>
      <ScrollToTop/>
      <section className=' py-20 h-[30vh] grid place-items-center mx-auto'>
        <div className=' '>
          <h1 className='font-medium lg:text-9xl md:text-7xl sm:text-6xl text-4xl text-center'>About Me</h1>
        </div>
      </section>
      <section className='bg-gray-100 py-20 '>

        <div className='lg:w-[85%] w-[90%] m-auto flex flex-col gap-10'>

          {/* Who I am */}
          <div>
            <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold'>Who I Am</h1>
            <p className='text-lg lg:text-xl leading-relaxed'>
              I am a passionate and dedicated software developer with a strong focus on delivering high-quality solutions. My expertise lies in creating robust web applications, school/university portals, e-commerce solutions, membership platforms, and enterprise solutions. I thrive on challenges and continuously seek to enhance my skills to provide the best possible service to my clients.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold'>My Mission</h1>
            <p className='text-lg lg:text-xl leading-relaxed'>
              My mission is to empower businesses and individuals through innovative software solutions. I aim to understand my clients' unique needs and deliver tailored applications that drive efficiency, enhance user experience, and achieve their goals. I am committed to continuous learning and adapting to the ever-evolving tech landscape to provide cutting-edge solutions.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h1 className='text-4xl lg:text-7xl md:text-5xl text-left text-[#0d1321] font-semibold'>My Toolbox</h1>
            <div className='flex flex-col gap-2 mt-2 pl-5'>
              <h2 className='font-medium under text-xl'>Languages & Framework</h2>
              <ul className='text-gray-700 flex flex-col gap-4 lg:text-lg sm:text-base text-xs list-decimal pl-5'>
                <li><b>HTML5 / CSS2 / Tailwind CSS</b> - Responsive layouts and design systems</li>
                <li><b>Javascript / Typescript</b> - Writing scalable, maintainable logic</li>
                <li><b>React/Next.js</b> - Building modular, high-performance frontends</li>
                <li><b>Chakra UI / ShadCN</b> - Accessible components libraries</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2 mt-2 pl-5'>
              <h2 className='font-medium under text-xl'>Tools & Technologies</h2>
              <ul className='text-gray-700 flex flex-col gap-4 lg:text-lg sm:text-base text-xs list-decimal pl-5'>
                <li><b>Git / GitHub</b> - Version control and collaboration</li>
                <li><b>Figma / Adobe XD</b> - Prototyping and design collaboration</li>
                <li><b>Vercel / Netlify</b> - Deployment and hosting solutions</li>
              </ul>
            </div>
          </div>

          {/* Let's Collaborate */}
          <div className='bg-[#c5832b] text-white p-10 rounded-2xl'>
            <h1 className='text-4xl lg:text-7xl md:text-5xl text-left font-semibold'>Let's Collaborate</h1>
            <p className='text-lg lg:text-xl leading-relaxed mt-3 text-gray-300'>
              I am always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out. Let's work together to create something amazing!
            </p>
           
            <div className='mt-5 ml-auto w-[100%] grid'>
              <a href="https://www.linkedin.com/in/mba-chibueze-8118a9252" className='p-3 rounded lg:place-items-end md:place-items-center  ml-auto text-right bg-[#0d1321] text-white text-xl w-fit'>Connect on LinkedIn</a>
            </div>

          </div>
        </div>

      </section>

      <Footer/>
    </div>
  )
}

export default About