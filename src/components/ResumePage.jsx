import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiBasketballBall, GiSoccerBall, GiSwimfins, GiPoolTableCorner } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

// Extracted Tailwind CSS classes into constants for better organization
const STYLES = {
  layout: {
    container: "relative w-full h-screen bg-black text-white flex flex-col justify-between px-10 py-6",
    gridContainer: "grid grid-cols-3 gap-10 w-4/5 max-w-6xl mx-auto text-center",
  },
  nav: {
    container: "absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-lg font-bold",
    link: "text-gray-400 hover:text-white",
    activeLink: "text-blue-400 border-b-2 border-blue-400",
    phone: "text-gray-400 text-xs",
  },
  section: {
    heading: "text-lg font-bold border-b-2 border-blue-400",
    subheading: "font-bold",
    description: "text-gray-300",
  },
  skills: {
    skillItem: "flex items-center justify-center py-3 space-x-4",
    rangeInput: "w-1/2",
  },
  experience: {
    yearBadge: "w-100 h-12 bg-blue-400 text-white flex items-center justify-center rounded-full",
  },
  socialIcons: {
    container: "absolute bottom-10 left-10 flex space-x-4 text-xl",
    icon: "cursor-pointer",
    iconColors: {
      facebook: "hover:text-blue-400",
      linkedin: "hover:text-blue-400",
      instagram: "hover:text-pink-500",
      pinterest: "hover:text-red-500",
      twitter: "hover:text-blue-400",
      whatsapp: "hover:text-green-500",
      github: "hover:text-gray-600",
      email: "hover:text-red-500",
    },
  },
};

const ResumePage = () => {
  return (
    <div className={STYLES.layout.container}>
      <nav className={STYLES.nav.container}>
        <div className="flex space-x-6">
          <Link to="/" className={STYLES.nav.link}>Home</Link>
          <Link to="/about" className={STYLES.nav.link}>About</Link>
          <Link to="/resume" className={STYLES.nav.activeLink}>Resume</Link>
          <Link to="/portfolio" className={STYLES.nav.link}>Portfolio</Link>
        </div>
        <Link to="/contact">
          <p className={STYLES.nav.phone}>📞 +250-784-809-323</p>
        </Link>
      </nav>

      <div className={STYLES.layout.gridContainer}>
        {/* Left Column: Skills */}
        <div className="col-span-1 space-y-8">
          <div>
            <h3 className={STYLES.section.heading}>SOFTWARE SKILLS</h3>
            {['Html', 'CSS', 'JavaScript', 'PHP', 'Java', 'ReactJS', 'SpringBoot'].map(skill => (
              <div key={skill} className={STYLES.skills.skillItem}>
                <span>{skill}</span>
                <input type="range" className={STYLES.skills.rangeInput} />
              </div>
            ))}
          </div>

          <div>
            <h3 className={STYLES.section.heading}>LANGUAGES</h3>
            {['English', 'French', 'Swahili'].map(language => (
              <div key={language} className={STYLES.skills.skillItem}>
                <span>{language}</span>
                <input type="range" className={STYLES.skills.rangeInput} />
              </div>
            ))}
          </div>

          <div>
            <h3 className={STYLES.section.heading}>PERSONAL SKILLS</h3>
            <p className={STYLES.section.description}>Creativity - Team Work - Organization - Consistency</p>
          </div>
        </div>

        {/* Middle Column: Experience & Education */}
        <div className="col-span-1 space-y-6">
          <h3 className={STYLES.section.heading}>EXPERIENCE</h3>
          {[
            { year: '2023 - Present', company: 'Adventist University Of Central Africa', title: 'Student' },
            { year: '2022 - 2023', company: 'Canal Plus', title: 'Technician' },
          ].map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-col items-center space-y-2">
                <div className={STYLES.experience.yearBadge}>{exp.year}</div>
                <div>
                  <h4 className={STYLES.section.subheading}>{exp.company}</h4>
                  <p className={STYLES.section.description}>{exp.title}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div>
            <h3 className={STYLES.section.heading}>EDUCATION</h3>
            <p className={STYLES.section.description}>IT & Software Engineering, Adventist University of Central Africa</p>
          </div>
        </div>

        {/* Right Column: Capabilities & Interests */}
        <div className="col-span-1 space-y-6">
          <div>
            <h3 className={STYLES.section.heading}>WHAT CAN I DO?</h3>
            <p className={STYLES.section.description}>Build Real-World Applications</p>
            <p className={STYLES.section.description}>Contribute to Open Source Projects</p>
            <p className={STYLES.section.description}>Practice Software Testing and Debugging</p>
          </div>

          <div>
            <h3 className={STYLES.section.heading}>DESIGN SKILLS</h3>
            <p className={STYLES.section.description}>Creativity - System Architecture Design</p>
            <p className={STYLES.section.description}>UI/UX Design</p>
            <p className={STYLES.section.description}>Database Design</p>
          </div>

          <div>
            <h3 className={STYLES.section.heading}>HOBBIES & INTERESTS</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <GiBasketballBall className={`${STYLES.section.description} text-2xl`} title="Basketball" />
              <GiSoccerBall className={`${STYLES.section.description} text-2xl`} title="Football" />
              <GiSwimfins className={`${STYLES.section.description} text-2xl`} title="Swimming" />
              <GiPoolTableCorner className={`${STYLES.section.description} text-2xl`} title="Pool Table" />
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className={STYLES.socialIcons.container}
      >
        {[
          { href: "https://web.facebook.com/dontresor.irakoze/", icon: <FaFacebookF />, color: STYLES.socialIcons.iconColors.facebook },
          { href: "https://www.linkedin.com/in/don-tr%C3%A9sor-750a3a289/", icon: <FaLinkedinIn />, color: STYLES.socialIcons.iconColors.linkedin },
          { href: "https://www.instagram.com/dtresor_/", icon: <FaInstagram />, color: STYLES.socialIcons.iconColors.instagram },
          { href: "https://www.pinterest.com/yourprofile", icon: <FaPinterest />, color: STYLES.socialIcons.iconColors.pinterest },
          { href: "https://x.com/dtresor_", icon: <FaTwitter />, color: STYLES.socialIcons.iconColors.twitter },
          { href: "https://wa.me/+250784809323", icon: <FaWhatsapp />, color: STYLES.socialIcons.iconColors.whatsapp },
          { href: "https://github.com/Don-tresor05", icon: <FaGithub />, color: STYLES.socialIcons.iconColors.github },
          { href: "mailto:dontresor922@gmail.com", icon: <FaEnvelope />, color: STYLES.socialIcons.iconColors.email },
        ].map((item, index) => (
          <motion.a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2 }} 
            className={`${STYLES.socialIcons.icon} ${item.color}`}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ResumePage;