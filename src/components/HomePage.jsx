import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import A from "./A";
import R from "./R";
import P from "./P";
import C from "./C";



const HomePage = () => {
    return (
      <div className="relative w-full h-screen bg-black text-white">
        
        <div className="absolute inset-0 z-0">
          <img
            src="/background1.jpg" 
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
  
       
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-lg font-bold text-white z-10">
  <div className="flex space-x-6">
    <Link to="/" className="text-blue-400 border-b-2 border-blue-400">Home</Link>
    <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
    <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
    <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
  </div>
  <Link to="/contact">
    <p className="text-gray-400 text-xs hover:text-white">📞 +250-784-809-323</p>
  </Link>
</nav>


      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center h-screen px-12 space-y-4 relative"
      >
        

        <h1 className="text-5xl font-bold">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Don</motion.span> 
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="block text-7xl">Trésor</motion.span>
        </h1>
        <p className="text-xl text-gray-400">Software Engineer</p>
        <div className="flex space-x-4 mt-4">

          <Link to="/resume">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Resume
          </motion.button>
          </Link>

          <Link to="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Portfolio
          </motion.button>
          </Link>
        </div>
      </motion.div>

      
      
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

       <div>
        <A />
       </div>
       <div>
        <R />
       </div>
       <div>
        <P />
       </div>
       <div>
        <C />
       </div>
    </div>
  );
}
 
export default HomePage;