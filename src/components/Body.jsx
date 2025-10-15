import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";
import { Greeting } from "./Greeting";
import { TechContainer } from "./TechContainer";
import { ProjectContainer } from "./ProjectContainer";

const boxStyle =
  "lg:text-lg md:text-base text-xs rounded-xl font-semibold lg:m-0 md:m-0 mx-3 lg:pb-12 md:pb-5 lg:px-5 md:px-5 p-3 shadow-shadow shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-103";

export const Body = () => {
  const [hoveredTechs, setHoveredTechs] = useState([]);
  return (
    <div className="lg:max-w-[1200px] md:max-w-[1000px] w-full h-inherit  lg:px-1  md:px-4">
      {/* Desktop / Tablet Layout */}
      <div className="hidden md:flex lg:flex flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:w-2/8 md:w-1/3 h-[220vh]">
          <motion.div
            className="sticky top-10 flex flex-col gap-6"
            initial={{ y: "110vh", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
          >
            <InfoCard />
            <TechContainer boxStyle={boxStyle} hoveredTechs={hoveredTechs}/>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-6/8 md:w-2/3 h-full">
          <motion.div
            className="flex flex-col gap-6 h-fit"
            initial={{ x: "110vw", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
          >
            <Greeting boxStyle={boxStyle} />
            <ProjectContainer boxStyle={boxStyle} setHoveredTechs={setHoveredTechs}/>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 md:hidden lg:hidden">
        {/* Info Card always visible */}
        <div className="w-full">
          <InfoCard />
        </div>

        {/* Animated Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ x: "110vw", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "anticipate",
          }}
        >
          <Greeting boxStyle={boxStyle} />
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          initial={{ x: "-110vw", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "anticipate",
          }}
        >
          <TechContainer boxStyle={boxStyle} hoveredTechs={hoveredTechs}/>
          <ProjectContainer boxStyle={boxStyle} setHoveredTechs={setHoveredTechs}/>
        </motion.div>
      </div>
    </div>
  );
};
