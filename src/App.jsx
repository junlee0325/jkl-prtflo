import { useState } from "react";
import "./App.css";
import { Body } from "./components/Body";
import doIt from "./assets/doIt2.webp"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#bcdce5] flex flex-col items-center"
    style={{backgroundImage: `url(${doIt})`, backgroundSize: "4vh", backgroundRepeat: "repeat"}}>
      <Body />
    </div>
  );
}

export default App;
