"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, AppWindow, GitBranch, ArrowRight, Mail, Download } from "lucide-react";

interface TerminalTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  command: string;
  lines: string[];
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState("deploy");
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const tabs: TerminalTab[] = [
    {
      id: "deploy",
      name: "deploy-prod.sh",
      icon: <Terminal size={14} />,
      command: "./deploy-prod.sh --service frontend --env production",
      lines: [
        "Checking git status... Clean.",
        "Compiling Next.js production build...",
        "Route analysis: 12 static, 4 dynamic.",
        "Uploading static assets to AWS S3 bucket... [████████████████] 100%",
        "Invalidating AWS CloudFront cache (Dist: E2QXA7S)... Done.",
        "SSL certificate verified (Let's Encrypt).",
        "Reloading reverse proxy Nginx server on EC2... OK.",
        "🚀 Deployment completed successfully in 18.2s!"
      ]
    },
    {
      id: "mobile",
      name: "app-publish.js",
      icon: <AppWindow size={14} />,
      command: "node publish-mobile.js --platform all --release v2.0.4",
      lines: [
        "Starting mobile distribution pipeline...",
        "[iOS] Creating Xcode archive... Success.",
        "[iOS] Uploading IPA to App Store Connect (TestFlight)...",
        "[iOS] Entitlements validated. Build 2.0.4 (12) is processing.",
        "[Android] Bundling Release AAB bundle...",
        "[Android] Deploying AAB to Google Play Console (Closed Beta)...",
        "[OTA] Dispatching CodePush OTA update patch to Expo clients...",
        "📱 Mobile app updates deployed successfully to all channels!"
      ]
    },
    {
      id: "git",
      name: "git-intel.py",
      icon: <GitBranch size={14} />,
      command: "python git_analytics.py --compare main..release-v2.1",
      lines: [
        "Fetching remote Git hooks & git history...",
        "Analyzing 24 commits across 8 changed files:",
        "  - Feature: RBAC Fees Management screen added (Tailwind CSS)",
        "  - Optimization: React Native lists cache threshold tuned",
        "  - Patch: Token refresh interceptor crash fixed",
        "Generating engineering velocity metrics...",
        "Changelog report saved to ./release_changelogs/changelog_v2.1.md",
        "📈 Git changes evaluated: 14 commits merged to release."
      ]
    }
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setTypedLines([]);
    setCurrentLineIndex(0);
  };

  useEffect(() => {
    if (currentLineIndex < activeTabData.lines.length) {
      const timer = setTimeout(() => {
        setTypedLines((prev) => [...prev, activeTabData.lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 500); // delay between lines
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, activeTabData]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0F172A] overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* Left: Content Info */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Brijesh Rajput
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-slate-200 mb-4"
          >
            Full Stack Web & Mobile Developer
          </motion.h2>

          {/* Subtitle Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["React.js", "React Native", "AWS", "Automation Systems"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-slate-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
          >
            Building scalable web applications, mobile apps and automation systems with strong focus on deployment workflows, cloud infrastructure and real-world business solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl border border-blue-500/20 shadow-[0_4px_14px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/95 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>

            <a
              href="#contact"
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 text-slate-300 hover:text-white font-semibold px-6 py-3.5 border-b border-transparent hover:border-blue-500/50 transition-all duration-300 text-sm"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </motion.div>

        </div>

        {/* Right: Simulated Terminal Card */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5 flex flex-col h-[350px] sm:h-[400px] backdrop-blur-sm"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2">bash ~ portfolio-intel</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500/70 animate-pulse" />
            </div>

            {/* Terminal Tab Selectors */}
            <div className="flex bg-slate-950/40 border-b border-slate-800/50 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-mono transition-all border-r border-slate-800 whitespace-nowrap ${activeTab === tab.id
                      ? "bg-slate-900 text-blue-400 font-semibold border-b-2 border-b-blue-500"
                      : "text-slate-500 hover:bg-slate-800/30 hover:text-slate-300"
                    }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Terminal Content Box */}
            <div className="flex-1 p-4 sm:p-5 font-mono text-[10px] sm:text-xs text-slate-300 overflow-y-auto leading-relaxed flex flex-col justify-start align-baseline bg-slate-950/20">

              {/* Active Command Input line */}
              <div className="flex items-start gap-2 text-slate-400 mb-3">
                <span className="text-blue-500 font-bold">~</span>
                <span className="text-green-500 font-semibold">$</span>
                <span className="text-slate-100 flex-1 whitespace-pre-wrap select-all">{activeTabData.command}</span>
              </div>

              {/* Running Output lines */}
              <div className="space-y-1.5 flex-1">
                {typedLines.map((line, idx) => {
                  let textStyle = "text-slate-300";
                  if (line.includes("🚀") || line.includes("📱") || line.includes("📈") || line.includes("[SUCCESS]")) {
                    textStyle = "text-green-400 font-semibold mt-2";
                  } else if (line.includes("[iOS]") || line.includes("[Android]")) {
                    textStyle = "text-blue-400";
                  } else if (line.includes("Uploading") || line.includes("Deploying")) {
                    textStyle = "text-yellow-400/90";
                  }
                  return (
                    <div key={idx} className={`${textStyle} whitespace-pre-wrap`}>
                      {line}
                    </div>
                  );
                })}

                {/* Blinking typing cursor indicator */}
                {currentLineIndex < activeTabData.lines.length ? (
                  <div className="inline-flex items-center gap-1.5 text-slate-500 italic mt-1 font-sans">
                    <span className="w-1.5 h-3 bg-slate-400 animate-pulse inline-block" />
                    <span className="text-[10px]">running workflow...</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                    <span className="text-blue-500 font-bold">~</span>
                    <span className="text-green-500 font-semibold">$</span>
                    <span className="w-1.5 h-3 bg-slate-300 animate-pulse mt-0.5 inline-block" />
                  </div>
                )}
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
