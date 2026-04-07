'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Rocket, Menu, X, Sun, Moon, Send, Code, Users, Briefcase, AlertTriangle,
  ArrowRight, Globe, ShieldCheck, Target, Sparkles, HelpCircle
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView, AnimatePresence } from 'framer-motion';

// 👇 CUSTOM BRAND ICONS 👇
const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// --- UTILITY: SCROLL REVEAL WRAPPER ---
const RevealOnScroll = ({ children, delay = 0, className = "", width = "w-full" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className={`${width} ${className} overflow-hidden`}>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- CSS STYLES ---
const styles = `
  :root { 
    --primary: #6366f1;
    --accent-lime: #ccff00; 
  }
  body { 
    font-family: var(--font-inter), sans-serif; 
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6, button { 
    font-family: var(--font-space), sans-serif;
  }
  
  /* 🔥 PURE CSS ANIMATIONS FOR INSTANT LOAD (0ms Delay) 🔥 */
  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes heroFadeIn {
    0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  
  .animate-slide-down {
    animation: slideDown 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .animate-fade-up {
    animation: heroFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0; 
  }
  
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-400 { animation-delay: 0.4s; }
`;

const AboutPageClient = ({ initialDarkMode = true }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(initialDarkMode); 
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // GPU Cursor State
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 30, stiffness: 500, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 30, stiffness: 500, mass: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect for hero
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.cookie = `tvh-theme=${newTheme ? 'dark' : 'light'}; path=/; max-age=31536000`;
  };

  // Prefetching
  useEffect(() => {
    router.prefetch('/');
    
    router.prefetch('/safety');
    router.prefetch('/faq');
  }, [router]);

  // Optimized GPU Event Delegation Cursor
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10); 
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, textarea, .hover-target')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', () => setIsHovered(false)); 

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', () => setIsHovered(false));
    };
  }, [cursorX, cursorY]);

  const handleNav = (target) => {
    const cleanTarget = target.toLowerCase();
    
    // 1. External App Routes (Jumps to your React Dashboard Subdomain)
    const externalRouteMap = {
        'get started': 'https://app.teenversehub.in/login',
        'auth': 'https://app.teenversehub.in/login',
        'login': 'https://app.teenversehub.in/login'
    };

    // 2. Internal SEO Routes (Stays on your Next.js Landing Site)
    const internalRouteMap = {
        'home': '/',
        'about us': '/about', 
        'about': '/about',
        'faq': '/faq', 
        'safety': '/safety',
        'contact': '/contact'
    };
    
    setIsMobileMenuOpen(false);
    
    // Handle jumping to the external app dashboard
    if (externalRouteMap[cleanTarget]) {
        window.location.href = externalRouteMap[cleanTarget]; 
        return;
    }

    // Handle Next.js internal page routing
    if (internalRouteMap[cleanTarget]) {
        router.push(internalRouteMap[cleanTarget]);
        return;
    }
  };

  const handleFooterLink = (link) => {
      const lower = link.toLowerCase();
      if (lower.includes('terms')) { router.push('/terms'); return; }
      if (lower.includes('privacy')) { router.push('/privacy'); return; }
      if (lower.includes('refund')) { router.push('/disputes'); return; } 
      if (lower === 'safety center' || lower === 'safety') { router.push('/safety'); return; } 
      handleNav(link);
  };

  return (
    <div className={`relative min-h-screen selection:bg-[#ccff00] selection:text-black transition-[background-color,color] duration-500 ease-out ${darkMode ? 'bg-[#050505] text-white' : 'bg-[#f8f9ff] text-slate-900'}`}>
      
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* GPU Accelerated Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{
          scale: isHovered ? 4 : 1,
          backgroundColor: isHovered 
            ? (darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)") 
            : "#ccff00",
        }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
      />

      {/* Subtle Background */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 ${darkMode ? 'bg-grid-pattern text-white opacity-[0.03]' : 'bg-grid-pattern text-indigo-900 opacity-[0.03]'}`}></div>

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1.5 bg-[#ccff00] origin-left z-[100]" />

      {/* --- NAVBAR --- */}
      <nav className="animate-slide-down fixed w-full z-50 top-0 py-4 px-6">
        <div className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl relative z-50 transition-all ${darkMode ? 'bg-black/80 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-indigo-100/50'}`}>
           <div className="flex items-center gap-3 cursor-pointer hover-target group" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
                T<span className="text-[#ccff00]">.</span>
              </div>
              <span className={`font-bold tracking-tighter text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>TeenVerseHub</span>
           </div>

           {/* Desktop Menu */}
           <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
              {['Home', 'About Us', 'Safety', 'FAQ'].map((item) => (
                <button key={item} onClick={() => handleNav(item)} className={`transition-colors hover-target ${darkMode ? 'text-gray-300 hover:text-[#ccff00]' : 'text-slate-600 hover:text-indigo-600'}`}>{item}</button>
              ))}
              <div className={`w-px h-4 ${darkMode ? 'bg-white/20' : 'bg-slate-200'}`}></div>
              <button onClick={toggleTheme} className={`hover-target p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-slate-100 text-indigo-600'}`}>
                {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
              </button>
              <button onClick={() => handleNav('auth')} className={`px-6 py-2 rounded-xl transition-all hover:scale-105 font-black hover-target ${darkMode ? 'bg-white text-black hover:bg-[#ccff00]' : 'bg-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200 hover:bg-indigo-700'}`}>
                GET STARTED
              </button>
           </div>
           
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}`}>
             {isMobileMenuOpen ? <X /> : <Menu/>}
           </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+10px)] left-0 w-full px-4 md:hidden z-40"
            >
              <div className={`border rounded-2xl p-6 flex flex-col gap-6 shadow-2xl backdrop-blur-2xl ${darkMode ? 'bg-[#0a0a0a] border-white/15' : 'bg-white border-indigo-100'}`}>
                 <div className="flex flex-col gap-4">
                   {['Home', 'About Us', 'Safety', 'FAQ'].map((item) => (
                     <button key={item} onClick={() => handleNav(item)} className={`text-left text-lg font-bold transition-colors flex items-center justify-between group py-2 ${darkMode ? 'text-gray-300 hover:text-[#ccff00]' : 'text-slate-700 hover:text-indigo-600'}`}>
                       {item} <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`} />
                     </button>
                   ))}
                 </div>
                 <div className={`h-px w-full ${darkMode ? 'bg-white/10' : 'bg-slate-100'}`}></div>
                 <div className="flex items-center justify-between font-mono text-sm">
                    <span className={darkMode ? 'text-gray-400' : 'text-slate-500'}>Switch Theme</span>
                    <button onClick={toggleTheme} className={`p-3 rounded-full ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 text-indigo-600'}`}>
                      {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
                    </button>
                 </div>
                 <button onClick={() => handleNav('auth')} className={`w-full py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg ${darkMode ? 'bg-[#ccff00] text-black' : 'bg-indigo-600 text-white'}`}>
                   Get Started <Rocket size={18} />
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- 🌍 HERO SECTION (Typography Driven & Instant CSS Load) --- */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
         <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto relative z-10">
            
            <div className={`animate-fade-up delay-100 inline-flex items-center gap-3 px-4 py-2 rounded-full border text-xs font-mono font-bold tracking-widest mb-10 ${darkMode ? 'border-white/20 bg-white/5 text-gray-300' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
              <Globe size={14} className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'} />
              THE STORY OF KASHIF KHAN & TEENVERSEHUB
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-end">
              <div className="flex-1">
                <h1 className={`animate-fade-up delay-200 text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  We believe age <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">should never</span> <br/>
                  limit talent.
                </h1>
              </div>
              <div className="flex-1 lg:pb-6">
                <p className={`animate-fade-up delay-400 text-xl md:text-2xl font-medium leading-relaxed border-l-4 pl-6 md:pl-8 ${darkMode ? 'border-[#ccff00] text-gray-400' : 'border-indigo-600 text-slate-600'}`}>
                  Founded by a 15-year-old, TeenVerseHub is a platform built to help teenagers learn, earn, and grow in a safe, transparent, and beginner-friendly environment.
                </p>
              </div>
            </div>
         </motion.div>
      </section>

      {/* --- 💡 OUR STORY (Sticky Scroll UX) --- */}
      <section className={`py-24 md:py-32 px-6 border-t ${darkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 relative">
          
          {/* Left: Sticky Header */}
          <div className="md:w-1/3 relative">
            <div className="sticky top-32 md:top-40">
              <RevealOnScroll>
                <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  How it <br className="hidden md:block"/><span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>Began.</span>
                </h2>
                <p className={`text-lg font-medium ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                  The vision of a 15-year-old developer to change the way teenagers start their careers.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Right: Scrolling Story Nodes (SEO Optimized for Founder) */}
          <div className="md:w-2/3 space-y-8 md:space-y-24">
            
            {/* Node 1 */}
            <RevealOnScroll>
              <div className={`p-8 md:p-12 rounded-[2rem] border relative overflow-hidden ${darkMode ? 'bg-[#111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-100'}`}>
                <div className={`absolute top-0 right-0 w-1 bg-gradient-to-b from-rose-500 to-transparent h-full`} />
                <span className="text-rose-500 font-mono font-bold tracking-widest text-xs md:text-sm mb-4 block">01 / THE PROBLEM</span>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Existing platforms ignore teenagers.</h3>
                <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  As a 15-year-old student, I <strong>(Kashif Khan)</strong> saw firsthand how difficult it was for young people to find safe digital opportunities. Most freelance platforms are highly competitive and built exclusively for adults. Teenagers with real talent were completely ignored or vulnerable to being scammed.
                </p>
              </div>
            </RevealOnScroll>

            {/* Node 2 */}
            <RevealOnScroll>
              <div className={`p-8 md:p-12 rounded-[2rem] border relative overflow-hidden ${darkMode ? 'bg-[#111] border-white/10' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-100'}`}>
                <div className={`absolute top-0 right-0 w-1 bg-gradient-to-b from-amber-500 to-transparent h-full`} />
                <span className="text-amber-500 font-mono font-bold tracking-widest text-xs md:text-sm mb-4 block">02 / THE SOLO BUILD</span>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>I built it from scratch.</h3>
                <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  I realized no one was going to build a solution for us, so I decided to do it myself. Using my coding skills, I completely designed, developed, and deployed the entire first version of <strong>TeenVerseHub</strong> from my bedroom—creating a secure ecosystem where parents could trust the platform, and teens could start earning.
                </p>
              </div>
            </RevealOnScroll>

            {/* Node 3 */}
            <RevealOnScroll>
              <div className={`p-8 md:p-12 rounded-[2rem] border relative overflow-hidden ${darkMode ? 'bg-[#111] border-[#ccff00]/30' : 'bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-200 text-white'}`}>
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-50 ${darkMode ? 'bg-[#ccff00]' : 'bg-indigo-400'}`} />
                <span className={`font-mono font-bold tracking-widest text-xs md:text-sm mb-4 block ${darkMode ? 'text-[#ccff00]' : 'text-indigo-200'}`}>03 / GROWING THE VISION</span>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-white'}`}>Bringing on a brilliant team.</h3>
                <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-indigo-50'}`}>
                  Once the foundation was solid and the platform started to grow, I knew I couldn't scale it alone. I brought on my incredibly talented co-founders, <strong>Subodh</strong> and <strong>Aditya</strong>. Together, we are transforming TeenVerseHub into the ultimate global launchpad for young digital creators.
                </p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* --- 🎯 MISSION & VISION (Immersive Split Block) --- */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Dark/Accent Block - Mission */}
            <RevealOnScroll>
              <div className={`p-10 md:p-16 rounded-[3rem] h-full flex flex-col justify-between overflow-hidden relative ${darkMode ? 'bg-[#ccff00] text-black' : 'bg-indigo-900 text-white'}`}>
                <div className="relative z-10">
                  <Target size={40} className="mb-8 opacity-80" />
                  <h3 className="text-4xl md:text-5xl font-black mb-6">Our Mission</h3>
                  <p className="text-xl font-medium mb-12 opacity-90">Creating opportunities for every teenager.</p>
                </div>
                
                <ul className="space-y-6 relative z-10">
                  {['Explore your raw skills', 'Earn your first actual income', 'Gain real-world project experience', 'Build confidence for the future'].map((item, i) => (
                    <li key={i} className="flex items-start md:items-center gap-4 font-bold text-base md:text-lg">
                      <div className={`mt-2 md:mt-0 w-2 h-2 shrink-0 rounded-full ${darkMode ? 'bg-black' : 'bg-[#ccff00]'}`} /> {item}
                    </li>
                  ))}
                </ul>
                
                {/* Decorative oversized shape */}
                <div className={`absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[80px] pointer-events-none ${darkMode ? 'bg-white/40' : 'bg-indigo-600'}`} />
              </div>
            </RevealOnScroll>

            {/* Light/Card Block - Vision */}
            <RevealOnScroll delay={0.2}>
              <div className={`p-10 md:p-16 rounded-[3rem] h-full border flex flex-col justify-center relative overflow-hidden ${darkMode ? 'bg-[#111] border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-100'}`}>
                <Sparkles size={40} className={`mb-8 ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`} />
                <h3 className={`text-4xl md:text-5xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Vision</h3>
                <p className={`text-lg md:text-2xl leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  We envision a world where teenagers don’t have to wait to start their journey. 
                  <br/><br/>
                  We are building a global platform where young individuals can turn their skills into real opportunities — <strong className={darkMode ? 'text-white' : 'text-slate-900'}>safely, confidently, and independently.</strong>
                </p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* --- 🔒 SAFETY & TRUST --- */}
      <section className={`py-24 md:py-32 px-6 border-y ${darkMode ? 'bg-[#050505] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className={`text-4xl md:text-7xl font-black tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Trust is our <span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>Currency.</span>
            </h2>
            <p className={`text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-16 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              We understand that trust is the foundation—not just for teenagers, but for their guardians. Safety isn't a feature, it's the entire infrastructure.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Monitored Interactions", desc: "Advanced systems to protect against scams and misuse." },
              { title: "Guardian Transparency", desc: "Parents stay in the loop with what's happening." },
              { title: "Controlled Environment", desc: "A beginner-friendly space separated from the wild web." }
            ].map((point, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg ${darkMode ? 'bg-white/5 text-[#ccff00]' : 'bg-white text-indigo-600 shadow-indigo-100'}`}>
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{point.title}</h4>
                  <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>{point.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 👨‍💻 MEET THE TEAM (Founder SEO Optimized) --- */}
      <section className={`py-24 md:py-32 px-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className={`text-4xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Built by <span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>Young Minds.</span>
                </h2>
                <p className={`text-lg md:text-xl font-medium ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  A passionate team with a clear vision for the next generation.
                </p>
              </div>
              <div className={`px-4 py-2 rounded-full border text-xs font-bold font-mono inline-flex items-center w-fit gap-2 ${darkMode ? 'border-white/10 bg-white/5 text-gray-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
                <AlertTriangle size={14} className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'} />
                Registered under Mohd Asif
              </div>
            </div>
          </RevealOnScroll>

          {/* Minimalist List Rows */}
          <div className={`border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            {[
              { name: "Kashif Khan", role: "Founder & CEO", desc: "A 15-year-old developer and visionary. Kashif completely built the initial TeenVerseHub platform from the ground up to create safe digital opportunities for teenagers everywhere.", initial: "K", color: "bg-indigo-500" },
              { name: "Subodh", role: "Co-founder", desc: "Leading technical development and driving platform growth to ensure a seamless experience for all creators.", initial: "S", color: "bg-purple-500" },
              { name: "Aditya", role: "Co-founder", desc: "Supporting daily operations, execution, and making sure the entire ecosystem runs smoothly and securely.", initial: "A", color: "bg-blue-500" }
            ].map((member, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className={`group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b cursor-pointer transition-colors relative overflow-hidden ${darkMode ? 'border-white/10 hover:bg-white/[0.02]' : 'border-slate-200 hover:bg-slate-50'}`}>
                  
                  {/* Left side: Avatar + Name */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 relative z-10 mb-6 md:mb-0">
                    <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-lg transition-transform group-hover:scale-110 ${member.color}`}>
                      {member.initial}
                    </div>
                    <div>
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                      <div className={`font-mono text-xs sm:text-sm tracking-widest font-bold ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`}>{member.role}</div>
                    </div>
                  </div>

                  {/* Right side: Description */}
                  <div className="md:w-1/2 relative z-10 md:pl-0">
                    <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-500 group-hover:text-slate-700'} transition-colors`}>
                      {member.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- ✅ TEASER SECTION --- */}
      <section className={`py-24 px-6 border-t ${darkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <RevealOnScroll>
              <div className={`p-8 md:p-12 rounded-[2.5rem] border relative overflow-hidden flex flex-col justify-between h-full ${darkMode ? 'bg-[#111] border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
                <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-30 pointer-events-none ${darkMode ? 'bg-emerald-500' : 'bg-emerald-400'}`} />
                <div>
                  <ShieldCheck size={36} className={`mb-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <h3 className={`text-2xl md:text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Trust & Support</h3>
                  <p className={`text-base md:text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Got questions? Want to know how we keep teenagers safe? Explore our dedicated Safety Center and FAQ pages.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => handleNav('safety')} className={`inline-flex items-center justify-center gap-2 font-bold w-fit px-6 py-3 rounded-xl transition-all ${darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-200/50 text-emerald-700 hover:bg-emerald-200'}`}>
                    Safety Hub
                  </button>
                  <button onClick={() => handleNav('faq')} className={`inline-flex items-center justify-center gap-2 font-bold w-fit px-6 py-3 rounded-xl transition-all ${darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-200/50 text-blue-700 hover:bg-blue-200'}`}>
                    Read FAQs
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className={`p-8 md:p-12 rounded-[2.5rem] border relative overflow-hidden flex flex-col justify-between h-full ${darkMode ? 'bg-[#111] border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-30 pointer-events-none ${darkMode ? 'bg-indigo-500' : 'bg-indigo-400'}`} />
                <div>
                  <Globe size={36} className={`mb-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <h3 className={`text-2xl md:text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ready to explore?</h3>
                  <p className={`text-base md:text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Head back to our main platform to discover talented teenagers or to start your own digital journey today.
                  </p>
                </div>
                <button onClick={() => handleNav('home')} className={`inline-flex items-center justify-center gap-2 font-bold w-fit px-6 py-3 rounded-xl transition-all ${darkMode ? 'bg-[#ccff00]/20 text-[#ccff00] hover:bg-[#ccff00]/30' : 'bg-indigo-200/50 text-indigo-700 hover:bg-indigo-200'}`}>
                  Back to Main Page <ArrowRight size={18} />
                </button>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* --- 📣 CALL TO ACTION --- */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-slate-50'}`}>
        <RevealOnScroll>
          <div className={`max-w-5xl mx-auto p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden ${darkMode ? 'bg-[#111] border border-white/10' : 'bg-indigo-600 text-white shadow-2xl shadow-indigo-300'}`}>
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl font-black mb-6 ${darkMode ? 'text-white' : 'text-white'}`}>Be Part of the Journey.</h2>
              <p className={`text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium ${darkMode ? 'text-gray-400' : 'text-indigo-100'}`}>
                Whether you’re a teenager ready to start, or someone who believes in empowering the next generation.
              </p>
              <button onClick={() => handleNav('auth')} className={`px-8 py-4 md:px-10 md:py-5 font-black text-base md:text-lg rounded-2xl inline-flex items-center gap-3 transition-transform hover:scale-105 shadow-xl ${darkMode ? 'bg-[#ccff00] text-black shadow-[#ccff00]/20' : 'bg-white text-indigo-700 shadow-white/20'}`}>
                Join Us Today <ArrowRight size={20} />
              </button>
            </div>
            <div className={`absolute top-[-50%] left-[-10%] w-[80%] h-[200%] rotate-12 pointer-events-none ${darkMode ? 'bg-white/[0.02]' : 'bg-white/10'}`} />
          </div>
        </RevealOnScroll>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`pt-20 pb-10 border-t ${darkMode ? 'bg-black border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
            
            <div className="space-y-6">
              <h3 className={`text-2xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                TeenVerseHub<span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>.</span>
              </h3>
              <div className={`text-sm leading-relaxed space-y-4 ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                <p>Empowering creators and digital talent across India. Built for safety, scale, and success.</p>
                <div className={`p-4 rounded-lg border text-xs space-y-2 ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-indigo-50/50 border-indigo-100 text-slate-600'}`}>
                  <p><strong>Disclaimer:</strong> TeenVerseHub is a technology platform connecting clients with freelancers. We do not provide services directly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#!" className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${darkMode ? 'bg-white/5 text-white hover:bg-[#ccff00] hover:text-black' : 'bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white shadow-sm'}`}>
                    <Icon size={16}/>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:pl-8">
              <h4 className={`font-bold uppercase tracking-widest text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>Company</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                {['About Us', 'FAQ', 'Careers', 'Blog', 'Contact'].map(l => (
                  <li key={l}>
                    <button onClick={() => handleFooterLink(l)} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}>
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-4">
              <h4 className={`font-bold uppercase tracking-widest text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>Legal & Trust</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Safety Center'].map(l => (
                  <li key={l}>
                    <button onClick={() => handleFooterLink(l)} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}>
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#111] border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <h4 className={`font-bold text-xs uppercase mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <AlertTriangle size={14} className="text-amber-500"/> Legal & Contact
              </h4>
              <div className={`text-xs font-mono space-y-2 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                <p className={`font-bold text-sm ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`}>Founded by Kashif Khan</p>
                <p className="opacity-80 text-xs">Legally operated by Mohd Asif (Proprietor)</p>
                <p>Mahoba, Uttar Pradesh, India</p>
                <div className="pt-2">
                  <p className={darkMode ? 'text-gray-500' : 'text-slate-400'}>Support:</p>
                  <a href="mailto:support@teenversehub.in" className={`hover:underline break-all ${darkMode ? 'text-white' : 'text-indigo-600'}`}>
                    support@teenversehub.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono ${darkMode ? 'border-white/10 text-gray-600' : 'border-slate-200 text-slate-500'}`}>
            <div>© {new Date().getFullYear()} TeenVerseHub. All rights reserved.</div>
            <div className="flex items-center gap-2">
              Made with ❤️ for the Future of India.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPageClient;