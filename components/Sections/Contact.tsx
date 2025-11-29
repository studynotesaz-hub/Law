import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="inquire" className="bg-judiciary-black text-judiciary-pearl min-h-screen flex flex-col justify-between pt-40 pb-12 px-6 md:px-20 relative border-t border-white/5">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 h-full relative z-10">
        <div className="flex flex-col justify-start">
            <span className="font-mono text-[10px] text-judiciary-buff tracking-[0.4em] uppercase mb-10 block">Legal Representation</span>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-16 text-judiciary-pearl">
              Retain<br />Counsel.
            </h2>
            <div className="w-24 h-1 bg-judiciary-buff mb-10"></div>
            <p className="font-sans text-judiciary-pearl/60 text-sm max-w-md leading-loose">
                Due to the sensitive nature of our caseload, consultations are granted strictly by appointment following a conflict check. We reserve the right to decline representation.
            </p>
        </div>

        <div className="flex flex-col justify-center space-y-8 md:pl-20">
          
          <div className="glass-card p-12 rounded-sm border-l-2 border-l-judiciary-buff/50">
             <h4 className="font-mono text-[9px] text-judiciary-pearl/50 uppercase tracking-widest mb-8">
                The Chambers
             </h4>
             <p className="font-display text-3xl text-judiciary-pearl leading-tight">
                 Advocate Siddhi<br/>
                 <span className="text-xl opacity-60 italic font-serif text-judiciary-buff">High Court of Judicature</span>
             </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.a 
                href="mailto:legal@siddhi.law"
                whileHover={{ x: 10 }}
                className="group border border-white/10 p-8 flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                data-cursor="Draft"
            >
                <span className="font-mono text-[10px] text-judiciary-pearl/50 uppercase tracking-widest">Electronic Mail</span>
                <span className="font-display text-xl text-judiciary-pearl group-hover:text-judiciary-buff transition-colors">legal@siddhi.law</span>
            </motion.a>
          </div>

        </div>
      </div>

      <div className="w-full flex justify-between items-end mt-32 relative z-10 text-judiciary-pearl/20 font-mono text-[9px] uppercase tracking-widest border-t border-white/5 pt-8">
         <div className="flex gap-8">
             <span>© MMXIV - MMXXIV</span>
             <span>Privileged & Confidential</span>
         </div>
         <button 
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           className="hover:text-judiciary-buff transition-colors flex items-center gap-2"
           data-cursor="Dismiss"
         >
           Adjourn ↑
         </button>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-judiciary-buff/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Contact;