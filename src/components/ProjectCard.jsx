import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectCard = ({ screenshot, title, dsc, projectUrl, repo }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="flex basis-0 grow-1 w-full rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:basis-0 lg:hover:grow-[1.8] md:hover:grow-[1.5] shadow-white shadow-sm hover:shadow-xl text-inherit"
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <a
        href={`${projectUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-end w-full h-full cursor-pointer bg-gradient-to-t from-[#2f4d5b] to-transparent hover:from-transparent"
      >
        {mouseEnter && (
          <div className=" h-full inset-0 lg:flex md:flex hidden flex-col justify-end p-4 text-[#182934] bg-gradient-to-t from-[#dcedf1] to-transparent">
            <div className="flex justify-start gap-2 items-end">
              <a
                href={`${projectUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold lg:text-3xl md:text-2xl hover:underline hover:text-[#3d859d]"
              >
                {title}
              </a>
              <a
                href={`${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-end rounded-full p-1 hover:text-[#3d859d]"
              >
                <GitHubIcon fontSize="medium" />
                <span>&nbsp;Repository</span>
              </a>
            </div>
            <span className="mt-1 lg:text-xl md:text-md font-normal">
              {dsc}
            </span>
          </div>
        )}
        <div className="lg:hidden md:hidden h-7/8 inset-0 flex flex-col justify-end p-4 text-[#dcedf1] bg-gradient-to-t from-[#315a6d] to-transparent">
          <div className="flex justify-between gap-2 items-center text-white">
            <a
              href={`${projectUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg hover:underline hover:text-white"
            >
              {title}
            </a>
            <a
              href={`${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-full p-1 hover:text-white"
            >
              <GitHubIcon fontSize="medium" />
            </a>
          </div>
          <span className="text-sm font-normal mt-1 text-white">{dsc}</span>
        </div>
      </a>
    </div>
  );
};
