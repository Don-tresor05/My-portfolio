import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPinterest, 
  FaTwitter, 
  FaWhatsapp, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa';

const ContactPage = () => {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          message 
        })
      });
      
      
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = await response.text();
      }
      
      if (response.ok) {
        setSubmitStatus('success');
        
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col">
      
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-lg font-bold">
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
        </div>
        <Link to="/contact">
          <p className="text-blue-400 text-xs border-b-2 border-blue-400">📞 +250-784-809-323</p>
        </Link>
      </nav>

     
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col md:flex-row w-full h-full items-center justify-center px-10">
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold">
            Let's <span className="text-blue-400">Connect</span> and Create <span className="text-green-400">Together</span>
          </h2>
          <p className="mt-3 text-gray-300">Reach out and let's start a conversation! Drop a message below.</p>

          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
           
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-3 rounded-md">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-3 rounded-md">
                Failed to send message. Please try again.
              </div>
            )}

            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-300">Email</label>
              <input 
                type="email" 
                placeholder="Type your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400" 
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-300">Message</label>
              <textarea 
                placeholder="Type your Message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400 h-32" 
              />
            </motion.div>
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.1 }} 
              className={`
                bg-purple-600 hover:bg-purple-700 
                transition-all duration-300 
                text-white px-6 py-3 
                rounded-lg w-full
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          </form>
        </div>
        <div className="md:w-1/2 w-full p-8">
        <iframe 
            className="w-full h-96 rounded-lg" 
            title="Kigali Rwanda Location Map" 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7705.002726580988!2d30.104208000000007!3d-1.9555426999999963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1743572547353!5m2!1sen!2srw" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        />             
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

      <motion.footer 
        className="bg-black text-gray-300 py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg font-semibold">KIGALI-RWANDA</p>
        <div className="flex items-center justify-center space-x-4">
          <span className="w-12 h-0.5 bg-blue-400"></span>
          <p className="text-sm">Kigali-Rwanda</p>
          <span className="w-12 h-0.5 bg-blue-400"></span>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactPage;