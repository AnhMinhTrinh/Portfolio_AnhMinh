import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className=""> 
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:translate-x-3 gap-6">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded "
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4   "
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <p className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 rounded bg-cyan-700 p-2 text-sm font-medium text-stone-300 inline-block mt-4 hover:bg-green-600 hover:text-black hover:font-bold transition duration-300 ease-in-out"
                >
                  View Project
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
