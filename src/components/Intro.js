import React, { useEffect, useState } from "react";
import "../css/Intro.css";

function Intro() {
  const fullText = "풀스택 개발자"; // 타이핑 효과 텍스트
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <h1 id="mainTitle">이재용 포트폴리오</h1>
      <p id="mainDesc">{displayText}</p>

      {/* 스크롤 안내 아이콘 */}
      <div id="scrollIcon">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Intro;
