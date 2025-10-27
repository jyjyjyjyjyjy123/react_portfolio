import React from "react";
import "../css/Skill.css";

// 아이콘 import
import javaIcon from "../assets/icons/icon_java.svg";
import springIcon from "../assets/icons/icon_spring.svg";
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
import postmanIcon from "../assets/icons/icon_postman.svg";
import tomcatIcon from "../assets/icons/icon_tomcat.svg";
import ec2Icon from "../assets/icons/icon_ec2.svg";
import oracleIcon from "../assets/icons/icon_oracle.svg";

const skillGroups = [
  {
    category: "Back-end",
    items: [
      { name: "Java", img: javaIcon },
      { name: "Spring", img: springIcon },
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
      { name: "IntelliJ", img: intelliJIcon },
      { name: "VSCode", img: VSCodeIcon },
      { name: "Oracle SQL", img: oracleSQLIcon },
      { name: "Postman", img: postmanIcon },
    ],
  },
  {
      category: "Server",
      items: [
        { name: "Tomcat", img: tomcatIcon },
        { name: "EC2", img: ec2Icon },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "Oracle", img: oracleIcon },
      ],
    },
];

function Skill() {
  return (
      <section id="skills">
        <h2 className="section-name">Skills</h2>

        {skillGroups.slice(0, 3).map((group, idx) => (
          <div key={idx} className="skill-category">
            <h3>{group.category}</h3>
            <div className="skill-cards">
              {group.items.map((skill, i) => (
                <div key={i} className="skill-card">
                  {skill.img && <img src={skill.img} alt={skill.name} />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Server + Database 같은 줄 배치 */}
        <div className="skillsFlex">
          {skillGroups.slice(3).map((group, idx) => (
            <div key={idx} className="skill-category">
              <h3>{group.category}</h3>
              <div className="skill-cards">
                {group.items.map((skill, i) => (
                  <div key={i} className="skill-card">
                    {skill.img && <img src={skill.img} alt={skill.name} />}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Skill;
