import React from "react";
import Profile from "../asset/Profile.jpg"; //

export default function Home() {
  return (
    <main className="py-5 page-container text-center">
      <div className="container ">
        <img
          src={Profile}
          alt="profile"
          className="rounded-circle  mb-3"
          width="200"
          height="200"
        />

        <h1 style={{ color: "#0f172abf" }} className="display-4 fw-bold">
          Hello, I'm <span style={{ color: "#6D94C5" }}>Kevin</span>
        </h1>

        <p className="lead text-secondary">
          Aspiring Front-end Developer • UI/UX • Creative Thinker
        </p>

        <p className="text-muted mx-auto" style={{ maxWidth: "500px" }}>
          I design and build clean, user-friendly interfaces using React and
          modern web tools. I love learning and improving every day through
          projects, tutorials, and real-world practice.
        </p>

        <div className="mt-4">
          <a
            href="/projects"
            style={{ padding: "7px 10px" }}
            className="btn btn-primary me-2 px"
          >
            My Projects
          </a>
          <a href="/about" className="btn btn-outline-secondary">
            About Me
          </a>
        </div>

        <div className="mt-4">
          <a href="https://github.com" className="me-3 fs-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="me-3 fs-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="fs-3">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </main>
  );
}
