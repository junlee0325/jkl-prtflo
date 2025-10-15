import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import portrait from "../assets/IMG_4017.webp";
import portraitSmall from "../assets/IMG_4017_2.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckIcon from "@mui/icons-material/Check";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import resume from "../assets/Jun_Kyung_Lee_Resume.pdf";

export const InfoCard = () => {
  const email = "junkyung9503@gmail.com";
  const [copied, setCopied] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    });
  };
  return (
    <div className="w-full">
      <div
        className={`shadow-shadow shadow-md hover:shadow-xl rounded-xl aspect-3/4 hidden md:flex lg:flex items-end transition-all duration-300 ease-in-out hover:scale-103 ${
          mouseEnter ? "" : "animate-bouncy"
        }`}
        style={{
          backgroundImage: `url(${portrait})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <div className="rounded-2xl bg-gradient-to-t from-[#59a1b7] to-transparent w-full h-1/2 flex items-end">
          <div className="w-full flex justify-between lg:p-4 p-3">
            <div className="w-[80%] flex flex-col justify-around items-start text-[#dcedf1]">
              <h1 className="lg:text-3xl md:text-3xl font-semibold text-[rgba(255,174,0,1)]">
                Jun Kyung Lee
              </h1>
              <span
                className="lg:text-sm md:text-sm font-semibold cursor-pointer hover:text-white hover:underline align-middle"
                onClick={handleCopy}
                title="Click to copy"
              >
                {email}
                {!copied && (
                  <CheckIcon fontSize="extrasmall" className="opacity-0" />
                )}
                {copied && <CheckIcon fontSize="extrasmall" />}
              </span>
              <span className="text-xs">
                Frontend Developer | React | JavaScript | TypeScript | React
                Native | Tailwind | Figma | UX/UI
              </span>
            </div>
            <div className="w-[20%] flex flex-col justify-around items-end text-[#dcedf1] text-[28px]">
              <a
                href="https://www.linkedin.com/in/iam-junkyunglee/"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-white"
              >
                <LinkedInIcon fontSize="inherit" />
              </a>
              <a
                href="https://github.com/junlee0325"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-white"
              >
                <GitHubIcon fontSize="inherit" />
              </a>
              <a
                href={resume}
                download="JunKyungLee_Resume.pdf"
                className="hover:text-white"
              >
                <FilePresentIcon fontSize="inherit" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-fit flex md:hidden lg:hidden items-start px-1 bg-gradient-to-t from-transparent to-[#366d84]`}
      >
        <motion.div
          className="w-full flex justify-between items-start flex-row pt-6 px-3"
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "anticipate",
          }}
        >
          <div className="flex flex-col justify-between text-[#315a6d] gap-3 w-[60%]">
            <h1 className="text-3xl font-semibold text-[rgba(255,174,0,1)]">Jun Kyung Lee</h1>
            <span className="text-xs flex flex-wrap text-[#f1f8fa]">
              Frontend Developer | React | JavaScript | TypeScript | React
              Native | Tailwind | Figma | UX/UI
            </span>
            <span
              className="text-md cursor-pointer hover:underline align-middle text-[#315a6d]"
              onClick={handleCopy}
              title="Click to copy"
            >
              {email} {copied && <CheckIcon fontSize="extrasmall" />}
            </span>
          </div>
          <div className="w-[30%] flex flex-col items-end text-[#315a6d]">
            <img
              src={portraitSmall}
              loading="lazy"
              className="h-[100px] aspect-1 position-center saturate-90  object-cover rounded-xl shadow-black shadow-md"
            />
            <div className="flex justify-end items-start gap-3 text-[28px]">
              <a
                href="https://www.linkedin.com/in/iam-junkyunglee/"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-white"
              >
                <LinkedInIcon fontSize="inherit" />
              </a>
              <a
                href="https://github.com/junlee0325"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-white"
              >
                <GitHubIcon fontSize="inherit" />
              </a>
              <a
                href={resume}
                download="JunKyungLee_Resume.pdf"
                className="hover:text-white"
              >
                <FilePresentIcon fontSize="inherit" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
