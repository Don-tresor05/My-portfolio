import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub as FaGithubIcon } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Management System",
    description: "A web-based application to manage Bying and Selling, membership, and location tracking.",
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
    liveLink: "https://github.com/Don-tresor05/My-portfolio.git",
    githubLink: "https://github.com/Don-tresor05/My-portfolio.git",
  },
];

const Portfolio = () => {
  return (
    <div className='relative w-full h-screen bg-black text-white'>
      <div className='absolute inset-0'>
        <img src='/backgroun.jpg' alt='Background' className='w-full h-full object-cover opacity-50' />
      </div>
      <nav className='absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 text-sms'>
        <div className='flex space-x-6'>
          <Link to='/' className='text-gray-400 hover:text-white'>Home</Link>
          <Link to='/about' className='text-gray-400 hover:text-white'>About</Link>
          <Link to='/resume' className='text-gray-400 hover:text-white'>Resume</Link>
          <Link to='/portfolio' className='text-blue-400 border-b-2 border-blue-400'>Portfolio</Link>
        </div>
        <p className='text-gray-400 text-xs'>📞 +250-784-809-323</p>
      </nav>

     
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-6 pt-24">
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
                className="bg-gray-800 p-6 rounded-xl shadow-lg"
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
                  <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 flex items-center" target="_blank" rel="noopener noreferrer">
                    Live <FaExternalLinkAlt className="ml-2" />
                  </a>
                  <a href={project.githubLink} className="text-gray-400 hover:text-gray-300 flex items-center" target="_blank" rel="noopener noreferrer">
                    Code <FaGithubIcon className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="absolute bottom-10 left-10 flex space-x-4 text-xl">
        <a href="https://web.facebook.com/dontresor.irakoze/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/don-tr%C3%A9sor-750a3a289/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/dtresor_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </a>
        <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="cursor-pointer hover:text-red-500" />
        </a>
        <a href="https://x.com/dtresor_" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </a>
        <a href="https://wa.me/+250784809323" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
        </a>
        <a href="https://github.com/Don-tresor05" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-600" />
        </a>
        <a href="mailto:dontresor922@gmail.com">
          <FaEnvelope className="cursor-pointer hover:text-red-500" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
