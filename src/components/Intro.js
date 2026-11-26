import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro">
      <div className="section-shell">
        <p id="mainDesc">Full-Stack Developer</p>
        <h1 id="mainTitle"><span>이재용</span>{" "}<span>포트폴리오</span></h1>
        <a id="scrollIcon" href="#aboutme" aria-label="About Me로 이동"><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
