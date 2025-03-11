import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-between">

<nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 text-sm">
  <div className="flex space-x-6">
    <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
    <Link to="/about" className="text-blue-400 border-b-2 border-blue-400">About</Link>
    <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
    <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
  </div>
  <p className="text-gray-400 text-xs">📞 +250-784-809-323</p>
</nav>
      

      <div className="flex w-4/5 max-w-6xl mx-auto h-full items-center">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-1/2 space-y-4"
        >
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <p className="text-gray-300 underline">dontresor922@gmail.com</p>
          <div class="text-gray-300">
            <p className="first-letter:float-left
             first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-300 first-line:tracking-widest first-line:uppercase">
            A Software Engineering student, I am passionate about developing innovative software solutions and mastering the latest technologies
            </p>
            <p className="mt-6">With a strong foundation in programming, algorithms, and system design, I am focused on building scalable and efficient applications. My greatest strength is my ability to understand both technical and business perspectives, which helps me create software that meets real-world needs. I am eager to contribute to projects that drive technological advancement and deliver value to users. I am also highly adaptable, thriving in dynamic environments while continuously expanding my skill set in coding, testing, and system architecture</p>
          </div>
          
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-end"
        >
          <img 
            src="/background.jpg" 
            alt="Profile" 
            className="w-[75%] rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

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


     
      <footer className="w-full text-center py-4 border-t border-blue-400">
        <p className="text-gray-300">Kigali-Rwanda</p>
        <p className="text-gray-300">Kiagli Kigali</p>
      </footer>
    </div>
  );
};

export default AboutPage;
