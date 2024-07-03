import React from "react";
import GlitchedText from "../GlitchedText/GlitchedText";

import bbpipelineImage from "./bbpipeline.png";
import osintImage from "./osint.png";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
}

function Project(props: ProjectProps) {
  const { name, description, image } = props;

  return (
    <li className="project">
      <span className="project-name">{name}</span> - {description}
      <img src={image} width="800" alt="semargl repo" />
    </li>
  );
}

export default function Projects() {
  return (
    <div className="section">
      <GlitchedText noflick>Projects</GlitchedText>

      <ul style={{ textAlign: "center" }}>
        <Project
          name="BBPipeline"
          description="an automation framework to manage routine operations like reconnaisance during penetration testing or bug bounty"
          image={bbpipelineImage}
        />
        <Project
          name="OSINT help bot"
          description="a telegram bot for helping with OSINT  (Open Source Intelligence) investigations"
          image={osintImage}
        />
      </ul>
    </div>
  );
}
