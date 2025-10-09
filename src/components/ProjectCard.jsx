import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectCard = ({ screenshot, title, dsc, projectUrl, repo, techUsed, setHoveredTechs }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
    setHoveredTechs(techUsed);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
    setHoveredTechs([]);
  };

  return (
    <div
      className={`flex flex-col justify-end basis-[300px] w-full rounded-xl transition-all duration-500 ease-in-out hover:basis-[400px] shadow-black shadow-md hover:shadow-lg text-[#f1f8fa] hover:text-[#182934] ${mouseEnter ? "animate-bouncy" : ""}`}
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => window.open(`${projectUrl}`,"_blank")}
    >
      <div
        // href={`${projectUrl}`}
        // target="_blank"
        // rel="noopener noreferrer"
        className="flex flex-col justify-end w-full h-full bg-gradient-to-t from-[#315a6d] to-transparent hover:from-[#f1f8fa] rounded-xl"
      >
        {/* {mouseEnter && (
          <div className=" h-full inset-0 lg:flex hidden flex-col justify-end p-4 text-[#182934] bg-gradient-to-t from-[#dcedf1] to-transparent">
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
        )} */}

        <div className="flex justify-start gap-2 items-center text-inherit lg:px-5 px-4 lg:pb-4 md:pb-0">
          <a
            href={`${projectUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold lg:text-2xl md:text-2xl text-xl hover:underline hover:text-[#59a1b7] cursor-pointer ${mouseEnter ? "animate-custom-pulse" : ""}`}
          >
            {title}
          </a>
          <a
            href={`${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center rounded-full hover:text-[#59a1b7] px-2 cursor-pointer"
          >
            <GitHubIcon fontSize="medium" />
          </a>
          <div className="lg:flex md:flex hidden flex-wrap gap-1">
            {techUsed.map((x, i) => { 
              if(i === techUsed.length - 1) {
                return <span className="lg:text-sm md:text-xs">{x}</span>
              } else {
                return <span className="lg:text-sm md:text-xs flex flex-nowrap">{x} |</span>
              }
            }
            )}
          </div>
        </div>
        <div className="block lg:hidden text-sm font-normal mt-1 text-inherit px-4 pb-3">
          <span>{dsc}</span>
          <div className="flex gap-1 flex-wrap md:hidden text-gray-300">
            {techUsed.map((x, i) => { 
              if(i === techUsed.length - 1) {
                return <span className="text-xs">{x}</span>
              } else {
                return <span className="text-xs">{x} |</span>
              }
            }
            )}
          </div>
        </div>
        {mouseEnter && (
          <span className="lg:block hidden text-lg  mt-1 text-inherit px-5 pb-6">
            {dsc}
          </span>
        )}
      </div>
    </div>
  );
};
