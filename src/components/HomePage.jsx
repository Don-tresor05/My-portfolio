import { motion } from "framer-motion";
import { FaBehance, FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
    return (
      <div className="relative w-full h-screen bg-black text-white">
        
        <div className="absolute inset-0">
          <img
            src="/background1.jpg" 
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
  
       
        <nav className="flex justify-between items-center p-6 text-white">
            <ul className="flex space-x-6">
                <li><a href="#HomePage" className="hover:text-gray-400">Home</a></li>
                <li><a href="#AboutPage" className="hover:text-gray-400">About</a></li>
                <li><a href="#ResumePage" className="hover:text-gray-400">Resume</a></li>
                <li><a href="#Portfolio" className="hover:text-gray-400">Portfolio</a></li>
            </ul>
            <p className="text-sm">📞 +250-784-809-323</p>
        </nav>


      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center h-screen px-12 space-y-4"
      >
        

        <h1 className="text-5xl font-bold">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Don</motion.span> 
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="block text-7xl">Trésor</motion.span>
        </h1>
        <p className="text-xl text-gray-400">Software Engineer</p>
        <div className="flex space-x-4 mt-4">
<motion.button 
            whileHover={{ scale: 1.1 }} 
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Resume
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Portfolio
          </motion.button>
        </div>
      </motion.div>
      



      

 <div className="absolute bottom-10 left-10 flex space-x-4 text-xl">
        <FaBehance className="cursor-pointer hover:text-blue-400" />
        <FaFacebookF className="cursor-pointer hover:text-blue-400" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
        <FaInstagram className="cursor-pointer hover:text-pink-500" />
        <FaPinterest className="cursor-pointer hover:text-red-500" />
        <FaTwitter className="cursor-pointer hover:text-blue-400" />
        <FaWhatsapp className="cursor-pointer hover:text-green-500" />
      </div>


    </div>
  );
}
 
export default HomePage;