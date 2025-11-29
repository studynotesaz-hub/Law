import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const link = target.closest('a') || target.closest('button') || target.closest('.hover-trigger');
      
      if (link) {
        setIsHovering(true);
        // Check if there's a data-cursor attribute
        const text = link.getAttribute('data-cursor');
        setHoverText(text || '');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[60] bg-judiciary-buff mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="w-20 h-20 rounded-full border border-white bg-white flex items-center justify-center">
             <span className="text-black font-mono text-[10px] font-bold uppercase tracking-widest text-center px-2">
               {hoverText || 'View'}
             </span>
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;