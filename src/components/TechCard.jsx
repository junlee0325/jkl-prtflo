import React, { useRef, useState } from 'react';
import { useTiltEffect } from '../hooks/useTiltEffect.js';


const TechCard = ({logo, label}) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const tiltHandlers = useTiltEffect(cardRef, glowRef);

  const [textShow, setTextShow] = useState(false)

  return (
    <div className="perspective-[1000px] aspect-1/1 flex flex-col items-center justify-center lg:w-auto md:w-auto max-w-[120px] text-[#182934] lg:mx-0 lg:mt-0 md:mx-0 md:mt-0 mx-2 mt-2" onMouseEnter={() => setTextShow(true)} onMouseLeave={() => setTextShow(false)}>
      <div
        ref={cardRef}
        {...tiltHandlers}
        className="relative rounded-xl aspect-1/1 transform-style-preserve-3d transition-transform duration-1000 ease-out shadow-white shadow-sm hover:shadow-xl hover:scale-110 bg-[#366d84] flex flex-col justify-center items-center "
      >
        <img src={logo} className='bg-white rounded-lg object-contain object-no-repeat  w-[90%] p-2' />
        {textShow && <div className='absolute top-0 left-0 w-full h-full lg:flex md:flex hidden justify-center items-center bg-[#315a6d95] rounded-xl p-2'>
            <span className='lg:block md:block hidden lg:text-2xl md:text-xl text-base text-[#f1f8fa]'>{label}</span>
            </div>
        }
        <div
          ref={glowRef}
          className="pointer-events-none absolute top-0 left-0 w-full z-10 h-full rounded-xl mix-blend-soft-light opacity-100"
        />
      </div>
      <span className='lg:hidden md:hidden text-xs pt-1 font-normal text-[#182934]'>{label}</span>
    </div>
  );
};

export default TechCard;