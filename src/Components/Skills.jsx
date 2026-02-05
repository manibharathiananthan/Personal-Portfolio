// src/Components/Skills.jsx
import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const skills = [
  { name: "React", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "CSS", level: 85 },
  { name: "Bootstrap", level: 90 },
  { name: "Dotnet", level: 85 },
  { name: "C#", level: 80 },
  { name: "SQL Server", level: 75 },
];

const Skills = () => (
  <Container className="my-4">
    <h2 className="mb-4 text-center">My Skills</h2>
    {skills.map((skill, idx) => (
      <div key={idx} className="mb-3">
        <h5>{skill.name}</h5>
        <ProgressBar now={skill.level} label={`${skill.level}%`} animated striped />
      </div>
    ))}
  </Container>
);

export default Skills;
