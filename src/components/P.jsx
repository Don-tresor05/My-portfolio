import React from 'react'
import { FaExternalLinkAlt, FaGithub as FaGithubIcon } from "react-icons/fa";
import { motion } from "framer-motion";
const projects = [
    {
      title: "E-Commerce Management System",
      description: "A web-based application to manage Buying and Selling, membership, and location tracking.",
      techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "React"],
      liveLink: "https://github.com/Don-tresor05/E-Commerce-System.git", 
      githubLink: "https://github.com/Don-tresor05/E-Commerce-System.git",
    },
    {
      title: "Education Technology Platform",
      description: "An online platform for students and teachers to interact and share resources.",
      techStack: ["Node.js", "Express", "MongoDB", "React"],
      liveLink: "https://github.com/Don-tresor05/EducationTechnologyPlatform.git", 
      githubLink: "https://github.com/Don-tresor05/EducationTechnologyPlatform.git",
    },
    {
      title: "Personal Portfolio Website",
      description: "A sleek and responsive portfolio showcasing projects and skills.",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://don-tresor-portfolio.netlify.app", 
      githubLink: "https://github.com/Don-tresor05/My-portfolio.git",
    },
];
const P = () => {
    return (
      <div className='relative w-full min-h-screen bg-black text-white'>
        
        {/* <div className='absolute inset-0 z-0'>
          <img src='/background.jpg' alt='Background' className='w-full h-full object-cover opacity-100' />
        </div> */}
  
        
        <div className="relative z-10 flex justify-center items-center min-h-screen px-6 pt-24">
          <div className="w-full max-w-6xl">
            <h2 className="text-3xl font-bold border-b-2 border-blue-400 pb-2">PORTFOLIO</h2>
            <p className="text-gray-300 mt-2">Here are some of the projects I have worked on:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500 text-sm px-2 py-1 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a 
                      href={project.liveLink} 
                      className="text-blue-400 hover:text-blue-300 flex items-center transition-colors duration-300" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live <FaExternalLinkAlt className="ml-2" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="text-gray-400 hover:text-gray-300 flex items-center transition-colors duration-300" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Code <FaGithubIcon className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
);
};  

export default P;
