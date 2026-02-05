import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="my-4">
      <h2 className="mb-4 text-center">Projects</h2>
      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                <Button href={project.link} target="_blank" variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/add-project">
          <Button variant="success" className="btn-animated">
            Add New Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
