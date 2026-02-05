// src/Components/Home.jsx
import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";



const Home = () => (
  <div className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        {/* Profile Image */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          <div
            style={{
              width: "300px",
              height: "300px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "50%",
              border: "5px solid #007bff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Col>

        {/* Description */}
        <Col md={8}>
          <h1 className="display-5 fw-bold">Dotnet Full Stack Developer</h1>
          <p className="lead mt-3">
            Hi, I am Manibharathi. I have 1 year of experience as an Industrial
            Automation Engineer and recently transitioned to Dotnet Full Stack
            Development with React. I create modern, responsive, and scalable
            web applications.
          </p>

          {/* Download Resume Button */}
         <Button
  href="/resume.pdf"
  download
  variant="primary"
  className="mt-3 btn-lg animate__animated animate__pulse animate__infinite"
  style={{ cursor: "pointer" }}
  onMouseEnter={(e) => e.currentTarget.classList.add("animate__shakeX")}
  onAnimationEnd={(e) => e.currentTarget.classList.remove("animate__shakeX")}
>
  Download Resume
</Button>

        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
