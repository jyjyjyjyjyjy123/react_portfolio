import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = ["intro", "aboutme", "skills", "projects"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Intro scrollToSection={() => scrollToSection("aboutme")} />
        <AboutMe />
        <Skill />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
