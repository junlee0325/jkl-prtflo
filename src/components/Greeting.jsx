import React from "react";
import { useState } from "react";

export const Greeting = ({ boxStyle }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      className={`${boxStyle} bg-[#f1f8fa] text-[#366d84] ${
        mouseEnter ? "animate-bouncy" : ""
      } flex flex-col justify-center items-start lg:pt-11`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <span>
        My name is Jun. I'm a front-end developer focused on creating clean, user-centric
        applications that balance performance and simplicity. Skilled in React,
        TypeScript, React Native, and Tailwind CSS, with experience translating
        Figma designs into responsive, accessible interfaces. Adept at
        full-cycle development — from planning and implementation to deployment
        — while maintaining a focus on usability, scalability, and maintainable
        code.
      </span>
      
      <span className="text-lg pt-2 font-semibold text-[rgba(255,174,0,1)]">Let's work together!</span>
    </div>
  );
};
