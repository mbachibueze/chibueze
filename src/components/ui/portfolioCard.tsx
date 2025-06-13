import React from 'react'

interface PortfolioCardProps {
  name: string;
  image: string;
  link?: string;
}




const PortfolioCard: React.FC<PortfolioCardProps>= ({name, image, link}) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className=' transition-all duration-300 group'>
        <div className='overflow-hidden rounded-2xl flex flex-col gap-5'>
          <div className='rounded-2xl'>
            <img src={image} alt={`Preview of ${name}`} className='shadow w-[100%] h-52 sm:h-80 lg:h-56 object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105' />
          </div>
          <h2 className='text-lg font-medium mt-2'>{name}</h2>
        </div>
    </a>
  )
}

export default PortfolioCard