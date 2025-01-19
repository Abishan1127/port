import React from 'react';
import './Project.css';

import dragImage from '../../assets/drag.png';
import clockImage from '../../assets/clock.png';
import filterUniImage from '../../assets/filteruni.png';
import libraryImage from '../../assets/library.png';

function Projects() {
  const projects = [
    { name: 'Drag & Drop', url: 'https://abishan1127.github.io/drag-and-drop/', image: dragImage },
    { name: 'Digital Clock', url: 'https://abishan1127.github.io/clock-app/', image: clockImage },
    { name: 'University Filter', url: 'https://abishan1127.github.io/university/', image: filterUniImage },
    { name: 'Library Management', url: 'https://abishan1127.github.io/library/', image: libraryImage },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
