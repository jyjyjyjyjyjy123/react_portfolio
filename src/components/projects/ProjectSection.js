import React, { useEffect, useRef, useState } from "react";
import { projects } from "./projectData";
import "./Projects.css";

function ProjectDetails({ project, onClose }) {
  const [{ imageIndex, previousIndex, direction }, setSlide] = useState({ imageIndex: 0, previousIndex: null, direction: 1 });
  const dialog = useRef(null);
  const swipeStart = useRef(null);
  const { title, period, teamSize, images, details, features, tech, contribution, git, address } = project;

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    for (const offset of [-1, 1]) {
      const adjacent = new Image();
      adjacent.src = images[(imageIndex + offset + images.length) % images.length];
    }
  }, [imageIndex, images]);

  function moveImage(offset) {
    setSlide(({ imageIndex: index }) => ({
      imageIndex: (index + offset + images.length) % images.length,
      previousIndex: index,
      direction: offset,
    }));
  }

  function startSwipe(event) {
    if (!event.isPrimary || event.button !== 0) return;
    swipeStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endSwipe(event) {
    const start = swipeStart.current;
    if (start?.id !== event.pointerId) return;
    swipeStart.current = null;

    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    if (Math.abs(x) >= 40 && Math.abs(x) > Math.abs(y)) {
      moveImage(x < 0 ? 1 : -1);
    }
  }

  function cancelSwipe(event) {
    if (swipeStart.current?.id === event.pointerId) swipeStart.current = null;
  }

  const sections = [
    ["features", "주요 기능 및 특징", features],
    ["technologies", "사용 기술 및 언어", tech],
    ["contribution", "작업 기여도", teamSize > 1 && contribution],
  ];

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="project-dialog-panel">
        <header className="project-dialog-header">
          <div className="project-heading">
            <h3 id="project-title">{title}</h3>
            <p className="project-meta">
              {period && <span>{period}</span>}
              <span>작업 인원 {teamSize}명</span>
            </p>
          </div>
          <button type="button" className="dialog-close" aria-label="프로젝트 닫기" onClick={onClose}>×</button>
        </header>

        <div className="project-dialog-body">
          <div
            className="image-slider"
            style={{ "--slide-shift": direction === 1 ? "100%" : "-100%" }}
            onPointerDown={startSwipe}
            onPointerUp={endSwipe}
            onPointerCancel={cancelSwipe}
            onLostPointerCapture={cancelSwipe}
          >
            {previousIndex !== null && (
              <img
                key={`out-${previousIndex}`}
                className="slide-out"
                src={images[previousIndex]}
                alt=""
                draggable={false}
              />
            )}
            <img
              key={imageIndex}
              className={previousIndex === null ? undefined : "slide-in"}
              src={images[imageIndex]}
              alt={`${title} 스크린샷 ${imageIndex + 1}`}
              draggable={false}
            />
          </div>
          <div className="project-toolbar">
            <div className="slider-controls">
              <button type="button" aria-label="이전 이미지" onClick={() => moveImage(-1)}>←</button>
              <span aria-live="polite">{imageIndex + 1} / {images.length}</span>
              <button type="button" aria-label="다음 이미지" onClick={() => moveImage(1)}>→</button>
            </div>
            {(git || address) && (
              <div className="project-links">
                {git && <a href={git} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {address && <a href={address} target="_blank" rel="noopener noreferrer">웹사이트</a>}
              </div>
            )}
          </div>

          <div className="project-description">
            {details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {sections.map(([className, heading, items]) => items && (
            <div className={`project-detail-section ${className}`} key={className}>
              <h4>{heading}</h4>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);

  function closeProject() {
    setSelected(null);
    requestAnimationFrame(() => trigger.current?.focus());
  }

  return (
    <section id="projects">
      <div className="section-shell">
        <h2 className="section-title">Projects</h2>
        <div className="project-cards">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className={project.portraitCover ? "project-cover project-cover--portrait" : "project-cover"}>
                <img src={project.images[0]} alt="" loading="lazy" />
              </div>
              <div className="project-card-copy">
                <h3>
                  <button
                    type="button"
                    onClick={(event) => {
                      trigger.current = event.currentTarget;
                      setSelected(project);
                    }}
                  >
                    {project.title}
                  </button>
                </h3>
                <p>{project.description}</p>
                <p className="project-role">{project.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ProjectDetails project={selected} onClose={closeProject} />}
    </section>
  );
}
