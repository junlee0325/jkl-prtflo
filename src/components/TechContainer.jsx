import React from 'react'
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
import photoshop from "../assets/tech/photoshop.webp";

export const TechContainer = ({boxStyle}) => {
  return (
    <div className={`${boxStyle} bg-[#8ec3d2]`}>
        <h3 className='w-full text-center lg:text-2xl md:text-xl text-lg text-[#2b414e] pb-2'>Toolbox</h3>
        <div className='grid lg:grid-cols-6 md:grid-cols-6 grid-cols-4 place-items-center lg:gap-6 md:gap-4 gap-0'>
        <TechCard logo={html} label={"HTML"} />
          <TechCard logo={css} label={"CSS"} />
          <TechCard logo={javascript} label={"JavaScript"} />
          <TechCard logo={react} label={"React"} />
          <TechCard logo={tailwind} label={"Tailwind"} />
          <TechCard logo={sass} label={"SASS"} />
          <TechCard logo={git} label={"Git"} />
          <TechCard logo={github} label={"GitHub"} />
          <TechCard logo={figma} label={"Figma"} />
          <TechCard logo={api} label={"API"} />
          <TechCard logo={json} label={"JSON"} />
          <TechCard logo={photoshop} label={"Photoshop"} />
    </div>
    </div>
  )
}
