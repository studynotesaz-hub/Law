import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 pointer-events-none"
    >
      <div className="pointer-events-auto bg-judiciary-black/80 backdrop-blur-md border border-white/5 px-8 md:px-12 py-3 rounded-full flex justify-between items-center gap-12 shadow-2xl">
        
        <a href="#" className="font-serif text-xl md:text-2xl text-judiciary-pearl hover:text-judiciary-gold transition-colors duration-500">
            S.
        </a>

        <div className="hidden md:flex gap-10 font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-judiciary-pearl/60">
          {['The Firm', 'Expertise', 'Philosophy', 'Inquire'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-judiciary-gold transition-colors duration-300 relative group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-judiciary-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;