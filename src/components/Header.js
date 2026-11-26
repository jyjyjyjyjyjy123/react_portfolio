import React, { useLayoutEffect, useRef } from "react";
import "./Header.css";

export const navigation = [
  ["intro", "Home"],
  ["aboutme", "About Me"],
  ["skills", "Skills"],
  ["projects", "Projects"],
];

function SectionNav({ activeSection, scrollToSection }) {
  const list = useRef(null);

  useLayoutEffect(() => {
    const menu = list.current;
    const index = navigation.findIndex(([id]) => id === activeSection);
    const item = menu.children[index];

    function positionIndicator() {
      menu.style.setProperty("--tab-offset", `${item.offsetLeft}px`);
      menu.style.setProperty("--tab-width", `${item.offsetWidth}px`);
    }

    positionIndicator();
    const observer = new ResizeObserver(positionIndicator);
    observer.observe(menu);
    for (const child of menu.children) observer.observe(child);
    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <nav aria-label="상단 메뉴">
      <ul ref={list}>
        {navigation.map(([id, name]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : undefined}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header({ isScrolled, motionDuration, ...props }) {
  return (
    <header
      id="header"
      className={isScrolled ? "is-scrolled" : undefined}
      style={{ "--nav-motion-duration": `${motionDuration}ms` }}
    >
      <SectionNav {...props} />
    </header>
  );
}

