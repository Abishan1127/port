import React from "react";
import "./skill.css";

const Skill = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
    { name: "PostgreSQL", level: "Beginner" },
    { name: "GitHub", level: "Intermediate" },
    { name: "Docker", level: "Beginner" },
    { name: "Python", level: "Intermediate" },
    { name: "Jira", level: "Beginner" },
    { name: "Java", level: "Beginner" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  return (
    <div className="skill-container">
      <h2 className="skill-title">My Skills</h2>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
