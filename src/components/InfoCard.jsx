import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import portrait from "../assets/jun5.webp";
import portraitSmall from "../assets/jun6.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckIcon from "@mui/icons-material/Check";

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
        className={`shadow-shadow shadow-md hover:shadow-xl rounded-xl aspect-3/4 hidden md:flex lg:flex items-end transition-all duration-300 ease-in-out hover:scale-103 ${mouseEnter ? "" : "animate-bouncy"}`}
        style={{
          backgroundImage: `url(${portrait})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      >
        <div className="rounded-2xl bg-gradient-to-t from-[#3d859d] to-transparent w-full h-1/2 flex items-end">
          <div className="w-full flex justify-between lg:p-4 p-3">
            <div className="flex flex-col justify-around items-start text-[#dcedf1] gap-2">
              <h1 className="lg:text-3xl md:text-3xl font-semibold text-white">
                Jun Kyung
              </h1>
              <h1 className="lg:text-3xl md:text-3xl font-semibold text-white">
                Lee
              </h1>
              <span
                className="lg:text-md md:text-md cursor-pointer hover:text-white hover:underline align-middle"
                onClick={handleCopy}
                title="Click to copy"
              >
                {email}
                {!copied && (
                  <CheckIcon fontSize="extrasmall" className="opacity-0" />
                )}
                {copied && <CheckIcon fontSize="extrasmall" />}
              </span>
            </div>
            <div className="flex flex-col justify-around items-end text-[#dcedf1] gap-2 lg:text-[40px] md:text-[32px]">
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
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[130px] flex md:hidden lg:hidden items-start px-1`}
      >
        <motion.div className="w-full flex justify-between items-start flex-row py-6 px-3"
        initial={{ y: "110vh" , opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "anticipate"
        }}>
          <div className="flex flex-col justify-start text-[#315a6d] gap-1">
            <h1 className="text-3xl font-semibold">Jun Kyung Lee</h1>
            <span
              className="text-base cursor-pointer hover:underline align-middle"
              onClick={handleCopy}
              title="Click to copy"
            >
              {email} {copied && <CheckIcon fontSize="extrasmall" />}
            </span>
            <div className="flex justify-start gap-2 text-3xl">
              <a
                href="https://www.linkedin.com/in/iam-junkyunglee/"
                target="_blank"
                rel="noopener norefferer"
              >
                <LinkedInIcon fontSize="inherit" />
              </a>
              <a
                href="https://github.com/junlee0325"
                target="_blank"
                rel="noopener norefferer"
              >
                <GitHubIcon fontSize="inherit" />
              </a>
            </div>
          </div>
          <img
            src={portraitSmall}
            loading="lazy"
            className="position-center saturate-90 w-[110px] h-[110px] object-cover object-top rounded-xl shadow-black shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};
