import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiBasketballBall, GiSoccerBall, GiSwimfins, GiPoolTableCorner } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-between px-10 py-6">
      
      
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-lg font-bold">
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link to="/resume" className="text-blue-400 border-b-2 border-blue-400">Resume</Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
        </div>
        <Link to="/contact">
          <p className="text-gray-400 text-xs">📞 +250-784-809-323</p>
        </Link>
      </nav>

     
      <div className="grid grid-cols-3 gap-10 w-4/5 max-w-6xl mx-auto text-center">
  <div className="col-span-1 space-y-8">
    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">SOFTWARE SKILLS</h3>
      {['Html', 'CSS', 'JavaScript', 'PHP', 'Java', 'ReactJS', 'SpringBoot'].map(skill => (
        <div key={skill} className="flex items-center justify-center py-3 space-x-4">
          <span>{skill}</span>
          <input type="range" className="w-1/2" />
        </div>
      ))}
    </div>

    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">LANGUAGES</h3>
      {['English', 'French', 'Swahili'].map(language => (
        <div key={language} className="flex items-center justify-center py-2 space-x-4">
          <span>{language}</span>
          <input type="range" className="w-1/2" />
        </div>
      ))}
    </div>

    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">PERSONAL SKILLS</h3>
      <p className="text-gray-300">Creativity - Team Work - Organization - Consinstancy</p>
    </div>
  </div>

  <div className="col-span-1 space-y-6">
    <h3 className="text-lg font-bold border-b-2 border-blue-400">EXPERIENCE</h3>
    {[
      { year: '2023 - Present', company: 'Adventist University Of Central Africa', title: 'Student' },
      { year: '2022 - 2023', company: 'Canal Plus', title: 'Techniciian' },
      
    ].map((exp, index) => (
      <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-100 h-12 bg-blue-400 text-white flex items-center justify-center rounded-full">{exp.year}</div>
          <div>
            <h4 className="font-bold">{exp.company}</h4>
            <p className="text-gray-300">{exp.title}</p>
          </div>
        </div>
      </motion.div>
    ))}

    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">EDUCATION</h3>
      <p className="text-gray-300">IT & Software Engineering, Adventist University of Central Africa</p>
    </div>
  </div>

  <div className="col-span-1 space-y-6">
    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">WHAT CAN I DO?</h3>
      <p className="text-gray-300">Build Reak-World Application</p>
      <p className="text-gray-300">Contribute to Open Sources Projects</p>
      <p className="text-gray-300">Practice Software Testing and Debugging</p>
    </div>

    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">DESIGN SKILLS</h3>
      <p className="text-gray-300">Creativity - System Architecture Design</p>
      <p className="text-gray-300">UI/UX Design</p>
      <p className="text-gray-300">Database Design</p>
    </div>

    <div>
      <h3 className="text-lg font-bold border-b-2 border-blue-400">HOBBIES & INTERESTS</h3>
      <div className="flex justify-center space-x-4 mt-2">
        <GiBasketballBall className="text-gray-300 text-2xl" title="Basketball" />
        <GiSoccerBall className="text-gray-300 text-2xl" title="Football" />
        <GiSwimfins className="text-gray-300 text-2xl" title="Swimming" />
        <GiPoolTableCorner className="text-gray-300 text-2xl" title="Pool Table" />
      </div>
    </div>
  </div>
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

      </div>
    
  );
};

export default ResumePage;
