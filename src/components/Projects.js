import React from "react";
import Project1 from "../asset/Project1.png";
import Project2 from "../asset/Project2.png";

const projects = [
  {
    title: "E-Commerce",
    desc: "A modern product shopping interface for laptops, watches, and shoes with a clean UI and responsive layout.",
    img: Project1,
    link: "https://kevs-04.github.io/E-Commerce/",
  },
  {
    title: "Fresh Mart E-Commerce",
    desc: "A fresh market–style e-commerce interface for vegetables and healthy food products with a clean and organized layout.",
    img: Project2,
    link: "https://github.com/knownAsWillz/E-Commerece_AppDev",
  },
];

export default function Projects() {
  return (
    <div className="py-5 page-container bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={i} className="col-md-6">
              <div className="upgraded-card h-100">
                <img src={p.img} alt={p.title} className="w-100 mb-3 rounded" />

                <h5 className="fw-bold">{p.title}</h5>
                <p className="text-muted">{p.desc}</p>

                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => window.open(p.link, "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
