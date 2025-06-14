'use client'

import React, { useState } from 'react'

interface ServiceProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({icon, number, title, description}) => {
  const [showDescription, setShowDescription] = useState(false);

  // Toggle description on mobile tap
  const handleToggle = () => setShowDescription(prev => !prev);

  return (
    <div
      className={`flex flex-col w-full justify-between gap-4 rounded-xl  shadow cursor-pointer transition-all duration-300 ease-in-out ${showDescription ? 'bg-[#c5832b]' : 'bg-gray-200'} hover:bg-[#c5832b] p-3 group`}
      onClick={handleToggle}
      tabIndex={0}
      onBlur={() => setShowDescription(false)}
    >
      <div className='relative w-full sm:h-56 h-52 rounded-lg'>

        {/* Icon */}
        <div className={`text-3xl z-40`}>
          {icon}
        </div>

        {/* title */}
        <div className={`absolute bottom-0 left-0 w-full text-left transition-all duration-300 ease-in-out flex flex-col gap-0 ${showDescription ? 'hidden' : 'group-hover:hidden'}`}>
          <h3 className='font-semibold'>{number} </h3>
          <h2 className='text-xl font-semibold'>{title} </h2>
        </div>

        {/* description */}
        <div className={`absolute bottom-0 left-0 w-full h-[100%] grid place-items-end bg-opacity-90 text-left opacity-0 transition-all duration-300 ease-in-out text-white rounded-lg
          ${showDescription ? 'opacity-100 ' : 'hover:opacity-100'}
        `}>
          <div className='flex flex-col gap-3 flex-wrap'>
            <p className='mb-2 text-gray-300'>{description} </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceCard