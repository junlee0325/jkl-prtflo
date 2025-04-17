import React from "react";

export const Greeting = ({boxStyle}) => {
  return (
    <div className={`${boxStyle} bg-[#f1f8fa] text-[#366d84] lg:pt-11 md:pt-4`}>
      <span className="lg:pt-12 md:pt-5">
        {new Date().getHours() < 12
          ? "Good morning"
          : new Date().getHours() < 18
          ? "Good afternoon"
          : "Good evening"}
        , I'm Jun, a software enigineer with a strong foundation in both
        technology and business strategy. Having worked as a software consultant
        and co-owned a retail business, I understand the importance of crafting
        solutions that not only look great but also make an impact. Whether it’s
        optimizing user experience, improving performance, or integrating
        complex functionalities, I’m always up for the challenge.
      </span>
    </div>
  );
};
