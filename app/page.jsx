'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Rocket, Star, TrendingUp, ArrowRight, CheckCircle,
  DollarSign, ShieldCheck, Lock, Code, Users, Briefcase, AlertTriangle,
  Layout, Video, PenTool, Globe, Sparkles, XCircle,
  HelpCircle, Wallet, CheckCircle2
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

import MarketingShell from './components/MarketingShell';
// import { SITE } from './lib/site'; // Assuming this is used elsewhere in your app

// ════════════════════════════════════════════════════════════════════════════
//  ALL COLORS — FULLY NATIVE TO GLOBAL DARK MODE
// ════════════════════════════════════════════════════════════════════════════
const ALL_COLORS_CSS = `
  /* ── LIGHT MODE (default) ──────────────────────────────────────────── */
  :root {
    --c-root:           #f8f9ff;
    --c-sec-subtle:     #f8fafc;
    --c-sec-white:      #ffffff;
    --c-sec-dark-bg:    #0f172a;
    --c-heading:        #0f172a;
    --c-body:           #475569;
    --c-muted:          #94a3b8;
    --c-accent:         #4f46e5;
    --c-hero-glow:         rgba(99,102,241,0.2);
    --c-hero-badge-bg:     #eef2ff;
    --c-hero-badge-border: #c7d2fe;
    --c-hero-badge-text:   #4338ca;
    --c-hero-grad-from:    #4f46e5;
    --c-hero-grad-to:      #a855f7;
    --c-hero-p-btn:        #4f46e5;
    --c-hero-p-btn-text:   #ffffff;
    --c-hero-p-btn-shadow: rgba(79,70,229,0.3);
    --c-hero-s-btn-bg:     #ffffff;
    --c-hero-s-btn-border: #e2e8f0;
    --c-hero-s-btn-text:   #0f172a;
    --c-hero-s-btn-shadow: rgba(0,0,0,0.06);
    --c-card:           #ffffff;
    --c-card-border:    #e2e8f0;
    --c-card-border-s:  #f1f5f9;
    --c-icon-default-bg:   #eef2ff;
    --c-icon-default-fg:   #4f46e5;
    --c-step-active-bg:    #ffffff;
    --c-step-active-border:#818cf8;
    --c-step-icon-active-bg: #4f46e5;
    --c-step-icon-active-fg: #ffffff;
    --c-step-icon-def-bg:  #eef2ff;
    --c-step-icon-def-fg:  #4f46e5;
    --c-step-connector:    #e2e8f0;
    --c-step-connector-anim: #4f46e5;
    --c-tbl-bg:          #ffffff;
    --c-tbl-border:      #e2e8f0;
    --c-tbl-shadow:      rgba(99,102,241,0.08);
    --c-tbl-glow:        rgba(238,242,255,0.8);
    --c-tbl-header-sep:  #f1f5f9;
    --c-tbl-badge-bg:    #4f46e5;
    --c-tbl-badge-text:  #ffffff;
    --c-tbl-tvh-col:     #4f46e5;
    --c-tbl-other-col:   #94a3b8;
    --c-tbl-feat-text:   #1e293b;
    --c-tbl-label:       #94a3b8;
    --c-tbl-row-hover:   #f8fafc;
    --c-tbl-row-sep:     #f1f5f9;
    --c-tab-wrap-bg:     #f1f5f9;
    --c-tab-wrap-border: #e2e8f0;
    --c-tab-active-bg:   #ffffff;
    --c-tab-active-text: #4f46e5;
    --c-tab-inactive:    #64748b;
    --c-tab-panel-bg:    rgba(238,242,255,0.5);
    --c-tab-panel-border:#e0e7ff;
    --c-problem-bg:      #ffffff;
    --c-problem-border:  #fda4af;
    --c-cta-bg-grad:     #4f46e5;
    --c-cta-text-high:   #ffffff;
    --c-cta-icon:        rgba(199,210,254,1);
    --c-cta-glow:        transparent;
    --c-skills-glow-a:   rgba(99,102,241,0.2);
    --c-skills-glow-b:   rgba(236,72,153,0.2);
    --c-progress:        #4f46e5;
  }

  /* ── DARK MODE ──────────────────────────────────────────────────────── */
  :root.dark, html.dark, .dark {
    --c-root:           #050505;
    --c-sec-subtle:     #080808;
    --c-sec-white:      #0a0a0a;
    --c-sec-dark-bg:    #000000;
    --c-heading:        #ffffff;
    --c-body:           #9ca3af;
    --c-muted:          #6b7280;
    --c-accent:         #ccff00;
    --c-hero-glow:         rgba(99,102,241,0.1);
    --c-hero-badge-bg:     rgba(99,102,241,0.1);
    --c-hero-badge-border: rgba(99,102,241,0.3);
    --c-hero-badge-text:   #a5b4fc;
    --c-hero-grad-from:    #ccff00;
    --c-hero-grad-to:      #4ade80;
    --c-hero-p-btn:        #ccff00;
    --c-hero-p-btn-text:   #000000;
    --c-hero-p-btn-shadow: rgba(204,255,0,0.3);
    --c-hero-s-btn-bg:     rgba(255,255,255,0.05);
    --c-hero-s-btn-border: rgba(255,255,255,0.1);
    --c-hero-s-btn-text:   #ffffff;
    --c-hero-s-btn-shadow: rgba(0,0,0,0);
    --c-card:           #111111;
    --c-card-border:    rgba(255,255,255,0.1);
    --c-card-border-s:  rgba(255,255,255,0.05);
    --c-icon-default-bg:   rgba(255,255,255,0.05);
    --c-icon-default-fg:   #ffffff;
    --c-step-active-bg:    #1a1a1a;
    --c-step-active-border:rgba(204,255,0,0.5);
    --c-step-icon-active-bg: #ccff00;
    --c-step-icon-active-fg: #000000;
    --c-step-icon-def-bg:  rgba(255,255,255,0.05);
    --c-step-icon-def-fg:  #ffffff;
    --c-step-connector:    rgba(255,255,255,0.1);
    --c-step-connector-anim:#ccff00;
    --c-tbl-bg:          #0a0a0a;
    --c-tbl-border:      rgba(255,255,255,0.1);
    --c-tbl-shadow:      rgba(0,0,0,0);
    --c-tbl-glow:        rgba(204,255,0,0.08);
    --c-tbl-header-sep:  rgba(255,255,255,0.1);
    --c-tbl-badge-bg:    #ccff00;
    --c-tbl-badge-text:  #000000;
    --c-tbl-tvh-col:     #ccff00;
    --c-tbl-other-col:   #6b7280;
    --c-tbl-feat-text:   #ffffff;
    --c-tbl-label:       #6b7280;
    --c-tbl-row-hover:   rgba(255,255,255,0.05);
    --c-tbl-row-sep:     rgba(255,255,255,0.05);
    --c-tab-wrap-bg:     #000000;
    --c-tab-wrap-border: rgba(255,255,255,0.2);
    --c-tab-active-bg:   #ccff00;
    --c-tab-active-text: #000000;
    --c-tab-inactive:    #9ca3af;
    --c-tab-panel-bg:    #000000;
    --c-tab-panel-border:rgba(255,255,255,0.1);
    --c-problem-bg:      #111111;
    --c-problem-border:  rgba(244,63,94,0.5);
    --c-cta-bg-grad:     linear-gradient(to right, #1a1a1a, #222222);
    --c-cta-text-high:   #ccff00;
    --c-cta-icon:        #ccff00;
    --c-cta-glow:        rgba(204,255,0,0.1);
    --c-skills-glow-a:   rgba(204,255,0,0.15);
    --c-skills-glow-b:   rgba(88,28,135,0.3);
  }

  /* ── GLOBAL RESETS ─────────────────────────────────────── */
  * { box-sizing: border-box; }
  ::selection { background-color: #ccff00; color: #000000; }
  body { font-family: var(--font-inter, system-ui, sans-serif); overflow-x: hidden; }
  h1, h2, h3, h4, h5, h6, button { font-family: var(--font-space, system-ui, sans-serif); }

  /* ── UTILITY CLASSES ───────────────────────── */
  .connector-anim { position: relative; overflow: hidden; border-radius: 9999px; }
  .connector-anim::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to right, transparent, var(--c-step-connector-anim), transparent);
    animation: connectorSlide 1.5s linear infinite;
  }
  @keyframes connectorSlide {
    from { transform: translateX(-100%); }
    to   { transform: translateX(100%);  }
  }
  .tab-btn {
    position: relative; padding: 0.75rem 2rem; border-radius: 9999px;
    font-weight: 700; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em;
    background: none; border: none; cursor: pointer; transition: color 0.2s;
  }
  .tbl-row:hover { background: var(--c-tbl-row-hover) !important; }
`;

