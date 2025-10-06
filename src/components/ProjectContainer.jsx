import React from "react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import hwatuTarot from "../assets/screenshots/hwatuTarot.webp";
import fridgeRaider from "../assets/screenshots/fridgeRaider.webp";
import skye from "../assets/screenshots/skye.webp";
import weeklyBytes from "../assets/screenshots/weeklyBytes.webp";
import brilly from "../assets/screenshots/brilly.webp";

export const ProjectContainer = ({ boxStyle, setHoveredTechs }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      className={`${boxStyle} bg-[#59a1b7] flex flex-col justify-center items-center text-[#f1f8fa] hover:translate-y-4 `}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <h3 className="w-full text-center lg:text-2xl md:text-xl text-lg text-[#f1f8fa] pb-4">
        Projects
      </h3>
      <div className="flex flex-col gap-6 w-full lg:h-fit md:h-fit h-fit items-center">
        <ProjectCard
          title="brilly"
          dsc="AI assisted flashcard learning tool providing additional elaboration on words/concepts"
          projectUrl="https://brilly.netlify.app"
          repo="https://github.com/danajeon/brilly"
          screenshot={brilly}
          techUsed={[
            "React",
            "TypeScript",
            "Tailwind",
            "Supabase",
            "Figma",
            "Git",
            "GitHub",
            "API",
          ]}
          setHoveredTechs={setHoveredTechs}
        ></ProjectCard>
        <ProjectCard
          title="Weekly Bytes"
          dsc="A weekly menu planner that lets users select a date range and generate randomized meal plans."
          projectUrl="https://weekly-bytes.com/"
          repo="https://github.com/chingu-voyages/V53-tier2-team-26"
          screenshot={weeklyBytes}
          techUsed={[
            "React",
            "Tailwind",
            "API",
            "Figma",
            "Git",
            "GitHub",
            "JavaScript",
          ]}
          setHoveredTechs={setHoveredTechs}
        />
        <ProjectCard
          title="Hwatu Tarot"
          dsc="Solitaire-like game providing daily horoscopes, inspired by my grandmother's Asian playing card readings."
          projectUrl="https://hwatu-tarot.com"
          repo="https://github.com/junlee0325/Hwatu-Tarot"
          screenshot={hwatuTarot}
          techUsed={["HTML", "CSS", "JavaScript", "Git", "GitHub"]}
          setHoveredTechs={setHoveredTechs}
        />
        <ProjectCard
          title="Skye Contractor Inc."
          dsc="Promotional website for a local contractor displaying his services and finished projects."
          projectUrl="https://sangkyu-kim.pages.dev/"
          repo="https://github.com/junlee0325/sangkyu-kim"
          screenshot={skye}
          techUsed={["React", "SASS", "Git", "GitHub", "JavaScript"]}
          setHoveredTechs={setHoveredTechs}
        />
        <ProjectCard
          title="Fridge Raider"
          dsc="Website to help you search recipes by ingredients to use up what you have and reduce waste."
          projectUrl="https://junlee0325.github.io/Fridge-Raider/"
          repo="https://github.com/junlee0325/Fridge-Raider"
          screenshot={fridgeRaider}
          techUsed={["HTML", "CSS", "JavaScript", "API", "Git", "GitHub"]}
          setHoveredTechs={setHoveredTechs}
        />
      </div>
    </div>
  );
};
