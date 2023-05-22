import Omnifood from "./Images/Omnifood-image.png";
import GuessNumber from "./Images/Guess-my-number-image.png";
import PigGame from "./Images/Pig-game-image.png";
import TextUtils from "./Images/TextUtils-Image.png";

const projects = [
  {
    id: 1,
    name: "Omnifood- Food delivery responsive website",
    description: "Omnifood is an AI-powered food subscription website.",
    image: Omnifood,
    technologies: ["HTML", "CSS"],
    url: "https://omnifood-jagruti.netlify.app",
  },
  {
    id: 2,
    name: "TextUtils",
    description: "It's a tool to modify your text.",
    image: TextUtils,
    technologies: ["React", "Bootstrap"],
    url: "https://63a30ef648f04b000894d9da--textutils-text-editor-jagruti.netlify.app/",
  },
  {
    id: 3,
    name: "Pig Game",
    description: "A dice game - 100 points scorer is a winner ",
    image: PigGame,
    technologies: ["JavaScript", "CSS", "Bootstrap"],
    url: "https://pig-game-jagruti.netlify.app/",
  },
  {
    id: 4,
    name: "Guess my number! game",
    description: "As name suggests guess the correct number with hints",
    image: GuessNumber,
    technologies: ["JavaScript", "HTML", "CSS"],
    url: "https://guess-my-number-game-jagruti.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="ml-14 text-4xl underline  text-orange-500 font-bold mt-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8   mx-4 sm:mx-6 md:mx-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={project.image}
              alt={project.name}
              className="h-48 w-full object-fill rounded-lg"
            />

            <div className="mt-4">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4">
                <ul className="flex space-x-2">
                  {project.technologies.map((technology, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 bg-gray-200 rounded-lg"
                    >
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
    </div>
  );
};

export default Projects;
