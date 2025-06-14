import React from 'react'

interface PortfolioCardProps {
  name: string;
  image: string;
  link?: string;
}




const PortfolioCard: React.FC<PortfolioCardProps>= ({name, image, link}) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className=' transition-all duration-300 group'>
        <div className='overflow-hidden rounded-2xl flex flex-col sm:gap-5 gap-2 box-border '>
          <div className='rounded-2xl'>
            <img src={image} alt={`Preview of ${name}`} className='shadow w-fit h-52 sm:h-80 lg:h-56 object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105' />
          </div>
          <h2 className='text-lg font-medium p-2'>{name}</h2>
        </div>
    </a>
  )
}

export default PortfolioCard