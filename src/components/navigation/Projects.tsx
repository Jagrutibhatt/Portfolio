const projects = [
  {
    id: 1,
    name: "Omnifood- Food delivery responsive website",
    description:
      "Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. it's tailored to your personal taste and nutritional needs",
    image: "https://omnifood-jagruti.netlify.app/150",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://omnifood-jagruti.netlify.app",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://www.example.com",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://www.example.com",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
      {projects.map((project) => (
        <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={project.image}
            alt={project.name}
            className="h-48 w-full object-cover"
          />
          <div className="mt-4">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4">
              <ul className="flex space-x-2">
                {project.technologies.map((technology, index) => (
                  <li key={index} className="px-2 py-1 bg-gray-200 rounded-lg">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
