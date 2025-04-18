import { useState } from "react";
import "./App.css";
import { Body } from "./components/Body";
import doIt from "./assets/doIt2.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div
      className="w-full min-h-screen bg-[#bcdce5] flex flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${doIt})`,
        backgroundSize: "4vh",
        backgroundRepeat: "repeat",
      }}
    >
      <Body />
      <footer className="w-full bg-[#8ec3d2] flex lg:flex-row md:flex-row flex-col lg:justify-center md:justify-center justify-center items-center mt-12 lg:gap-4 md:gap-4 p-1 text-[white] text-sm">
        <span>© 2025 Jun kyung Lee. All rights reserved.</span>
        <div className="flex gap-2">
          <span>Contact:</span>
          <div className="flex gap-2">
            <span className="hover:underline">junlee0325@gmail.com</span>
            <a
              href="https://www.linkedin.com/in/iam-junkyunglee/"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-black"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://github.com/junlee0325"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-black"
            >
              <GitHubIcon fontSize="small" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
