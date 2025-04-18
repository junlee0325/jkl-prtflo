import React from "react";
import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";
import { Greeting } from "./Greeting";
import { TechContainer } from "./TechContainer";
import { ProjectContainer } from "./ProjectContainer";

const boxStyle =
  "lg:text-lg md:text-base text-xs rounded-xl font-semibold lg:m-0 md:m-0 mx-4 lg:pb-12 md:pb-5 lg:px-12 md:px-5 p-3 shadow-shadow shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-103";

export const Body = () => {
  return (
    <div className="lg:max-w-[1200px] md:max-w-[900px] w-full flex lg:flex-row md:flex-row flex-col lg:my-10 lg:px-1 md:my-10 md:px-4 gap-6 ">
      <InfoCard />
      <motion.div className="lg:w-5/7 md:w-2/3 h-fit flex flex-col gap-6"
              initial={{ x: "110vw" , opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: "anticipate"
              }}>
        <Greeting boxStyle={boxStyle} />
        <TechContainer boxStyle={boxStyle} />
        <ProjectContainer boxStyle={boxStyle} />
      </motion.div>
    </div>
  );
};
