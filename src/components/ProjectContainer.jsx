import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import hwatuTarot from "../assets/screenshots/hwatuTarot.webp";
import fridgeRaider from "../assets/screenshots/fridgeRaider.webp";
import skye from "../assets/screenshots/skye.webp";
import weeklyBytes from "../assets/screenshots/weeklyBytes.webp";
import brilly from "../assets/screenshots/brilly.webp";
import aac from "../assets/screenshots/aac.webp";

export const ProjectContainer = ({ boxStyle, setHoveredTechs }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const projects = [
    {
      title: "Atlanta Arm Candy",
      dsc: "An e-commerce Shopify store selling curated bags and purses, customized for a smooth user shopping experience. I built and customized the store using Shopify Liquid templates. Integrated responsive design for mobile and desktop. Managed theme customization and store functionality to create a professional and user-friendly shopping experience.",
      projectUrl: "https://jinoda.myshopify.com/",
      repo: "",
      screenshot: aac,
      techUsed: [
        "Shopify","CSS"
      ],
    },
    {
      title: "brilly",
      dsc: "An AI-assisted flashcard learning app that helps users deepen understanding by generating detailed explanations and contextual examples. Built with React and TypeScript for a scalable component-based architecture, styled with Tailwind for responsive design, and powered by Supabase for authentication and database storage. I integrated AI API calls to dynamically enhance user-provided flashcards and collaborated in Figma to design intuitive UI flows.",
      projectUrl: "https://brilly.netlify.app",
      repo: "https://github.com/danajeon/brilly",
      screenshot: brilly,
      techUsed: [
        "React",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "Figma",
        "Git",
        "GitHub",
        "API",
      ],
    },
    {
      title: "Weekly Bytes",
      dsc: "A weekly meal planner that allows users to select a custom date range and automatically generate randomized menus. Built with React and Tailwind for a clean, responsive front end, and integrated external APIs to fetch diverse recipe options. I handled API integration, state management, and component reusability to ensure scalability and consistent UX. Designed and prototyped collaboratively in Figma and managed version control via Git and GitHub.",
      projectUrl: "https://weekly-bytes.com/",
      repo: "https://github.com/chingu-voyages/V53-tier2-team-26",
      screenshot: weeklyBytes,
      techUsed: [
        "React",
        "Tailwind",
        "API",
        "Figma",
        "Git",
        "GitHub",
        "JavaScript",
      ],
    },
    {
      title: "Skye Contractor Inc.",
      dsc: "A promotional website for a local construction contractor showcasing services, testimonials, and project galleries. Built using React for modularity and SASS for maintainable, structured styling. I developed a responsive layout and image carousel, optimized loading performance, and implemented semantic HTML for SEO. The site improved client visibility and served as a digital business card for local customers.",
      projectUrl: "https://sangkyu-kim.pages.dev/",
      repo: "https://github.com/junlee0325/sangkyu-kim",
      screenshot: skye,
      techUsed: ["React", "SASS", "Git", "GitHub", "JavaScript"],
    },
    {
      title: "Hwatu Tarot",
      dsc: "A solitaire-inspired card reading game combining Korean Hwatu cards and daily horoscopes. Built entirely with vanilla JavaScript, HTML, and CSS to handle complex game logic, animations, and state management without external frameworks. I designed the gameplay loop, randomization logic, and UI, blending cultural inspiration with accessible design. This project demonstrates my ability to manage both logic-heavy and visually engaging front-end builds.",
      projectUrl: "https://hwatu-tarot.com",
      repo: "https://github.com/junlee0325/Hwatu-Tarot",
      screenshot: hwatuTarot,
      techUsed: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
    },
    {
      title: "Fridge Raider",
      dsc: "A recipe finder that helps users reduce food waste by searching for meals based on ingredients they already have. Built with JavaScript, HTML, and CSS for lightweight responsiveness and API integration to fetch recipe data dynamically. I implemented user input handling, API querying, and a results display system, ensuring clarity and usability. This project highlights my ability to build functional web tools centered on real-world user needs.",
      projectUrl: "https://junlee0325.github.io/Fridge-Raider/",
      repo: "https://github.com/junlee0325/Fridge-Raider",
      screenshot: fridgeRaider,
      techUsed: ["JavaScript", "HTML", "CSS", "API", "Git", "GitHub"],
    },
  ];

  return (
    <div
      className={`${boxStyle} bg-[#59a1b7] flex flex-col justify-center items-center text-[#f1f8fa] hover:translate-y-4`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <h3 className="w-full text-center lg:text-2xl md:text-xl text-lg text-[#f1f8fa] pb-4">
        Projects
      </h3>
      <div className="flex flex-col gap-6 w-full items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            dsc={project.dsc}
            projectUrl={project.projectUrl}
            repo={project.repo}
            screenshot={project.screenshot}
            techUsed={project.techUsed}
            setHoveredTechs={setHoveredTechs}
          />
        ))}
      </div>
    </div>
  );
};
