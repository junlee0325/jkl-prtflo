import React from "react";
import { ProjectCard } from "./ProjectCard";
import hwatuTarot from "../assets/screenshots/hwatuTarot.webp";
import fridgeRaider from "../assets/screenshots/fridgeRaider.webp";
import skye from "../assets/screenshots/skye.webp";
import weeklyBytes from "../assets/screenshots/weeklyBytes.webp";

export const ProjectContainer = ({ boxStyle }) => {
  return (
    <div
      className={`${boxStyle} bg-[#59a1b7] flex flex-col justify-center items-center text-[#f1f8fa] hover:translate-y-4`}
    >
      <h3 className="w-full text-center lg:text-2xl md:text-xl text-lg text-[#f1f8fa] pb-4">
        Projects
      </h3>
      <div className="flex flex-col gap-6 w-full lg:h-[1500px] md:h-[1200px] h-[1000px] items-center">
        <ProjectCard
          title="Weekly Bytes"
          dsc="A weekly menu planner that lets users select a date range and generate randomized meal plans."
          projectUrl="https://weekly-bytes.com/"
          repo="https://github.com/chingu-voyages/V53-tier2-team-26"
          screenshot={weeklyBytes}
        />
        <ProjectCard
          title="Hwatu Tarot"
          dsc="Solitaire-like game providing daily horoscopes, inspired by my grandmother's Asian playing card readings."
          projectUrl="https://hwatu-tarot.com"
          repo="https://github.com/junlee0325/Hwatu-Tarot"
          screenshot={hwatuTarot}
        />
        <ProjectCard
          title="Skye Contractor Inc."
          dsc="Promotional website for a local contractor displaying his services and finished projects."
          projectUrl="https://sangkyu-kim.pages.dev/"
          repo="https://github.com/junlee0325/sangkyu-kim"
          screenshot={skye}
        />
        <ProjectCard
          title="Fridge Raider"
          dsc="Website to help you search recipes by ingredients to use up what you have and reduce waste."
          projectUrl="https://junlee0325.github.io/Fridge-Raider/"
          repo="https://github.com/junlee0325/Fridge-Raider"
          screenshot={fridgeRaider}
        />
      </div>
    </div>
  );
};
