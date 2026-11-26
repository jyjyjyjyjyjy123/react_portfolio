import React, { useEffect, useRef, useState } from "react";
import Header, { navigation } from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/projects/ProjectSection";

const navigationDuration = 320;
const scrollKeys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);

function App() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollFrame = useRef(null);

  useEffect(() => {
    const header = document.getElementById("header");
    const sections = navigation.map(([id]) => document.getElementById(id));

    function updateActiveSection() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setIsScrolled(scrollTop > 0);
      if (scrollFrame.current !== null) return;
      const headerBottom = header.getBoundingClientRect().bottom + 1;
      const visibleSection = sections.findLast((section) => (
        section.getBoundingClientRect().top <= headerBottom
      ));
      const atBottom = scrollTop > 0 && scrollTop + clientHeight >= scrollHeight - 2;
      setActiveSection(atBottom ? sections.at(-1).id : visibleSection?.id ?? "intro");
    }

    function interruptScroll(event) {
      if (event?.type === "keydown" && !scrollKeys.has(event.key)) return;
      if (scrollFrame.current === null) return;
      cancelAnimationFrame(scrollFrame.current);
      scrollFrame.current = null;
      updateActiveSection();
    }

    updateActiveSection();
    const scrollEvents = ["wheel", "touchstart", "keydown"];
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    for (const type of scrollEvents) {
      window.addEventListener(type, interruptScroll, { passive: true });
    }
    return () => {
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      for (const type of scrollEvents) window.removeEventListener(type, interruptScroll);
    };
  }, []);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    const header = document.getElementById("header");
    if (!section || !header) return;
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = null;
    setActiveSection(id);

    const start = window.scrollY;
    const { scrollHeight, clientHeight } = document.documentElement;
    const target = Math.max(0, Math.min(
      start + section.getBoundingClientRect().top - header.offsetHeight,
      scrollHeight - clientHeight,
    ));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(target - start) < 1) {
      window.scrollTo({ top: target, behavior: "instant" });
      return;
    }

    const startedAt = performance.now();
    function scrollStep(now) {
      const progress = Math.min((now - startedAt) / navigationDuration, 1);
      const easedProgress = progress * progress * (3 - 2 * progress);
      window.scrollTo({ top: start + (target - start) * easedProgress, behavior: "instant" });
      scrollFrame.current = progress < 1 ? requestAnimationFrame(scrollStep) : null;
    }
    scrollFrame.current = requestAnimationFrame(scrollStep);
  }

  return (
    <>
      <Header isScrolled={isScrolled} activeSection={activeSection} scrollToSection={scrollToSection} motionDuration={navigationDuration} />
      <main>
        <Intro />
        <AboutMe />
        <Skill />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
