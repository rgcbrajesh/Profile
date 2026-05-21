"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Smartphone, Database, Cloud, Zap } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; tag?: string }[];
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <LayoutGrid size={18} />,
      skills: [
        { name: "React.js", tag: "Expert" },
        { name: "Next.js", tag: "Expert" },
        { name: "TypeScript", tag: "Advanced" },
        { name: "JavaScript", tag: "Expert" },
        { name: "Tailwind CSS", tag: "Expert" },
        { name: "Context API & State Management" },
        { name: "Reusable Component Architecture" },
        { name: "RBAC (Role-Based Access Control) Systems" }
      ]
    },
    {
      id: "mobile",
      name: "Mobile App",
      icon: <Smartphone size={18} />,
      skills: [
        { name: "React Native", tag: "Expert" },
        { name: "Expo CLI & EAS Build", tag: "Advanced" },
        { name: "CodePush OTA Update Patches" },
        { name: "Firebase Push Notifications" },
        { name: "Android Publishing & Release Pipelines" },
        { name: "iOS Publishing & App Store Connect" },
        { name: "Apple TestFlight Testing Cycles" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Database size={18} />,
      skills: [
        { name: "Node.js", tag: "Advanced" },
        { name: "Express.js", tag: "Advanced" },
        { name: "MongoDB", tag: "Advanced" },
        { name: "REST API Integration & Design" },
        { name: "JWT Session Authentication" },
        { name: "API Workflow Architecture" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud size={18} />,
      skills: [
        { name: "AWS EC2 instances", tag: "Advanced" },
        { name: "AWS S3 storage hosting" },
        { name: "AWS CloudFront CDN edge setup" },
        { name: "AWS Route53 DNS management" },
        { name: "Nginx reverse proxy servers" },
        { name: "PM2 server process managers" },
        { name: "SSL Setup (Let's Encrypt / Certbot)" },
        { name: "Domain Routing & configuration" }
      ]
    },
    {
      id: "automation",
      name: "API & Automation",
      icon: <Zap size={18} />,
      skills: [
        { name: "Razorpay payment processing gateway" },
        { name: "Google Sheets API automation" },
        { name: "YouTube Data API v3 scheduler" },
        { name: "Google Cloud Project Console & OAuth setup" },
        { name: "Firebase Analytics & cloud configs" },
        { name: "Cron & API workflow automation" }
      ]
    }
  ];

  const activeCategoryData = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="relative py-24 bg-[#0F172A] border-t border-slate-900">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 relative">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
              Expertise
            </span>
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Technical Skill Set
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Hands-on capability across client-side web frameworks, cross-platform mobile frameworks, production servers, automation scripting, and cloud infrastructures.
          </p>
        </div>

        {/* Tab Selectors Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3 p-1.5 bg-slate-950/40 border border-slate-800/80 rounded-2xl mb-10 max-w-4xl mx-auto shadow-lg scrollbar-none snap-x snap-mandatory">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 md:flex-shrink w-[140px] md:w-auto snap-start flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Skill Details Grid */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-10 min-h-[300px] shadow-2xl relative overflow-hidden backdrop-blur-sm">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {activeCategoryData.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-4 bg-slate-950/30 hover:bg-slate-950/70 border border-slate-800/60 hover:border-slate-700/50 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-all duration-300" />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  {skill.tag && (
                    <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                      {skill.tag}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
