import React from "react";
import GlitchedText from "../GlitchedText/GlitchedText";

export default function Bio() {
  return (
    <div className="section">
      <GlitchedText noflick>Bio</GlitchedText>

      <p>I am Information Security Specialist with wide range of skills:</p>
      <ul>
        <li>Web Security Assesment</li>
        <li>Reverse Engineering</li>
        <li>Penetration Testing</li>
        <li>Code Auditing</li>
      </ul>
      You can find me on:
      <ul>
        <li>HackTheBox</li>
        <li>TryHackMe</li>
        <li>Standoff365</li>
      </ul>
      <p>
        I have 2 year working experience in Cybersecurity field and more than 5
        years of participating in CTFs.
      </p>
    </div>
  );
}
