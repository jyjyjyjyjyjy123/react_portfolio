import React from "react";

export default function Modal({ show, onClose, project }) {
  if (!show || !project) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        width: "500px",
        maxWidth: "90%",
        textAlign: "center",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: "1.2rem",
            border: "none",
            background: "transparent"
          }}
        >
          ✖
        </button>
        <h3>{project.title}</h3>
        <img
          src={project.img}
          alt={project.title}
          style={{ width: "100%", borderRadius: "8px", margin: "10px 0" }}
        />
        <p>{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none"
            }}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
