import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, Card } from "react-bootstrap";
import { sendEmail } from "../services/emailService";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(form);
    setStatus(result ? "Message sent!" : "Failed to send message.");
    setForm({ name: "", email: "", phone: "", github: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Contact Me</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm h-100">
            <h5>📧 Email</h5>
            <p>bharathimani743@gmail.com</p>
            <h5>📱 Mobile</h5>
            <p>9566729175</p>
            <h5>💻 GitHub</h5>
            <p>
              <a href="https://github.com/manibharathiananthan" target="_blank" rel="noopener noreferrer">
                github.com/manibharathiananthan
              </a>
            </p>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="p-4 shadow-sm">
            {status && (
              <Alert variant={status === "Message sent!" ? "success" : "danger"}>
                {status}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

           

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 btn-primary btn-animated">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
