import React, { useRef, useState } from 'react';
import { useTiltEffect } from '../hooks/useTiltEffect.js';


const TechCard = ({logo, label, highlight}) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const tiltHandlers = useTiltEffect(cardRef, glowRef);

  const [textShow, setTextShow] = useState(false)
const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div className={`perspective-[1000px] aspect-1/1 flex flex-col items-center flex-1 justify-center lg:w-auto md:w-auto w-[90%] text-[#182934] lg:mx-0 lg:mt-0 md:mx-0 md:mt-0 mx-2 mt-2 ${mouseEnter ? "animate-bouncy" : ""} rounded-2xl ${highlight ? "lg:scale-130 md:scale-130 scale-110" : ""} ${highlight ? "animate-bouncy" : ""} hover:z-200`} onMouseEnter={() => {setTextShow(true);setMouseEnter(true)}} onMouseLeave={() => {setTextShow(false);setMouseEnter(false)}}>
      <div
        ref={cardRef}
        {...tiltHandlers}
        className={`relative rounded-2xl aspect-1/1 transform-style-preserve-3d transition-transform duration-1000 ease-out shadow-black shadow-md lg:hover:shadow-lg md:hover:shadow-lg hover:shadow-sm hover:scale-120  flex flex-col justify-center items-center `}
      >
        <img src={logo} className='bg-white rounded-2xl object-contain object-no-repeat  w-[100%] p-2' />
        {textShow && <div className='absolute top-0 left-0 w-full h-full lg:flex md:flex hidden justify-center items-center bg-[rgba(49,90,109,0.85)] rounded-2xl p-2 '>
            <span className='lg:block md:block hidden text-center lg:text-sm md:text-sm text-[white]'>{label}</span>
            </div>
        }
        <div
          ref={glowRef}
          className="pointer-events-none absolute top-0 left-0 w-full z-10 h-full rounded-2xl mix-blend-soft-light opacity-100"
        />
      </div>
      <span className='lg:hidden md:hidden text-xs text-center pt-1 font-normal text-[#182934]'>{label}</span>
    </div>
  );
};

export default TechCard;