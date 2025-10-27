import React from "react";
import "../css/Header.css";

function Header({ activeSection, scrollToSection }) {
  return (
    <header id="header">
      <nav>
        <ul>
          {["intro", "aboutme", "skills", "projects"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {id === "intro" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
