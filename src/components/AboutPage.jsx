import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import R from "./R";
import P from "./P";
import C from "./C";
const AboutPage = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-between">

<nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-lg font-bold">
  <div className="flex space-x-6">
    <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
    <Link to="/about" className="text-blue-400 border-b-2 border-blue-400">About</Link>
    <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
    <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
  </div>
  <Link to="/contact">
    <p className="text-gray-400 text-xs hover:text-white">📞 +250-784-809-323</p>
  </Link>
</nav>
      

      <div className="flex w-4/5 max-w-6xl mx-auto h-full items-center">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-1/2 space-y-4"
        >
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <p className="text-gray-300 font-bold underline">dontresor922@gmail.com</p>
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
            src="/pp.jpg" 
            alt="Profile" 
            className="w-[75%] rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <div>
        <R />
        <P />
        <C />
      </div>

       <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="absolute bottom-10 left-10 flex space-x-4 text-xl">
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
                <motion.a key={index} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className={`cursor-pointer ${item.color}`}>
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>


     
      {/* <footer className="bg-black text-gray-300 py-6">
      <div className="text-center">
        <p className="text-lg font-semibold">KIGALI-RWANDA</p>
        <div className="flex items-center justify-center space-x-4">
          <span className="w-12 h-0.5 bg-blue-400"></span>
          <p className="text-sm">Kigali-Rwanda</p>
          <span className="w-12 h-0.5 bg-blue-400"></span>
        </div>
      </div>
    </footer> */}
    </div>
  );
};

export default AboutPage;
