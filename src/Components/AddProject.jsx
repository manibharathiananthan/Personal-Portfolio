import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import storedProjects, { saveProjects } from "../data/projectsData";

const AddProject = () => {
  const [auth, setAuth] = useState(false); // force login every time
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState([...storedProjects]);
  const [project, setProject] = useState({ name: "", desc: "", link: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    saveProjects(projects);
  }, [projects]);

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      login.email === "bharathimani743@gmail.com" &&
      login.password === "Mani"
    ) {
      localStorage.setItem("auth", "true");
      setAuth(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  // Add/Edit project
  const handleAddProject = (e) => {
    e.preventDefault();
    const newProj = {
      name: project.name,
      description: project.desc,
      link: project.link || "#",
    };

    if (editingIndex !== null) {
      const updated = [...projects];
      updated[editingIndex] = newProj;
      setProjects(updated);
      setMessage(`Project "${project.name}" updated successfully!`);
    } else {
      setProjects([...projects, newProj]);
      setMessage(`Project "${project.name}" added successfully!`);
    }

    setProject({ name: "", desc: "", link: "" });
    setEditingIndex(null);
    setAuth(false); // force login again after adding/editing
    localStorage.removeItem("auth"); // clear session so login is asked next time
  };

  // Edit project
  const handleEdit = (index) => {
    setProject({
      name: projects[index].name,
      desc: projects[index].description,
      link: projects[index].link,
    });
    setEditingIndex(index);
    setAuth(false); // force login before editing
    localStorage.removeItem("auth");
  };

  // Delete project
  const handleDelete = (index) => {
    const filtered = projects.filter((_, i) => i !== index);
    setProjects(filtered);
  };

  // SHOW LOGIN if not authenticated
  if (!auth) {
    return (
      <Container className="my-5">
        <h2 className="mb-4 text-center">Login to Add/Edit Projects</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin} className="p-4 shadow rounded bg-white">
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={login.password}
              onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
              }
              required
            />
          </Form.Group>
          <Button type="submit" className="w-100 btn-primary">
            Login
          </Button>
        </Form>
      </Container>
    );
  }

  // SHOW ADD/EDIT FORM if authenticated
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">
        {editingIndex !== null ? "Edit Project" : "Add Project"}
      </h2>
      {message && <Alert variant="success">{message}</Alert>}

      <Form onSubmit={handleAddProject} className="p-4 shadow rounded bg-white mb-5">
        <Form.Group className="mb-3">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={project.desc}
            onChange={(e) => setProject({ ...project, desc: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Link</Form.Label>
          <Form.Control
            value={project.link}
            onChange={(e) => setProject({ ...project, link: e.target.value })}
          />
        </Form.Group>
        <Button type="submit" className="w-100 btn-success">
          {editingIndex !== null ? "Update Project" : "Add Project"}
        </Button>
      </Form>

      <h3 className="mb-3">All Projects</h3>
      {projects.map((p, idx) => (
        <Card key={idx} className="mb-3 shadow-sm">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{p.name}</h5>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
            <div>
              <Button variant="warning" className="me-2" onClick={() => handleEdit(idx)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(idx)}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AddProject;
