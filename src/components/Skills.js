import React from "react";

const skillsList = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "UI/UX Basics",
  "Git & GitHub",
  "Responsive Design",
  "Problem Solving",
  "Java",
];

export default function Skills() {
  return (
    <div className="py-5 page-container">
      <div className="container">
        <h2 style={{ color: "#0f172abf" }} className="fw-bold mb-4 text-center">
          Skills
        </h2>
        <div className="row g-3">
          {skillsList.map((skill, index) => (
            <div key={index} className="col-md-4">
              <div className="p-3 border rounded text-center bg-light upgraded-card h-100 skill-card-hover">
                <span className="fw-semibold skill-text">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
