'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Rocket, Menu, X, Sun, Moon, 
  ArrowRight, ShieldCheck, Zap, Target, Users, CheckCircle2,
  Video, Layout, Code, TrendingUp, Sparkles, PenTool, Briefcase, Lock, DollarSign, AlertTriangle,
  Award, GraduationCap
} from 'lucide-react';
import { motion, useScroll, useSpring, useMotionValue, useInView, AnimatePresence } from 'framer-motion';

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
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
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

  /* 🔥 PURE CSS ANIMATIONS FOR INSTANT LCP LOAD 🔥 */
  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes heroFadeIn {
    0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  .animate-slide-down { animation: slideDown 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fade-up { animation: heroFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
  .animate-pop-in { animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; opacity: 0; }
  
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
`;

const CreatorPageClient = ({ initialDarkMode = true }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 30, stiffness: 500, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 30, stiffness: 500, mass: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.cookie = `tvh-theme=${newTheme ? 'dark' : 'light'}; path=/; max-age=31536000`;
  };

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/about');
    router.prefetch('/faq');
    router.prefetch('/safety');
    router.prefetch('/contact');
  }, [router]);

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
    
    // External App Routes
    const externalRouteMap = {
        'get started': 'https://app.teenversehub.in/login',
        'auth': 'https://app.teenversehub.in/login',
        'login': 'https://app.teenversehub.in/login',
        'start earning': 'https://app.teenversehub.in/login',
    };

    // Internal SEO Routes
    const internalRouteMap = {
        'home': '/',
        'about us': '/about', 
        'about': '/about',
        'faq': '/faq', 
        'safety': '/safety',
        'contact': '/contact'
    };
    
    setIsMobileMenuOpen(false);
    
    if (externalRouteMap[cleanTarget]) {
        window.location.href = externalRouteMap[cleanTarget]; 
        return;
    }
    if (internalRouteMap[cleanTarget]) {
        router.push(internalRouteMap[cleanTarget]);
        return;
    }

    const sectionIdMap = { 'how it works': 'how-it-works' };
    const section = document.getElementById(sectionIdMap[cleanTarget] || cleanTarget);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

 const handleFooterLink = (link) => {
      const lower = link.toLowerCase();
      
      // Route to the consolidated Legal Center
      if (lower.includes('terms')) { router.push('/legal?doc=terms'); return; }
      if (lower.includes('privacy')) { router.push('/legal?doc=privacy'); return; }
      if (lower.includes('refund') || lower.includes('dispute')) { router.push('/legal?doc=disputes'); return; } 
      
      // Route to other main pages
      if (lower.includes('safety')) { router.push('/safety'); return; } 
      if (lower.includes('about')) { router.push('/about'); return; }
      if (lower.includes('faq')) { router.push('/faq'); return; }
      if (lower.includes('contact')) { router.push('/contact'); return; }
      if (lower.includes('hire')) { router.push('/hire-teen-freelancers'); return; }
      
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

      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 ${darkMode ? 'bg-grid-pattern text-white opacity-[0.03]' : 'bg-grid-pattern text-indigo-900 opacity-[0.03]'}`}></div>
      <div className={`fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] pointer-events-none transition-opacity duration-700 transform-gpu will-change-transform ${darkMode ? 'bg-indigo-600/10' : 'bg-indigo-400/20'}`} />

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

           <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
              {['Home', 'About Us', 'How it Works'].map((item) => (
                <button key={item} onClick={() => handleNav(item)} className={`transition-colors hover-target ${darkMode ? 'text-gray-300 hover:text-[#ccff00]' : 'text-slate-600 hover:text-indigo-600'}`}>{item}</button>
              ))}
              <div className={`w-px h-4 ${darkMode ? 'bg-white/20' : 'bg-slate-200'}`}></div>
              <button onClick={toggleTheme} className={`hover-target p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-slate-100 text-indigo-600'}`}>
                {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
              </button>
              <button onClick={() => handleNav('start earning')} className={`px-6 py-2 rounded-xl transition-all hover:scale-105 font-black hover-target ${darkMode ? 'bg-[#ccff00] text-black hover:bg-yellow-400' : 'bg-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200 hover:bg-indigo-700'}`}>
                START EARNING
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
                   {['Home', 'About Us', 'How it Works'].map((item) => (
                     <button key={item} onClick={() => handleNav(item)} className={`text-left text-lg font-bold transition-colors flex items-center justify-between group py-2 ${darkMode ? 'text-gray-300 hover:text-[#ccff00]' : 'text-slate-700 hover:text-indigo-600'}`}>
                       {item} <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`} />
                     </button>
                   ))}
                 </div>
                 <div className={`h-px w-full ${darkMode ? 'bg-white/10' : 'bg-slate-100'}`}></div>
                 <button onClick={() => handleNav('start earning')} className={`w-full py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg ${darkMode ? 'bg-[#ccff00] text-black' : 'bg-indigo-600 text-white'}`}>
                   Join for Free <Rocket size={18} />
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- 🎯 HERO SECTION (SEO Optimized for "Creators") --- */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden text-center">
         <div className="max-w-5xl mx-auto relative z-10">
            <div className={`animate-fade-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-bold tracking-widest mb-8 ${darkMode ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
              <GraduationCap size={14} /> FOR TEENAGERS & STUDENTS
            </div>
            
            <h1 className={`animate-fade-up delay-200 text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Turn Your Skills Into <br className="hidden md:block"/>
              <span className={`text-transparent bg-clip-text ${darkMode ? 'bg-gradient-to-r from-[#ccff00] to-green-400' : 'bg-gradient-to-r from-indigo-600 to-purple-500'}`}>Real Experience.</span>
            </h1>
            
            <p className={`animate-fade-up delay-300 text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              Don't wait until graduation. Join the safest freelance platform for teens. Build a verified portfolio, work with real startups, and start earning money securely.
            </p>

            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button 
                 onClick={() => handleNav('start earning')}
                 className={`hover-target relative px-10 py-5 font-black text-lg rounded-2xl flex items-center gap-3 transition-transform hover:scale-105 shadow-xl ${darkMode ? 'bg-[#ccff00] text-black shadow-[#ccff00]/20' : 'bg-indigo-600 text-white shadow-indigo-200'}`}
               >
                  CREATE FREE PROFILE <ArrowRight size={20}/>
               </button>
            </div>
         </div>
      </section>

      {/* --- 🛡️ TRUST BAR --- */}
      <section className={`py-10 border-y ${darkMode ? 'bg-[#080808] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold uppercase tracking-wider">
            <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              <Users size={20} className={darkMode ? 'text-[#ccff00]' : 'text-indigo-500'} /> Guardian Approval
            </span>
            <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              <ShieldCheck size={20} className={darkMode ? 'text-[#ccff00]' : 'text-indigo-500'} /> 100% Safe Environment
            </span>
            <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              <DollarSign size={20} className={darkMode ? 'text-[#ccff00]' : 'text-indigo-500'} /> Secure Escrow Payments
            </span>
         </div>
      </section>

      {/* --- 💡 WHY JOIN TEENVERSEHUB (The Pitch to Teens) --- */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-[#050505]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <RevealOnScroll>
              <h2 className={`text-4xl md:text-5xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Why wait to start your career?
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Most freelance sites expect you to be a professional with years of experience. We built TeenVerseHub specifically for beginners to get their first break safely.
              </p>
              <div className="space-y-6">
                {[
                  { title: "No Experience Needed", desc: "Start small. Build your skills with real-world entry-level tasks." },
                  { title: "Build a Verified CV", desc: "Every completed job acts as a verified review for your future resume." },
                  { title: "Parents Stay Informed", desc: "Our transparent system ensures your guardians feel safe letting you work online." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`mt-1 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#ccff00]/20 text-[#ccff00]' : 'bg-indigo-100 text-indigo-600'}`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
          <div className="md:w-1/2 relative">
             <RevealOnScroll delay={0.2}>
               <div className={`aspect-square rounded-[3rem] border relative overflow-hidden flex items-center justify-center ${darkMode ? 'bg-[#111] border-white/10' : 'bg-indigo-50 border-indigo-100'}`}>
                  <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${darkMode ? 'from-[#ccff00] to-transparent' : 'from-indigo-400 to-transparent'}`} />
                  <div className="text-center relative z-10 p-8">
                     <Award size={64} className={`mx-auto mb-6 ${darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}`} />
                     <h3 className={`text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Learn. Build. Earn.</h3>
                     <p className={darkMode ? 'text-gray-400' : 'text-slate-600'}>The ultimate launchpad for students.</p>
                  </div>
               </div>
             </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- 💻 SKILLS YOU CAN MONETIZE --- */}
      <section className={`py-24 px-6 border-t ${darkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                What are you <span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>good at?</span>
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Turn your hobbies into paid freelance gigs.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Video, label: "Video Editing" },
              { icon: Layout, label: "UI/UX Design" },
              { icon: TrendingUp, label: "Social Media" },
              { icon: Code, label: "Web Dev" },
              { icon: PenTool, label: "Copywriting" },
              { icon: Sparkles, label: "AI Generation" }
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.05}>
                <div className={`p-6 rounded-2xl border flex flex-col items-center text-center transition-all hover:-translate-y-1 cursor-pointer ${
                  darkMode ? 'bg-[#111] border-white/10 hover:border-[#ccff00]/50' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${darkMode ? 'bg-white/5 text-[#ccff00]' : 'bg-indigo-50 text-indigo-600'}`}>
                    <item.icon size={24} />
                  </div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.label}</h4>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- ⚙️ HOW IT WORKS (For Creators) --- */}
      <section id="how-it-works" className={`py-24 px-6 border-t ${darkMode ? 'bg-[#050505] border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                How earning works.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Setup Profile", desc: "Create your free account and get guardian approval." },
              { num: "02", title: "Pitch Clients", desc: "Find beginner-friendly jobs and pitch your skills." },
              { num: "03", title: "Do the Work", desc: "Use our safe, monitored platform to chat and deliver." },
              { num: "04", title: "Get Paid", desc: "Once approved, funds are released securely to your account." }
            ].map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className={`relative p-8 rounded-3xl border h-full ${darkMode ? 'bg-[#111] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-5xl font-black opacity-20 absolute top-4 right-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.num}</span>
                  <h3 className={`text-xl font-bold mb-3 mt-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-slate-500'}>{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 📣 CTA --- */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-slate-50'}`}>
        <RevealOnScroll>
          <div className={`max-w-5xl mx-auto p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden ${darkMode ? 'bg-[#111] border border-white/10' : 'bg-indigo-600 text-white shadow-2xl shadow-indigo-300'}`}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">Start your journey.</h2>
              <p className={`text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium ${darkMode ? 'text-gray-400' : 'text-indigo-100'}`}>
                Join thousands of other teenagers building their future safely on TeenVerseHub.
              </p>
              <button 
                onClick={() => handleNav('start earning')} 
                className={`px-8 py-4 md:px-10 md:py-5 font-black text-base md:text-lg rounded-2xl inline-flex items-center gap-3 transition-transform hover:scale-105 shadow-xl ${darkMode ? 'bg-[#ccff00] text-black shadow-[#ccff00]/20' : 'bg-white text-indigo-700 shadow-white/20'}`}
              >
                Create Free Profile <ArrowRight size={20} />
              </button>
            </div>
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
              </div>
            </div>
            <div className="md:pl-8">
              <h4 className={`font-bold uppercase tracking-widest text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>Company</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                {['About Us', 'FAQ', 'Safety'].map(l => (
                  <li key={l}><button onClick={() => handleFooterLink(l)} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div className="md:pl-4">
              <h4 className={`font-bold uppercase tracking-widest text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>Legal</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                {['Terms of Service', 'Privacy Policy'].map(l => (
                  <li key={l}><button onClick={() => handleFooterLink(l)} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#111] border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <h4 className={`font-bold text-xs uppercase mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <AlertTriangle size={14} className="text-amber-500"/> Contact
              </h4>
              <div className={`text-xs font-mono space-y-2 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                <a href="mailto:support@teenversehub.in" className={`hover:underline break-all ${darkMode ? 'text-white' : 'text-indigo-600'}`}>support@teenversehub.in</a>
              </div>
            </div>
          </div>
          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono ${darkMode ? 'border-white/10 text-gray-600' : 'border-slate-200 text-slate-500'}`}>
            <div>© {new Date().getFullYear()} TeenVerseHub. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorPageClient;