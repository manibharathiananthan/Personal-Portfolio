import React from "react";
import { Container, Button } from "react-bootstrap";

const Resume = () => (
  <Container className="my-4 text-center">
    <h2 className="mb-4">My Resume</h2>
    <p>Download my resume below:</p>
    <Button href="/resume.pdf" download variant="primary">
      Download Resume
    </Button>
  </Container>
);

export default Resume;
