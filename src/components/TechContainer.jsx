import React from "react";
import { useState } from "react";
import TechCard from "./TechCard";
import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import javascript from "../assets/tech/javascript.webp";
import react from "../assets/tech/react.webp";
import tailwind from "../assets/tech/tailwind.webp";
import sass from "../assets/tech/sass.webp";
import git from "../assets/tech/git.webp";
import github from "../assets/tech/github.webp";
import figma from "../assets/tech/figma.webp";
import api from "../assets/tech/api.webp";
import json from "../assets/tech/json.webp";
import typescript from "../assets/tech/typescript.webp";
import photoshop from "../assets/tech/photoshop.webp";
import supabase from "../assets/tech/supabase.webp";
import reactNative from "../assets/tech/reactNative.webp";

export const TechContainer = ({ boxStyle, hoveredTechs }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const techs = [
    { logo: html, label: "HTML" },
    { logo: css, label: "CSS" },
    { logo: javascript, label: "JavaScript" },
    { logo: react, label: "React" },
    { logo: typescript, label: "TypeScript" },
    { logo: tailwind, label: "Tailwind" },
    { logo: sass, label: "SASS" },
    { logo: git, label: "Git" },
    { logo: github, label: "GitHub" },
    { logo: figma, label: "Figma" },
    { logo: api, label: "API" },
    { logo: photoshop, label: "Photoshop" },
    { logo: supabase, label: "Supabase" },
    { logo: reactNative, label: "React Native" },
  ];

  return (
    <div
      className={`lg:text-lg md:text-base text-xs rounded-xl font-semibold lg:m-0 md:m-0 mx-3 lg:pb-12 md:pb-5 lg:px-0 md:px-0 p-3 shadow-shadow shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-103 bg-[#8ec3d2]`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <h3 className="w-full text-center lg:text-2xl md:text-xl text-lg text-[#2b414e] pb-2">
        Toolbox
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-6 md:p-4 lg:gap-4 md:gap-4 gap-2">
        {techs.map(({ logo, label }) => (
          <TechCard
            key={label}
            logo={logo}
            label={label}
            highlight={hoveredTechs.includes(label)} // <-- highlight if in hoveredTechs
          />
        ))}
      </div>
    </div>
  );
};
