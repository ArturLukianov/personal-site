import React from "react";
import "./App.css";
import GlitchedText from "./components/GlitchedText/GlitchedText";
import Projects from "./components/Projects/Projects";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Bio from "./components/Bio/Bio";
import Header from "./components/Header/Header";
import Comic from "./components/Comic/Comic";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />

        <main>
          <Bio />
          <Projects />
          <SocialMedia />
          <Comic/>
        </main>
      </div>
    </>
  );
}
