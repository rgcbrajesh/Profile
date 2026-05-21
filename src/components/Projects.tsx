"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Code2, Cpu, Wrench, Sparkles, FolderGit2 } from "lucide-react";

interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  shortDesc: string;
  techStack: string[];
  highlight: string;
  sections: {
    features: { category?: string; items: string[] }[];
    responsibilities: string[];
    architecture?: string[];
  };
}

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<{ [key: string]: "features" | "responsibilities" | "architecture" }>({
    "rk-garage": "features",
    "deploy-intel": "features",
    "youtube-auto": "features",
  });

  const projects: Project[] = [
    {
      id: "rk-garage",
      tag: "LIVE CLIENT PROJECT",
      tagColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      title: "RK Garage Management Platform",
      shortDesc: "A complete enterprise-grade automobile service and garage management platform built for a live business client to manage repair workflows, inventory, customer history, billing, and operational reporting.",
      techStack: ["React.js", "React Native", "Node.js", "MongoDB", "Razorpay Integration"],
      highlight: "Handled the complete product lifecycle from architecture design and database modeling to Play Store/App Store publishing and cloud deployment for a live business client.",
      sections: {
        features: [
          {
            category: "Web Admin Dashboard",
            items: [
              "Real-time garage operational dashboard and repair queue monitoring",
              "Customer profile database and repair/billing transaction histories",
              "Inventory tracking system with automatic low-stock alerts",
              "GST invoice generation, receipt processing, and financial reporting",
              "Analytical reports for tracking employee performance and revenue growth"
            ]
          },
          {
            category: "Mobile Application",
            items: [
              "Real-time service updates, diagnostic checklists, and status tracking",
              "Firebase push notifications for milestone updates and delivery alerts",
              "Client-facing appointment booking and repair tracking view"
            ]
          }
        ],
        responsibilities: [
          "Designed the complete application architecture and MongoDB relational workflow structure.",
          "Developed a responsive admin dashboard using React.js and a Tailwind utility layer.",
          "Built a cross-platform mobile application from scratch using React Native.",
          "Implemented Razorpay payment gateway integration for automated online collections.",
          "Added role-based access control (RBAC) security systems to govern mechanic vs owner capabilities.",
          "Managed deployment configurations, domain routes, and SSL certifications."
        ],
        architecture: [
          "NoSQL MongoDB Schema modeling for relational logs (Customer <-> Service <-> Invoice).",
          "Express API architecture with JWT authentication and route interceptors.",
          "Scalable Redux/Context state propagation for smooth data updates."
        ]
      }
    },
    {
      id: "deploy-intel",
      tag: "ENGINEERING AUTOMATION TOOL",
      tagColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
      title: "Deployment Intelligence VS Code Extension",
      shortDesc: "An internal engineering automation tool built to streamline production deployment tracking, Git activity analysis, and automated release reporting workflows.",
      techStack: ["VS Code Extension API", "Git Automation", "React", "Node.js"],
      highlight: "Built internal developer automation tooling to optimize release management workflows and enhance deployment visibility across engineering squads.",
      sections: {
        features: [
          {
            items: [
              "Production deployment tracking with live environment updates",
              "Commit comparison engine contrasting differences between local and production branches",
              "Cherry-pick and merge anomaly alert system during release cycles",
              "One-click release report and markdown changelog generator",
              "File-level diff analysis for validating bug fixes in the hotfix build",
              "Deployment version history log and rolled-back release tags"
            ]
          }
        ],
        responsibilities: [
          "Built the internal VS Code Extension connecting VS Code workspace to Git systems.",
          "Designed the automation logic comparing commits, merges, and cherry-picks.",
          "Created structured Markdown release reports for management and QA reviews.",
          "Improved deployment visibility, cutting manually generated changelog effort by over 70%."
        ],
        architecture: [
          "Node.js child_process orchestration executing optimized git binary operations.",
          "VS Code Sidebar UI developed in React and synchronized via postMessage bridges.",
          "Caching repository indexes locally for instant comparison responses."
        ]
      }
    },
    {
      id: "youtube-auto",
      tag: "AUTOMATION PLATFORM",
      tagColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
      title: "YouTube Automation Platform",
      shortDesc: "A mobile-based automation platform that schedules, manages, and automatically publishes YouTube content using Google Sheets synchronization and YouTube Data API integrations.",
      techStack: ["React Native", "Google Sheets API", "YouTube Data API v3", "Google Cloud Platform"],
      highlight: "Built creator-focused automation workflows utilizing Google APIs and cloud integration pipelines to manage multi-channel publication from a mobile UI.",
      sections: {
        features: [
          {
            items: [
              "Google Sheets real-time content schedule and metadata synchronization",
              "Dynamic scheduling engine with multi-timezone publishing queues",
              "Automated YouTube Video publishing with description, tags, and category updates",
              "Multi-channel YouTube account management from a single mobile dashboard",
              "Google Cloud OAuth 2.0 flow for secure user tokens and access scopes"
            ]
          }
        ],
        responsibilities: [
          "Developed the entire mobile automation app in React Native using modern React Hooks.",
          "Integrated Google Sheets API to pull and write content statuses dynamically.",
          "Implemented YouTube Data API v3 integration for video publishing queues.",
          "Configured Google Cloud Project, APIs, scopes, and OAuth verification setups.",
          "Designed automatic scheduling cron timers to trigger publishing events."
        ],
        architecture: [
          "Google OAuth refresh token persistence in native secure storage.",
          "Optimized media upload streams utilizing Chunked uploads for large video packages.",
          "State management using Context API to handle multi-channel active selection keys."
        ]
      }
    }
  ];

  const handleTabChange = (projectId: string, tab: "features" | "responsibilities" | "architecture") => {
    setActiveProjectTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        
        {/* Decorative Grid Overlay background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 -z-10" />

        {/* Headings */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-500 rounded" />
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
            Detailed breakdown of production software applications, developer tooling, and automated integrations built for real clients.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const activeTab = activeProjectTab[project.id];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-800 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl relative backdrop-blur-sm overflow-hidden"
              >
                
                {/* Decorative glow inside card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Column: Project Info & Highlight Box */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Project Tag */}
                      <span className={`inline-block border font-mono text-[10px] font-bold tracking-wider px-3 py-1 rounded-full mb-6 ${project.tagColor}`}>
                        {project.tag}
                      </span>

                      {/* Project Title */}
                      <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center gap-3">
                        <FolderGit2 size={24} className="text-blue-500" />
                        {project.title}
                      </h3>

                      {/* Project Short Description */}
                      <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                        {project.shortDesc}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-semibold px-3 py-1 bg-slate-900 border border-slate-800/80 rounded-lg text-slate-400 hover:text-slate-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="relative border-l-2 border-blue-500 bg-blue-500/5 p-3.5 sm:p-4 rounded-r-xl shadow-inner mt-4">
                      <Sparkles size={16} className="text-blue-400 absolute top-3.5 right-4" />
                      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 font-mono">
                        Key Lifecycle Ownership
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        &ldquo;{project.highlight}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Tabbed Features, Responsibilities, Architecture */}
                  <div className="lg:col-span-7 flex flex-col">
                    
                    {/* Tab Navigation */}
                    <div className="flex border-b border-slate-800/80 mb-6 overflow-x-auto scrollbar-none">
                      <button
                        onClick={() => handleTabChange(project.id, "features")}
                        className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap font-mono ${
                          activeTab === "features"
                            ? "text-blue-400 border-b-2 border-blue-500 font-bold"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Code2 size={16} />
                        <span>Key Features</span>
                      </button>

                      <button
                        onClick={() => handleTabChange(project.id, "responsibilities")}
                        className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap font-mono ${
                          activeTab === "responsibilities"
                            ? "text-blue-400 border-b-2 border-blue-500 font-bold"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Wrench size={16} />
                        <span>Responsibilities</span>
                      </button>

                      {project.sections.architecture && (
                        <button
                          onClick={() => handleTabChange(project.id, "architecture")}
                          className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap font-mono ${
                            activeTab === "architecture"
                              ? "text-blue-400 border-b-2 border-blue-500 font-bold"
                              : "text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <Cpu size={16} />
                          <span>Architecture</span>
                        </button>
                      )}
                    </div>

                    {/* Tab Content Box */}
                    <div className="flex-1 bg-slate-950/20 border border-slate-800/60 rounded-2xl p-3.5 sm:p-6 min-h-[220px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          {activeTab === "features" && (
                            <div className="space-y-4">
                              {project.sections.features.map((fGroup, gIdx) => (
                                <div key={gIdx} className="space-y-2">
                                  {fGroup.category && (
                                    <h5 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                                      {fGroup.category}
                                    </h5>
                                  )}
                                  <ul className="space-y-2.5">
                                    {fGroup.items.map((item, iIdx) => (
                                      <li key={iIdx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <CheckCircle size={15} className="text-blue-500 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {activeTab === "responsibilities" && (
                            <ul className="space-y-3">
                              {project.sections.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {activeTab === "architecture" && project.sections.architecture && (
                            <ul className="space-y-3">
                              {project.sections.architecture.map((arch, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                                  <span className="font-mono text-xs text-blue-500 font-bold mt-0.5 select-none">[0{aIdx+1}]</span>
                                  <span>{arch}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
