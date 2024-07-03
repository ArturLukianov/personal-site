import React from "react";

import "./style.css";

interface GlitchedTextProps {
    children: React.ReactNode;
    noflick?: boolean;
}

export default function GlitchedText(props: GlitchedTextProps) {
  const { children, noflick } = props;

  return (
    <h1 className={noflick ? "glitch-static" : "glitch"}>
      <span aria-hidden="true">{children}</span>
      {children}
      <span aria-hidden="true">{children}</span>
    </h1>
  );
}
