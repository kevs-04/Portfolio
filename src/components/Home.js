import React from "react";
import Profile from "../asset/Profile.jpg"; // ✅ FIXED IMPORT

export default function Home() {
  return (
    <main className="py-5 page-container text-center">
      <div className="container pt-4">
        <img
          src={Profile} // ✅ FIXED SRC
          alt="profile"
          className="rounded-circle shadow mb-3"
          width="160"
          height="160"
        />

        <h1 className="display-4 fw-bold">
          Hello, I'm <span className="text-primary">Kevin</span>
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
          <a href="/projects" className="btn btn-primary me-2">
            See my projects
          </a>
          <a href="/about" className="btn btn-outline-secondary">
            About me
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
