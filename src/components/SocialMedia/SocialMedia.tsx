import React from "react";
import GlitchedText from "../GlitchedText/GlitchedText";
import GithubIcon from "../../icons/GithubIcon";
import MailIcon from "../../icons/MailIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import "./style.css";

export default function SocialMedia() {
  return (
    <div className="section">
      <GlitchedText noflick>Social Media</GlitchedText>

      <a
        className="social-media-icon"
        href="https://github.com/ArturLukianov/"
        id="gh-link"
      >
        <GithubIcon />
      </a>

      <a
        className="social-media-icon"
        href="mail:a.lukianov@innopolis.university"
        id="email"
      >
        <MailIcon />
      </a>

      <a
        className="social-media-icon"
        href="https://t.me/magnummalum"
        id="tg-link"
      >
        <TelegramIcon />
      </a>
    </div>
  );
}
