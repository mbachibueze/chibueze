import React from 'react';
import Link from 'next/link';
interface ScheduleProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}


const Schedule: React.FC<ScheduleProps> = ({
  text = "Schedule a Meeting",
  className = "",
  onClick
}) => {
  const baseClass =
    "bg-[#0d1321] hover:bg-[#c5832b] transition-all duration-200 text-white lg:px-10 px-5 py-2 lg:py-4 md:rounded-2xl rounded-lg lg:text-lg sm:text-lg text-lg cursor-pointer flex items-center gap-3";

  return (
    <div>
      <Link href={'/contact'}>
        <button className={`${baseClass} ${className}`} onClick={onClick}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Schedule;
