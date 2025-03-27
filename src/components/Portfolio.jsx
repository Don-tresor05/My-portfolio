import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub as FaGithubIcon } from "react-icons/fa";

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

const Portfolio = () => {
  return (
    <div className='relative w-full min-h-screen bg-black text-white'>
      
      <div className='absolute inset-0 z-0'>
        <img src='/background.jpg' alt='Background' className='w-full h-full object-cover opacity-100' />
      </div>

      
      <div className='absolute inset-0 bg-black opacity-80 z-1'></div>
      
      
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-lg font-bold">
        <div className='flex space-x-6'>
          <Link to='/' className='text-gray-400 hover:text-white'>Home</Link>
          <Link to='/about' className='text-gray-400 hover:text-white'>About</Link>
          <Link to='/resume' className='text-gray-400 hover:text-white'>Resume</Link>
          <Link to='/portfolio' className='text-blue-400 border-b-2 border-blue-400'>Portfolio</Link>
        </div>
        <Link to="/contact">
          <p className="text-gray-400 text-xs hover:text-white">📞 +250-784-809-323</p>
        </Link>
      </nav>

      
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

      
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="relative z-10 flex space-x-4 text-xl p-10"
      >
        {[ 
          { href: "https://web.facebook.com/dontresor.irakoze/", icon: <FaFacebookF />, color: "hover:text-blue-400" },
          { href: "https://www.linkedin.com/in/don-tr%C3%A9sor-750a3a289/", icon: <FaLinkedinIn />, color: "hover:text-blue-400" },
          { href: "https://www.instagram.com/dtresor_/", icon: <FaInstagram />, color: "hover:text-pink-500" },
          { href: "https://www.pinterest.com/yourprofile", icon: <FaPinterest />, color: "hover:text-red-500" },
          { href: "https://x.com/dtresor_", icon: <FaTwitter />, color: "hover:text-blue-400" },
          { href: "https://wa.me/+250784809323", icon: <FaWhatsapp />, color: "hover:text-green-500" },
          { href: "https://github.com/Don-tresor05", icon: <FaGithub />, color: "hover:text-gray-600" },
          { href: "mailto:dontresor922@gmail.com", icon: <FaEnvelope />, color: "hover:text-red-500" },
        ].map((item, index) => (
          <motion.a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2 }} 
            className={`cursor-pointer ${item.color}`}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;