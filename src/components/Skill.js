import React from "react";
import "./Skill.css";

// 아이콘 import
import javaIcon from "../assets/icons/icon_java.svg";
import springBootIcon from "../assets/icons/icon_springBoot.svg";
import mybatisIcon from "../assets/icons/icon_myBatis.svg";
import restApiIcon from "../assets/icons/icon_restApi.svg";
import htmlIcon from "../assets/icons/icon_html.svg";
import cssIcon from "../assets/icons/icon_css.svg";
import jsIcon from "../assets/icons/icon_javascript.svg";
import reactIcon from "../assets/icons/icon_react.svg";
import jqueryIcon from "../assets/icons/icon_jquery.svg";
import eclipseIcon from "../assets/icons/icon_eclipse.svg";
import intelliJIcon from "../assets/icons/icon_intelliJ.svg";
import VSCodeIcon from "../assets/icons/icon_VSCode.svg";
import oracleSQLIcon from "../assets/icons/icon_oracleSQL.svg";

const skillGroups = [
  {
    category: "Back-end",
    items: [
      { name: "Java", img: javaIcon },
      { name: "Spring Boot", img: springBootIcon },
      { name: "MyBatis", img: mybatisIcon },
      { name: "REST API", img: restApiIcon },
    ],
  },
  {
    category: "Front-end",
    items: [
      { name: "HTML", img: htmlIcon },
      { name: "CSS", img: cssIcon },
      { name: "JavaScript", img: jsIcon },
      { name: "React", img: reactIcon },
      { name: "jQuery", img: jqueryIcon },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Eclipse", img: eclipseIcon },
      { name: "IntelliJ IDEA", img: intelliJIcon },
      { name: "VS Code", img: VSCodeIcon },
      { name: "Oracle SQL", img: oracleSQLIcon },
    ],
  },
];

function Skill() {
  return (
    <section id="skills">
      <div className="section-shell">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-category">
              <h3>{group.category}</h3>
              <div className="skill-cards">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <img src={skill.img} alt="" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
