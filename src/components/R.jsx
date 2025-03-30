import React from 'react'
import { GiBasketballBall, GiSoccerBall, GiSwimfins, GiPoolTableCorner } from "react-icons/gi";
import { motion } from "framer-motion";

export default function R() {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-between px-10 py-6">

     
      <div className="grid grid-cols-3 gap-10 w-4/5 max-w-6xl mx-auto text-center justify-center items-center">
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
      
    </div>
  )
}
