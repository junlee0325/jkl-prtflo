import React from "react";
import { useState } from "react";

export const Greeting = ({boxStyle}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div className={`${boxStyle} bg-[#f1f8fa] text-[#366d84] lg:pt-11 md:pt-4 ${mouseEnter ? "animate-bouncy" : ""}`}
    onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}>
      <span className="lg:pt-12 md:pt-5">
        My name is Jun. I'm a software enigineer with a strong foundation in both
        technology and business strategy. Having worked as a software consultant
        and co-owned a retail business, I understand the importance of crafting
        solutions that not only look great but also make an impact. Whether it’s
        optimizing user experience, improving performance, or integrating
        complex functionalities, I’m always up for the challenge.
      </span>
    </div>
  );
};
