"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, CloudLightning, LayoutGrid } from "lucide-react";

export default function Intro() {
  const principles = [
    {
      icon: <LayoutGrid className="text-blue-400" size={20} />,
      title: "Scalable Renders",
      desc: "Component architecture designed for reuse, RBAC security, and dynamic viewport responsiveness."
    },
    {
      icon: <Cpu className="text-emerald-400" size={20} />,
      title: "Native Mobile Performance",
      desc: "Optimized mobile animations, offline synchronization support, and push notifications workflows."
    },
    {
      icon: <CloudLightning className="text-indigo-400" size={20} />,
      title: "Robust DevOps",
      desc: "Engineered AWS deployment, Nginx proxy, SSL setup, and automated build distribution pipelines."
    },
    {
      icon: <ShieldCheck className="text-amber-400" size={20} />,
      title: "Business Automation",
      desc: "Synchronizing operations via custom extensions, scripts, API integrations, and payment gateways."
    }
  ];

  return (
    <section id="who-i-am" className="relative py-24 bg-[#0F172A] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        
        {/* Subtle Decorative glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Biography Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-8 bg-blue-500 rounded" />
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
                  Who I Am
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Product-Focused Full Stack Engineer
              </h2>

              <p className="text-slate-300 mb-5 leading-relaxed text-base sm:text-lg">
                I’m a Full Stack Web & Mobile Developer with 2.5+ years of experience building production-grade applications using <strong className="text-slate-100 font-semibold">React.js</strong> and <strong className="text-slate-100 font-semibold">React Native</strong>.
              </p>

              <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
                I specialize in scalable frontend systems, mobile application development, deployment workflows and automation-based solutions. I have worked on real-world business software, engineering tooling and cloud-integrated applications with hands-on experience in AWS infrastructure and mobile publishing pipelines.
              </p>

              <div className="flex items-center gap-4 py-4 px-6 bg-slate-900/60 border border-slate-800 rounded-2xl max-w-lg shadow-inner">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-500 font-mono">2.5+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider leading-relaxed">
                  Years of building professional web, mobile, & cloud software
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Core Principles Visual */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((pr, idx) => (
                <motion.div
                  key={pr.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-900/40 hover:bg-slate-800/40 border border-slate-800/80 hover:border-slate-700/50 p-6 rounded-2xl transition-all duration-300"
                >
                  <div className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-lg w-fit mb-4">
                    {pr.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">{pr.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pr.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
