'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Rocket, Menu, X, Sun, Moon, 
  ArrowRight, ShieldCheck, Mail, MapPin, MessageSquare, 
  Send, Loader2, CheckCircle2, AlertTriangle
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
  
  .animate-slide-down {
    animation: slideDown 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .animate-fade-up {
    animation: heroFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0; 
  }
  .animate-pop-in {
    animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    opacity: 0;
  }
  
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
`;

const ContactPageClient = ({ initialDarkMode = true }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme State inherited from server cookie
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll Hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // GPU Cursor State
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

  // Prefetching
  useEffect(() => {
    
    router.prefetch('/');
    router.prefetch('/about');
    router.prefetch('/faq');
    router.prefetch('/safety');
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
      if (lower.includes('terms')) { router.push('/legal?doc=terms'); return; }
      if (lower.includes('privacy')) { router.push('/legal?doc=privacy'); return; }
      if (lower.includes('about')) { router.push('/about'); return; }
      if (lower.includes('faq')) { router.push('/faq'); return; }
      handleNav(link);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
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
      <div className={`fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] pointer-events-none transition-opacity duration-700 transform-gpu will-change-transform ${darkMode ? 'bg-indigo-500/10' : 'bg-indigo-400/20'}`} />

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1.5 bg-[#ccff00] origin-left z-[100]" />

      {/* --- NAVBAR (Instant CSS Load) --- */}
      <nav className="animate-slide-down fixed w-full z-50 top-0 py-4 px-6">
        <div className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl relative z-50 transition-all ${darkMode ? 'bg-black/80 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-indigo-100/50'}`}>
           <div className="flex items-center gap-3 cursor-pointer hover-target group" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
                T<span className="text-[#ccff00]">.</span>
              </div>
              <span className={`font-bold tracking-tighter text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>TeenVerseHub</span>
           </div>

           <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
              {['Home', 'About Us', 'FAQ'].map((item) => (
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
                   {['Home', 'About Us', 'FAQ'].map((item) => (
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

      {/* --- 📧 HERO SECTION (Instant CSS Load) --- */}
      <section className="relative pt-48 pb-16 px-6 overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10">
            <div className={`animate-pop-in delay-100 inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl ${darkMode ? 'bg-indigo-500/20 text-indigo-400 shadow-indigo-500/20' : 'bg-indigo-100 text-indigo-600 shadow-indigo-200'}`}>
              <MessageSquare size={44} strokeWidth={2} />
            </div>
            
            <h1 className={`animate-fade-up delay-200 text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Let's build <br className="hidden md:block"/>
              <span className={darkMode ? 'text-[#ccff00]' : 'text-indigo-600'}>something great.</span>
            </h1>
            
            <p className={`animate-fade-up delay-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              Whether you have a question, need support, or want to partner with us — our team is here and ready to help.
            </p>
         </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:w-5/12 space-y-8">
            <RevealOnScroll>
              <h2 className={`text-3xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Get in touch</h2>
              <p className={`text-lg leading-relaxed mb-10 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                We typically respond to all inquiries within 24-48 hours. For immediate concerns regarding safety, please mark your subject as 'URGENT'.
              </p>

              <div className="space-y-6">
                {/* Email Section */}
                <div className={`p-6 rounded-2xl border flex items-start gap-5 transition-colors ${darkMode ? 'bg-[#111] border-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:border-indigo-200 shadow-sm'}`}>
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/5 text-[#ccff00]' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email Us</h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>For support, feedback, and general inquiries.</p>
                    <a href="mailto:support@teenversehub.in" className={`font-mono font-bold text-lg hover-target transition-colors break-all ${darkMode ? 'text-[#ccff00] hover:text-white' : 'text-indigo-600 hover:text-indigo-800'}`}>
                      support@teenversehub.in
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className={`p-6 rounded-2xl border flex items-start gap-5 transition-colors ${darkMode ? 'bg-[#111] border-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:border-indigo-200 shadow-sm'}`}>
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/5 text-[#ccff00]' : 'bg-indigo-50 text-indigo-600'}`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Headquarters</h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                      TeenVerseHub (Proprietorship)<br/>
                      Mahoba, Uttar Pradesh<br/>
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-10">
                <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>Connect with us</h4>
                <div className="flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#!" className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover-target ${darkMode ? 'bg-white/5 text-white hover:bg-[#ccff00] hover:text-black' : 'bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white shadow-sm'}`}>
                      <Icon size={20}/>
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-7/12">
            <RevealOnScroll delay={0.2}>
              <div className={`p-8 md:p-12 rounded-[2.5rem] border relative overflow-hidden shadow-2xl ${darkMode ? 'bg-[#111] border-white/10 shadow-black/50' : 'bg-white border-slate-200 shadow-indigo-100/40'}`}>
                
                <h3 className={`text-2xl font-black mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
                
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${darkMode ? 'bg-[#ccff00]/20 text-[#ccff00]' : 'bg-green-100 text-green-600'}`}>
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h4>
                      <p className={darkMode ? 'text-gray-400' : 'text-slate-600'}>Thank you for reaching out. Our team will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className={`text-sm font-bold ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Your Name</label>
                          <input 
                            type="text" name="name" required
                            value={formData.name} onChange={handleInputChange}
                            placeholder="John Doe"
                            className={`w-full px-5 py-4 rounded-xl outline-none transition-all ${darkMode ? 'bg-black border border-white/10 text-white focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] placeholder:text-gray-600' : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400'}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className={`text-sm font-bold ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Email Address</label>
                          <input 
                            type="email" name="email" required
                            value={formData.email} onChange={handleInputChange}
                            placeholder="john@example.com"
                            className={`w-full px-5 py-4 rounded-xl outline-none transition-all ${darkMode ? 'bg-black border border-white/10 text-white focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] placeholder:text-gray-600' : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400'}`}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className={`text-sm font-bold ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Subject</label>
                        <input 
                          type="text" name="subject" required
                          value={formData.subject} onChange={handleInputChange}
                          placeholder="How can we help?"
                          className={`w-full px-5 py-4 rounded-xl outline-none transition-all ${darkMode ? 'bg-black border border-white/10 text-white focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] placeholder:text-gray-600' : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400'}`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className={`text-sm font-bold ml-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>Message</label>
                        <textarea 
                          name="message" required rows={5}
                          value={formData.message} onChange={handleInputChange}
                          placeholder="Type your message here..."
                          className={`w-full px-5 py-4 rounded-xl outline-none transition-all resize-none ${darkMode ? 'bg-black border border-white/10 text-white focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] placeholder:text-gray-600' : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400'}`}
                        />
                      </div>

                      <button 
                        type="submit" disabled={isSubmitting}
                        className={`hover-target w-full py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-lg ${
                          isSubmitting 
                            ? (darkMode ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-slate-200 text-slate-500 cursor-not-allowed')
                            : (darkMode ? 'bg-[#ccff00] text-black hover:bg-yellow-400 shadow-[#ccff00]/20 hover:shadow-[#ccff00]/40' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50')
                        }`}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="animate-spin" size={18} /> Sending...</>
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`pt-20 pb-10 border-t mt-20 ${darkMode ? 'bg-black border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
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
            </div>

            <div className="md:pl-8">
              <h4 className={`font-bold uppercase tracking-widest text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>Company</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                {['About Us', 'FAQ', 'Careers', 'Contact'].map(l => (
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
                {['Terms of Service', 'Privacy Policy', 'Safety Guidelines'].map(l => (
                  <li key={l}>
                    <button onClick={() => handleFooterLink(l === 'Safety Guidelines' ? 'safety' : l)} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}>
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

export default ContactPageClient;