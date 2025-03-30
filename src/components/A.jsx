import React from 'react'
import { motion } from "framer-motion";

export default function A() {
  return (
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
  )
}