// ─────────────────────────────────────────────────────────────────────────────
//  ADVANCED FRAMER MOTION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────────────────────
const SKILLS = [
  { Icon: Video,     label: 'Video Editing',  color: '#3b82f6' },
  { Icon: Layout,    label: 'UI Design',      color: '#a855f7' },
  { Icon: PenTool,   label: 'Content Writing', color: '#f97316' },
  { Icon: Code,      label: 'Web Dev',        color: '#10b981' },
  { Icon: Sparkles,  label: 'AI Art',         color: '#ec4899' },
  { Icon: Globe,     label: 'Translation',    color: '#6366f1' },
  { Icon: TrendingUp,label: 'Social Media',   color: '#06b6d4' },
  { Icon: Users,     label: 'Community',      color: '#f43f5e' },
];

const audienceCards = [
  { icon: <Briefcase size={24} />, title: 'For startups', description: 'Hire sharp young talent for content, edits, design support, and short-cycle digital work.', link: '/hire-teen-freelancers', linkLabel: 'Explore the startup path' },
  { icon: <TrendingUp size={24} />, title: 'For teen freelancers', description: 'Build your first portfolio, land real client work, and learn how paid digital work actually runs.', link: '/freelance-jobs-for-teens', linkLabel: 'Explore the freelancer path' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function LandingPageClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('creators');

  // Parallax & Scroll setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Advanced Parallax transforms for background elements
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotateHeroRing = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    ['/','/about','/safety','/faq','/contact','/hire-teen-freelancers','/freelance-jobs-for-teens']
      .forEach(r => router.prefetch(r));
  }, [router]);

  const handleNav = (target) => {
    const t = target.toLowerCase();
    const ext = { 'get started':'https://app.teenversehub.in/login','auth':'https://app.teenversehub.in/login' };
    const int = { 'home':'/','about us':'/about','safety':'/safety','faq':'/faq','hire talent':'/hire-teen-freelancers','start earning':'/freelance-jobs-for-teens',"i'm a creator":'/freelance-jobs-for-teens' };
    if (ext[t]) { window.location.href = ext[t]; return; }
    if (int[t]) { router.push(int[t]); return; }
  };

  const cv = (name) => `var(${name})`;

  return (
    <MarketingShell>
      <div
        className="relative min-h-screen transition-[background-color,color] duration-500 ease-out"
        style={{ backgroundColor: cv('--c-root'), color: cv('--c-heading') }}
      >
        <style dangerouslySetInnerHTML={{ __html: ALL_COLORS_CSS }} />

        {/* ── PARALLAX BLOBS (Hidden natively in Dark Mode) ── */}
        <motion.div style={{ y: yBlob1, backgroundColor: 'rgba(165,180,252,0.3)' }} className="dark:hidden fixed top-20 right-[10%] w-64 h-64 rounded-full blur-3xl pointer-events-none z-0" />
        <motion.div style={{ y: yBlob2, backgroundColor: 'rgba(217,249,157,0.3)' }} className="dark:hidden fixed bottom-20 left-[5%] w-72 h-72 rounded-full blur-3xl pointer-events-none z-0" />

        {/* ── SCROLL PROGRESS BAR ── */}
        <motion.div style={{ scaleX, backgroundColor: cv('--c-progress') }} className="fixed top-0 left-0 right-0 h-1.5 origin-left z-[100]" />

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
          <motion.div
            style={{ rotate: rotateHeroRing, backgroundColor: cv('--c-hero-glow') }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none"
          />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-5xl"
          >
            <motion.div
              variants={textReveal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest mb-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: cv('--c-hero-badge-bg'), border: `1px solid ${cv('--c-hero-badge-border')}`, color: cv('--c-hero-badge-text') }}
            >
              <ShieldCheck size={14} style={{ color: cv('--c-accent') }} />
              VERIFIED &amp; SECURE PLATFORM
            </motion.div>

            <motion.h1
              variants={textReveal}
              className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
              style={{ color: cv('--c-heading') }}
            >
              Turn Skills Into <br />
              <span
                className="text-transparent bg-clip-text inline-block"
                style={{ backgroundImage: `linear-gradient(to right, ${cv('--c-hero-grad-from')}, ${cv('--c-hero-grad-to')})` }}
              >
                Real Experience.
              </span>
            </motion.h1>

            <motion.p 
              variants={textReveal}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed" 
              style={{ color: cv('--c-body') }}
            >
              A digital services marketplace for creators and clients. Gain real project experience and build a portfolio — all with{' '}
              <span className="font-bold" style={{ color: cv('--c-heading') }}>secure payment processing</span> and accounts operated with guardian consent.
            </motion.p>

            <motion.div variants={textReveal} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNav("i'm a creator")}
                className="relative px-10 py-5 font-black text-lg rounded-2xl flex items-center gap-3 transition-colors"
                style={{
                  backgroundColor: cv('--c-hero-p-btn'),
                  color: cv('--c-hero-p-btn-text'),
                  boxShadow: `0 20px 60px ${cv('--c-hero-p-btn-shadow')}`,
                }}
              >
                I'M A CREATOR <Rocket size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNav('hire talent')}
                className="px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-colors backdrop-blur-none dark:backdrop-blur-md"
                style={{
                  backgroundColor: cv('--c-hero-s-btn-bg'),
                  border: `1px solid ${cv('--c-hero-s-btn-border')}`,
                  color: cv('--c-hero-s-btn-text'),
                }}
              >
                HIRE TALENT <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div variants={textReveal} className="mt-8 flex items-center justify-center gap-6 text-xs font-mono" style={{ color: cv('--c-muted') }}>
              <span className="flex items-center gap-2"><CheckCircle size={14} style={{ color: '#22c55e' }} /> Verified Users</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} style={{ color: '#22c55e' }} /> Payment Protection</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SKILLS GRID
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative py-24 px-6 border-y overflow-hidden"
          style={{ backgroundColor: cv('--c-sec-subtle'), borderColor: cv('--c-card-border') }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3" style={{ backgroundColor: cv('--c-skills-glow-a') }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: cv('--c-skills-glow-b') }} />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto relative z-10"
          >
            <motion.div variants={itemReveal} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: cv('--c-heading') }}>
                  Skills in <span style={{ color: cv('--c-accent') }}>Demand.</span>
                </h2>
                <p className="text-lg" style={{ color: cv('--c-body') }}>What are you good at? Start earning with these popular categories.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {SKILLS.map(({ Icon, label, color }, i) => (
                <motion.div
                  key={i}
                  variants={itemReveal}
                  whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className="group relative p-6 rounded-2xl border cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: cv('--c-card'), borderColor: cv('--c-card-border') }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: color }} />

                  <motion.div
                    className="relative w-12 h-12 rounded-xl mb-6 flex items-center justify-center z-10 shadow-lg"
                    style={{ backgroundColor: color, color: '#ffffff' }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h4 className="font-bold text-lg relative z-10" style={{ color: cv('--c-heading') }}>{label}</h4>

                  <motion.div
                    initial={{ x: -15, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    style={{ color: cv('--c-muted') }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            TWO CLEAR JOURNEYS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-24 sm:px-10 lg:px-16" style={{ backgroundColor: cv('--c-root') }}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mx-auto max-w-[1200px]"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-6">
              
              {/* Left Dark Card */}
              <motion.div variants={itemReveal} className="lg:col-span-6">
                <div className="flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#0b1221] p-10 text-white shadow-2xl lg:h-full lg:p-14">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-200 backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      CHOOSE YOUR ROUTE
                    </div>
                    <h2 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                      One platform.<br />Two clear<br />journeys.
                    </h2>
                    <p className="mt-6 text-[1.05rem] leading-relaxed text-slate-400">
                      The homepage should route users fast. Teen freelancers need momentum. Startups need confidence. Neither group should have to decode the entire company before taking the next step.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Cards */}
              <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
                {audienceCards.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemReveal}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex h-full flex-col rounded-[2.5rem] border p-8 shadow-sm hover:shadow-xl transition-all"
                    style={{ backgroundColor: cv('--c-card'), borderColor: cv('--c-card-border') }}
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm" style={{ backgroundColor: cv('--c-icon-default-bg'), color: cv('--c-icon-default-fg') }}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black" style={{ color: cv('--c-heading') }}>{item.title}</h3>
                    <p className="mt-4 flex-1 text-[0.95rem] leading-[1.8]" style={{ color: cv('--c-body') }}>{item.description}</p>
                    <a href={item.link} className="group mt-8 flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: cv('--c-accent') }}>
                      {item.linkLabel} 
                      <motion.span whileHover={{ x: 5 }}><ArrowRight size={16} /></motion.span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            HOW IT WORKS (Timeline)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="relative py-24 px-6 overflow-hidden border-y" style={{ backgroundColor: cv('--c-sec-white'), borderColor: cv('--c-card-border-s') }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] blur-[150px] opacity-20 pointer-events-none" style={{ backgroundColor: cv('--c-hero-glow') }} />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto relative z-10"
          >
            <motion.div variants={itemReveal} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: cv('--c-heading') }}>
                Safe Work, <span style={{ color: cv('--c-accent') }}>Secure Payments.</span>
              </h2>
              <p className="text-lg" style={{ color: cv('--c-body') }}>Our system ensures protected transactions from start to finish.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { Icon: Briefcase, title: '1. Post & Pitch',   desc: 'Clients post jobs. Verified creators pitch their skills.', active: false },
                { Icon: Lock,      title: '2. Secure Payments', desc: 'Payments are processed securely through trusted payment gateways.', active: true  },
                { Icon: Code,      title: '3. Create',         desc: 'Work happens in our monitored, safe chat environment.', active: false },
                { Icon: DollarSign,title: '4. Get Paid',        desc: 'Client approves. Funds are securely released.', active: false },
              ].map(({ Icon, title, desc, active }, i) => (
                <div key={i} className="relative h-full">
                  {i < 3 && <div className="hidden md:block absolute top-14 -right-8 w-8 h-[2px] z-0 connector-anim" style={{ backgroundColor: cv('--c-step-connector') }} />}
                  <motion.div
                    variants={itemReveal}
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group relative p-8 rounded-3xl border h-full overflow-hidden z-10 shadow-sm hover:shadow-lg"
                    style={{
                      backgroundColor: active ? cv('--c-step-active-bg') : cv('--c-card'),
                      borderColor: active ? cv('--c-step-active-border') : cv('--c-card-border'),
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: cv('--c-accent') }} />
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      style={{
                        backgroundColor: active ? cv('--c-step-icon-active-bg') : cv('--c-step-icon-def-bg'),
                        color: active ? cv('--c-step-icon-active-fg') : cv('--c-step-icon-def-fg'),
                      }}
                    >
                      <Icon size={26} strokeWidth={active ? 2.5 : 2} />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-3" style={{ color: cv('--c-heading') }}>{title}</h3>
                    <p className="relative z-10 text-sm leading-relaxed" style={{ color: cv('--c-body') }}>{desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: cv('--c-root') }}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer} 
            className="max-w-5xl mx-auto relative z-10"
          >
            <motion.div variants={itemReveal} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: cv('--c-heading') }}>
                The TeenVerseHub <span style={{ color: cv('--c-accent') }}>Advantage</span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemReveal}
              className="relative rounded-2xl md:rounded-3xl border overflow-hidden"
              style={{ backgroundColor: cv('--c-tbl-bg'), borderColor: cv('--c-tbl-border'), boxShadow: `0 32px 80px ${cv('--c-tbl-shadow')}` }}
            >
              <div className="absolute top-0 bottom-0 left-1/3 w-1/3 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${cv('--c-tbl-glow')}, transparent)` }} />

              <div className="grid grid-cols-3 p-4 sm:p-6 md:p-8 border-b items-end" style={{ borderColor: cv('--c-tbl-header-sep') }}>
                <div className="text-[10px] sm:text-sm font-bold uppercase tracking-wider" style={{ color: cv('--c-tbl-label') }}>Features</div>
                <div className="relative text-center flex flex-col items-center">
                  <span
                    className="absolute -top-5 md:-top-6 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                    style={{ backgroundColor: cv('--c-tbl-badge-bg'), color: cv('--c-tbl-badge-text'), boxShadow: `0 4px 16px rgba(0,0,0,0.15)` }}
                  >
                    Built for you
                  </span>
                  <div className="text-sm sm:text-xl md:text-2xl font-black" style={{ color: cv('--c-tbl-tvh-col') }}>TeenVerseHub</div>
                </div>
                <div className="text-center text-[10px] sm:text-sm font-bold uppercase tracking-wider" style={{ color: cv('--c-tbl-label') }}>
                  Other <span className="hidden sm:inline">Platforms</span>
                </div>
              </div>

              <div className="flex flex-col">
                {[
                  { feature: 'Built for Teens',        tvh: 'Yes',        other: 'No',            TVHIcon: CheckCircle2, OtherIcon: XCircle      },
                  { feature: 'Beginner Friendly',      tvh: 'Easy Start', other: 'Difficult',    TVHIcon: CheckCircle2, OtherIcon: AlertTriangle },
                  { feature: 'Safety Focus',           tvh: 'Priority',  other: 'Limited',       TVHIcon: CheckCircle2, OtherIcon: AlertTriangle },
                  { feature: 'Guardian Transparency',  tvh: 'Available', other: 'Not Available', TVHIcon: CheckCircle2, OtherIcon: XCircle      },
                  { feature: 'First Earning Support',  tvh: 'Guided',    other: 'None',          TVHIcon: CheckCircle2, OtherIcon: XCircle      },
                  { feature: 'Competition Level',      tvh: 'Balanced',  other: 'Very High',     TVHIcon: CheckCircle2, OtherIcon: XCircle      },
                ].map(({ feature, tvh, other, TVHIcon, OtherIcon }, i) => (
                  <div
                    key={i}
                    className="tbl-row grid grid-cols-3 p-3 sm:p-5 md:p-6 items-center relative transition-colors"
                    style={{ borderBottom: i !== 5 ? `1px solid ${cv('--c-tbl-row-sep')}` : 'none' }}
                  >
                    <div className="text-xs sm:text-sm md:text-lg font-medium pl-1 sm:pl-2 md:pl-4 pr-2 leading-tight" style={{ color: cv('--c-tbl-feat-text') }}>{feature}</div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center font-bold relative z-10" style={{ color: cv('--c-tbl-tvh-col') }}>
                      <TVHIcon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-[10px] sm:text-sm md:text-base leading-none">{tvh}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center font-medium" style={{ color: cv('--c-tbl-other-col') }}>
                      <OtherIcon className="w-4 h-4 md:w-[18px] md:h-[18px] opacity-50" />
                      <span className="text-[10px] sm:text-sm md:text-base leading-none">{other}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CREATORS vs GUARDIANS TABS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 border-t" style={{ backgroundColor: cv('--c-sec-white'), borderColor: cv('--c-card-border-s') }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={itemReveal} className="flex justify-center mb-16">
              <div className="p-1 rounded-full border flex relative" style={{ backgroundColor: cv('--c-tab-wrap-bg'), borderColor: cv('--c-tab-wrap-border') }}>
                {[
                  { id: 'creators', label: 'For Creators' },
                  { id: 'parents',  label: 'For Guardians' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    className="tab-btn"
                    onClick={() => setActiveTab(id)}
                    style={{ color: activeTab === id ? cv('--c-tab-active-text') : cv('--c-tab-inactive') }}
                  >
                    {activeTab === id && (
                      <motion.div
                        layoutId="tab-indicator"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: cv('--c-tab-active-bg') }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div layout variants={itemReveal} className="border rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl" style={{ backgroundColor: cv('--c-tab-panel-bg'), borderColor: cv('--c-tab-panel-border') }}>
              <AnimatePresence mode="wait">
                {activeTab === 'creators' ? (
                  <motion.div 
                    key="creators" 
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }} 
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }} 
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                  >
                    <div className="flex-1 space-y-6">
                      <h3 className="text-4xl font-black" style={{ color: cv('--c-heading') }}>
                        Your First Project,<br /> <span style={{ color: cv('--c-accent') }}>Your Way.</span>
                      </h3>
                      <p style={{ color: cv('--c-body') }}>Stop working for "exposure". Build a real portfolio with real clients. We handle the invoices and awkward money talks.</p>
                      <ul className="space-y-4">
                        {['Build a verified CV', 'Secure Payment Processing', 'Gain Real Experience'].map((item, idx) => (
                          <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} key={item} className="flex items-center gap-3 text-sm font-bold" style={{ color: cv('--c-heading') }}>
                            <Star size={18} style={{ color: cv('--c-accent') }} /> {item}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => handleNav('start earning')}
                        className="mt-4 px-8 py-3 font-bold rounded-xl transition-colors shadow-lg"
                        style={{ backgroundColor: cv('--c-accent'), color: cv('--c-accent-fg') }}
                      >
                        Start Profile
                      </motion.button>
                    </div>
                    <div className="flex-1">
                      <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Creator" width={800} height={600} className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 object-cover" style={{ border: `1px solid ${cv('--c-card-border')}` }} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="parents" 
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }} 
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }} 
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row-reverse items-center gap-12"
                  >
                    <div className="flex-1 space-y-6">
                      <h3 className="text-4xl font-black" style={{ color: cv('--c-heading') }}>
                        Digital Skills,<br /> <span style={{ color: '#6366f1' }}>Safely Practiced.</span>
                      </h3>
                      <p style={{ color: cv('--c-body') }}>Give creators a head start in the digital economy without the risks of the open web. You stay in control.</p>
                      <ul className="space-y-4">
                        {['Accounts Operated with Guardian Consent', 'Curated, Safe Job Categories', 'No Personal Contact Details Shared'].map((item, idx) => (
                          <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} key={item} className="flex items-center gap-3 text-sm font-bold" style={{ color: cv('--c-heading') }}>
                            <ShieldCheck size={18} style={{ color: '#6366f1' }} /> {item}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button 
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => handleNav('safety')} 
                        className="mt-4 px-8 py-3 font-bold rounded-xl transition-colors shadow-lg" 
                        style={{ backgroundColor: '#4f46e5', color: '#ffffff' }}
                      >
                        View Safety Hub
                      </motion.button>
                    </div>
                    <div className="flex-1">
                      <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" alt="Guardian and Creator" width={800} height={600} className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 object-cover" style={{ border: `1px solid ${cv('--c-card-border')}` }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PROBLEMS & CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 border-t relative" style={{ backgroundColor: cv('--c-sec-subtle'), borderColor: cv('--c-card-border') }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
            <motion.div variants={itemReveal} className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: cv('--c-heading') }}>
                Why Existing Platforms <br /><span style={{ color: '#f43f5e' }}>Don't Work for Teens</span>
              </h2>
              <p className="text-lg" style={{ color: cv('--c-body') }}>Most platforms are built for professionals — not beginners.</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { Icon: XCircle,       title: 'Too Competitive', desc: 'Teens struggle to get their first client among experienced freelancers.' },
                { Icon: AlertTriangle, title: 'Lack of Safety',  desc: 'No dedicated protection layer or moderation for young users.' },
                { Icon: HelpCircle,    title: 'No Guidance',     desc: 'Beginners are left confused without direction or support.' },
                { Icon: Wallet,        title: 'Hard to Earn First', desc: 'Getting started feels impossible without experience or ratings.' },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div key={i} variants={itemReveal} whileHover={{ y: -5, scale: 1.02 }} className="p-6 rounded-2xl border-l-4 h-full shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: cv('--c-problem-bg'), borderLeftColor: cv('--c-problem-border') }}>
                  <Icon style={{ color: '#f43f5e', marginBottom: '1rem' }} size={24} />
                  <h4 className="font-bold mb-2" style={{ color: cv('--c-heading') }}>{title}</h4>
                  <p className="text-sm" style={{ color: cv('--c-body') }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemReveal}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative p-8 md:p-12 rounded-3xl overflow-hidden text-center flex flex-col md:flex-row items-center justify-center gap-6 shadow-xl"
                style={{ background: cv('--c-cta-bg-grad'), border: `1px solid ${cv('--c-cta-glow')}` }}
              >
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#ccff00]/10 to-transparent pointer-events-none" />
                <ArrowRight style={{ color: cv('--c-cta-icon') }} size={40} />
                <h3 className="text-xl md:text-2xl font-medium max-w-3xl text-left" style={{ color: '#ffffff' }}>
                  That's exactly why we built <span className="font-black" style={{ color: cv('--c-cta-text-high') }}>TeenVerseHub</span> — a platform where teens can start safely, confidently, and successfully.
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </MarketingShell>
  );
}