"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare, Layers, Award, Terminal } from "lucide-react";

export default function Experience() {
  const achievements = [
    {
      category: "Frontend & Mobile Development",
      icon: <Layers className="text-blue-400" size={16} />,
      items: [
        "Developed scalable React.js and React Native applications for active production environments.",
        "Refactored and migrated legacy React systems to modular, modern hooks-based architectures.",
        "Built and configured cross-platform Android and iOS applications from the ground up."
      ]
    },
    {
      category: "Cloud, DevOps & Automation",
      icon: <Terminal className="text-emerald-400" size={16} />,
      items: [
        "Managed complex production deployment workflows and cloud infrastructure configurations on AWS.",
        "Integrated Firebase cloud push notifications and Expo OTA (Over-the-Air) update distribution systems.",
        "Created scripts to automate release compilation, environment checks, and build distribution."
      ]
    },
    {
      category: "Payment Gateways & Architecture",
      icon: <CheckSquare className="text-indigo-400" size={16} />,
      items: [
        "Implemented secure payment gateway integrations (Razorpay) for live production transactional flows.",
        "Designed and enforced strict role-based access systems (RBAC) to support multi-tenant user portals.",
        "Drove production debugging sprints, deployment automation scripts, and shared UI component designs."
      ]
    },
    {
      category: "Engineering Guidance & Design",
      icon: <Award className="text-amber-400" size={16} />,
      items: [
        "Mentored and guided junior developers, reviewing code quality and fostering best practices.",
        "Participated actively in architecture, solution design meetings, and scoping discussions."
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#0F172A] border-t border-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />

        {/* Headings */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-500 rounded" />
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
              History
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
            Professional developer history building production web dashboards, cross-platform mobile apps, and managing release pipelines.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l-2 border-slate-800 ml-2 sm:ml-8 pl-4 sm:pl-10 space-y-12">
          
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0F172A] shadow-[0_0_10px_rgba(37,99,235,0.6)]" />

          {/* Job Card Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Header Job details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <Briefcase size={20} className="text-blue-500" />
                  LearnQoch
                </h3>
                <h4 className="text-sm font-bold font-mono text-blue-400 mt-1 uppercase tracking-wider">
                  Full Stack Web & Mobile Developer
                </h4>
              </div>
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 font-mono w-fit">
                <Calendar size={14} className="text-blue-500" />
                <span>Nov 2023 – Present</span>
              </div>
            </div>

            {/* Structured Responsibilities grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {achievements.map((ach) => (
                <div
                  key={ach.category}
                  className="bg-slate-800/20 hover:bg-slate-850/30 border border-slate-800/80 rounded-2xl p-4 sm:p-6 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-800/50">
                    {ach.icon}
                    <h5 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-300">
                      {ach.category}
                    </h5>
                  </div>
                  <ul className="space-y-3">
                    {ach.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
