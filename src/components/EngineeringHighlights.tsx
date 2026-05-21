"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Smartphone, Binary, CreditCard, Network } from "lucide-react";

interface Highlight {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  borderGlow: string;
}

export default function EngineeringHighlights() {
  const highlights: Highlight[] = [
    {
      id: 1,
      title: "React Migration Experience",
      desc: "Migrated legacy frontend setups to modern frameworks, ensuring better code splitting, React server layouts, and lower JS bundles.",
      icon: <Cpu className="text-blue-500" size={20} />,
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "AWS Deployment Management",
      desc: "Managed active production clouds using Amazon EC2 servers, S3 asset buckets, CloudFront CDN edge distributions, and Route53 DNS rules.",
      icon: <Server className="text-emerald-500" size={20} />,
      borderGlow: "group-hover:border-emerald-500/50"
    },
    {
      id: 3,
      title: "Mobile App Publishing",
      desc: "Coordinated distribution pipelines for both Android (Google Play Store) and iOS (Apple App Store Connect, TestFlight builds).",
      icon: <Smartphone className="text-indigo-500" size={20} />,
      borderGlow: "group-hover:border-indigo-500/50"
    },
    {
      id: 4,
      title: "Automation Engineering",
      desc: "Created developer tooling (VS Code Extensions), content schedulers, and synchronization scripts leveraging standard APIs.",
      icon: <Binary className="text-amber-500" size={20} />,
      borderGlow: "group-hover:border-amber-500/50"
    },
    {
      id: 5,
      title: "Payment Gateway Integration",
      desc: "Integrated custom Razorpay checkout setups, handling transaction verification, webhooks, and billing records.",
      icon: <CreditCard className="text-rose-500" size={20} />,
      borderGlow: "group-hover:border-rose-500/50"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Setup",
      desc: "Configured multi-domain setups, Nginx reverse proxies, SSL security renewals (Certbot), and PM2 cluster runs.",
      icon: <Network className="text-violet-500" size={20} />,
      borderGlow: "group-hover:border-violet-500/50"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0F172A] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
              Highlights
            </span>
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Engineering Milestones
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
            Technical milestones showcasing hands-on experience in full-stack architecture, deployment automation, and custom product releases.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((hl, index) => (
            <motion.div
              key={hl.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 ${hl.borderGlow} hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {hl.icon}
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
                  {hl.title}
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {hl.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
