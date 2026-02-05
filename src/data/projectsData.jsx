// src/data/projectsData.js
// Load from localStorage or default projects
const storedProjects = JSON.parse(localStorage.getItem("projects")) || [
    {
    name: "Employee CRUD System",
    description:
      "Built an Employee CRUD application using React and Bootstrap with search and persistent data storage using localStorage.",
    link: "https://github.com/manibharathiananthan/employee-crud-react",
  },
    {
    name: "Portfolio Website",
    description: "My personal portfolio built with React and Bootstrap.",
    link: "#",
  },

];

export const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export default storedProjects;
