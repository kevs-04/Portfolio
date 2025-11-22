import React from "react";
import Profile from "../asset/Profile.jpg"; // optional kung gusto mo lagyan ng picture

export default function About() {
  return (
    <div className="py-5 page-container fade-in">
      <div className="container">
        <div className="about-wrapper upgraded-card p-4">
          <div className="row align-items-center">
            {/* LEFT SIDE IMAGE (optional) */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={Profile}
                alt="Profile"
                className="rounded "
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-md-8">
              <h2 style={{ color: "#0f172abf" }} className="fw-bold mb-3">
                About Me
              </h2>
              <p className="text-muted mb-4">
                I’m an aspiring Front-End Developer passionate about creating
                clean, modern, and user-friendly web interfaces. I enjoy
                building projects that sharpen my skills and help me grow as a
                developer.
              </p>

              {/* Personal Information */}
              <h4 style={{ color: "#0f172abf" }} className="fw-bold mt-4">
                Personal Information
              </h4>
              <ul className="list-unstyled info-list">
                <li>
                  <strong style={{ color: "#405e84ff" }}>Name:</strong> Kevin De
                  Vera
                </li>
                <li>
                  <strong style={{ color: "#405e84ff" }}>Age:</strong> 21
                </li>
                <li>
                  <strong style={{ color: "#405e84ff" }}>Location:</strong>{" "}
                  Philippines
                </li>
                <li>
                  <strong style={{ color: "#405e84ff" }}>Course:</strong> BS
                  Computer Science
                </li>
                <li>
                  <strong style={{ color: "#405e84ff" }}>Email:</strong>{" "}
                  <a
                    href="mailto:kevindevera249@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kevindevera249@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4" />

          {/* Journey Section */}
          <div>
            <h4 style={{ color: "#0f172abf" }} className="fw-bold">
              My Journey
            </h4>
            <ul className="timeline">
              <li>
                <span style={{ marginRight: ".8rem", fontWeight: 700 }}>
                  2022
                </span>{" "}
                Started learning basic HTML & CSS
              </li>
              <li>
                <span style={{ marginRight: ".8rem", fontWeight: 700 }}>
                  2023
                </span>{" "}
                Learned JavaScript and built mini projects
              </li>
              <li>
                <span style={{ marginRight: ".8rem", fontWeight: 700 }}>
                  2024
                </span>{" "}
                Improved UI/UX and started building portfolio
              </li>
              <li>
                <span style={{ marginRight: ".8rem", fontWeight: 700 }}>
                  2025
                </span>{" "}
                Learned React & Bootstrap / building bigger apps
              </li>
            </ul>
          </div>

          {/* Interests Section */}
          <div className="mt-4">
            <h4 style={{ color: "#0f172abf" }} className="fw-bold">
              Interests
            </h4>
            <p className="text-muted">
              UI/UX · Front-End Development · Graphic Design · Responsive
              Layouts · Gaming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
