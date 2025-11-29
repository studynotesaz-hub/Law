import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Scale } from 'lucide-react';

interface CaseDetails {
  title: string;
  verdict: string;
  summary: string;
  points: string[];
}

const practices = [
  { 
    id: "I", 
    title: "Criminal Defense", 
    desc: "Uncompromising representation in high-stakes criminal proceedings. Protecting liberty with absolute discretion.",
    details: {
      title: "State vs. Industrialist",
      verdict: "Acquittal",
      summary: "Represented high-profile client in white-collar crime allegations involving complex financial auditing.",
      points: ["Forensic Accounting Analysis", "Cross-examination of Expert Witnesses", "Motion to Suppress Evidence"]
    }
  },
  { 
    id: "II", 
    title: "Corporate Litigation", 
    desc: "Navigating complex board disputes, mergers, and regulatory challenges with strategic foresight.",
    details: {
        title: "Merger Dispute",
        verdict: "Settlement in Favor",
        summary: "Navigated a hostile takeover defense for a tech conglomerate, preserving board control.",
        points: ["Shareholder Rights", "Regulatory Compliance", "Tactical Negotiation"]
      }
  },
  { 
    id: "III", 
    title: "Constitutional Law", 
    desc: "Challenging state actions and defending fundamental rights at the highest levels of the judiciary.",
    details: {
        title: "Writ Petition 402",
        verdict: "Statute Struck Down",
        summary: "Challenged municipal bylaws infringing on property rights before the High Court bench.",
        points: ["Article 14 Violation", "Public Interest Litigation", "Judicial Review"]
      }
  },
  { 
    id: "IV", 
    title: "Arbitration", 
    desc: "Alternative dispute resolution for commercial conflicts requiring privacy and specialized expertise.",
    details: {
        title: "Intl. Construction Arbitration",
        verdict: "Award Granted",
        summary: "Recovered damages for a construction firm in a delayed infrastructure project dispute.",
        points: ["Contractual Breach", "Damages Assessment", "Tribunal Representation"]
      }
  },
  { 
    id: "V", 
    title: "White Collar", 
    desc: "Defense against financial crime allegations, fraud, and economic offenses.",
    details: {
        title: "Regulatory Probe",
        verdict: "Investigation Dropped",
        summary: "Pre-charge representation during a central agency investigation into market manipulation.",
        points: ["Compliance Audit", "Agency Liaison", "Crisis Management"]
      }
  }
];

