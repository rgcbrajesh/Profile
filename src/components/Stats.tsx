"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Smartphone, Cloud, UserCheck, Zap, RefreshCw } from "lucide-react";

interface StatItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      id: 1,
      title: "2.5+ Years Experience",
      description: "Proven history building production-grade web dashboards and user interfaces using React.",
      icon: <Briefcase className="text-blue-400" size={24} />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Android & iOS Deployment",
      description: "Hands-on experience deploying to Apple TestFlight and Google Play Console using React Native and Expo.",
      icon: <Smartphone className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "AWS Infrastructure",
      description: "Configured and maintained scalable hosting solutions using EC2, S3, CloudFront, Route53, and Nginx setups.",
      icon: <Cloud className="text-indigo-400" size={24} />,
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: 4,
      title: "Real Client Products",
      description: "Successfully built and deployed live consumer-facing portals, operational platforms, and management systems.",
      icon: <UserCheck className="text-amber-400" size={24} />,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 5,
      title: "Automation Systems",
      description: "Created creator-focused workflows and release tooling linking Google APIs, Node.js scripts, and VS Code extensions.",
      icon: <Zap className="text-violet-400" size={24} />,
      gradient: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      id: 6,
      title: "React Migration Expertise",
      description: "Refactored legacy React architectures into modern React frameworks for performance, scalability, and code cleanliness.",
      icon: <RefreshCw className="text-rose-400" size={24} />,
      gradient: "from-rose-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="relative py-12 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700/60 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-slate-900/50 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Background gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl -z-10`} />

              <div className="flex items-start gap-4">
                {/* Icon Wrapper */}
                <div className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {stat.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