export const Practice: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedCase, setSelectedCase] = useState<CaseDetails | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  return (
    <section id="expertise" ref={targetRef} className="relative h-[400vh] bg-judiciary-black">
      
      {/* Sticky Container - Using Grid to prevent overlap */}
      <div className="sticky top-0 h-screen w-full overflow-hidden grid grid-rows-[auto_1fr] bg-judiciary-black">
        
        {/* Fixed Title Background - Completely in frame */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
             <h1 
                className="font-display font-black text-[15vw] text-judiciary-pearl/5 tracking-tighter select-none hardware-accelerated leading-none w-full text-center"
             >
                JUDGMENT
             </h1>
        </div>

        {/* Row 1: Header - Spaced to clear Navbar (Increased top padding) */}
        <div className="relative z-20 px-6 md:px-24 pt-40 md:pt-48 pb-4 flex flex-col justify-end pointer-events-none row-start-1">
            <div className="border-l-2 border-judiciary-buff pl-6 pointer-events-auto w-max">
                <span className="block font-mono text-[10px] text-judiciary-buff uppercase tracking-[0.3em] mb-3">Areas of Law</span>
                <h2 className="font-display text-3xl md:text-5xl text-judiciary-pearl uppercase tracking-wide">
                    The Courtroom<br/><span className="text-judiciary-gold italic font-serif capitalize tracking-normal">Specialties</span>
                </h2>
            </div>
        </div>

        {/* Row 2: Horizontal Scroll Container */}
        <div className="relative z-10 w-full h-full flex items-center pl-6 md:pl-24 row-start-2">
            <motion.div style={{ x }} className="flex gap-8 md:gap-24 w-max pr-[20vw] hardware-accelerated">
            {practices.map((item) => (
                <div 
                  key={item.id}
                  className="relative h-[50vh] md:h-[55vh] w-[85vw] md:w-[30vw] flex-shrink-0 flex flex-col justify-between border-l border-white/10 pl-6 md:pl-10 group transition-all duration-300 hover:bg-white/[0.02] pr-4 rounded-sm"
                >
                  <div className="flex flex-col relative z-10">
                      <div className="flex justify-between items-start mb-6">
                          <span className="font-display text-5xl md:text-6xl text-white/10 font-bold group-hover:text-judiciary-buff/20 transition-colors duration-300">
                              {item.id}
                          </span>
                          {/* Authentic Judicial Stamp Icon */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12">
                              <div className="w-12 h-12 border-2 border-judiciary-buff/40 rounded-full flex items-center justify-center p-1">
                                <div className="w-full h-full border border-judiciary-buff/40 rounded-full flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-judiciary-buff/60" />
                                </div>
                              </div>
                          </div>
                      </div>
                      
                      <h3 className="font-display text-2xl md:text-4xl text-judiciary-pearl leading-[0.9] mb-4 group-hover:text-white transition-colors uppercase tracking-tight break-words hyphens-auto">
                          {item.title}
                      </h3>
                      <div className="w-8 h-[2px] bg-judiciary-buff mb-6 group-hover:w-16 transition-all duration-500 ease-out"></div>
                      <p className="font-sans text-xs md:text-sm text-judiciary-pearl/60 leading-relaxed max-w-sm line-clamp-4">
                          {item.desc}
                      </p>
                  </div>
                  
                  <div className="mt-4">
                      <button 
                        onClick={() => setSelectedCase(item.details)}
                        className="font-mono text-[9px] uppercase tracking-widest text-judiciary-pearl/40 group-hover:text-judiciary-buff transition-colors flex items-center gap-2 border border-white/5 px-4 py-3 hover:border-judiciary-buff/50 hover:bg-white/5 w-max group/btn"
                      >
                          Review Case File <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                  </div>
                </div>
            ))}
            </motion.div>
        </div>
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-judiciary-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
             <motion.div 
               initial={{ y: 50, opacity: 0, scale: 0.98 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               exit={{ y: 50, opacity: 0, scale: 0.98 }}
               transition={{ type: "spring", damping: 30, stiffness: 400 }}
               className="w-full max-w-4xl bg-[#080a0f] border border-judiciary-buff/30 relative shadow-2xl flex flex-col max-h-[85vh] overflow-hidden rounded-sm"
             >
                {/* Header of Modal */}
                <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-start bg-[#080a0f] relative z-20 shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 bg-red-900 rounded-full animate-pulse"></div>
                             <span className="font-mono text-[9px] text-judiciary-buff uppercase tracking-widest">Confidential Case File</span>
                        </div>
                        <h3 className="font-display text-xl md:text-3xl text-judiciary-pearl mt-1 uppercase tracking-wide">{selectedCase.title}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedCase(null)}
                      className="text-judiciary-pearl/50 hover:text-judiciary-buff transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                      <X size={20} strokeWidth={1} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-[#080a0f] relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                       {/* Left Column - Meta */}
                       <div className="md:col-span-5 space-y-6">
                          <div className="p-5 bg-judiciary-buff/[0.03] border border-judiciary-buff/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <Scale size={40} />
                            </div>
                            <span className="font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-widest block mb-2">Final Verdict</span>
                            <p className="font-display text-2xl text-judiciary-buff italic">{selectedCase.verdict}</p>
                          </div>

                          <div className="space-y-3 font-mono text-[9px] text-judiciary-pearl/50 uppercase tracking-widest border-t border-white/5 pt-4">
                              <div className="flex justify-between">
                                <span>Court</span>
                                <span className="text-judiciary-pearl">High Court</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Bench</span>
                                <span className="text-judiciary-pearl">Division Bench</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Counsel</span>
                                <span className="text-judiciary-pearl">Siddhi</span>
                              </div>
                          </div>
                       </div>

                       {/* Right Column - Details */}
                       <div className="md:col-span-7 space-y-8">
                          <div>
                            <span className="font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-widest block mb-3 border-b border-white/10 pb-2 w-max">Summary of Proceedings</span>
                            <p className="font-serif text-lg text-judiciary-pearl/80 leading-relaxed text-justify">
                              {selectedCase.summary}
                            </p>
                          </div>
                          
                          <div>
                             <span className="font-mono text-[9px] text-judiciary-pearl/40 uppercase tracking-widest block mb-3 border-b border-white/10 pb-2 w-max">Legal Strategy</span>
                             <ul className="space-y-3">
                                {selectedCase.points.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-3 group">
                                    <span className="mt-2 w-1 h-1 bg-judiciary-buff rounded-full"></span>
                                    <span className="font-sans text-sm text-judiciary-pearl/70 leading-relaxed">{point}</span>
                                  </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                    </div>
                </div>

                {/* Footer of Modal */}
                <div className="p-4 md:px-8 bg-[#05070A] border-t border-white/10 flex justify-between items-center relative z-20 shrink-0">
                    <span className="font-mono text-[8px] text-judiciary-pearl/20 uppercase tracking-widest">Restricted Access • Privileged</span>
                    <span className="font-display text-judiciary-pearl/20 text-base font-bold">SIDDHI</span>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};