"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const channels = [
    {
      name: "Email",
      label: "Send Email",
      href: "mailto:brajeshrajput612@gmail.com",
      icon: <Mail className="text-blue-400" size={24} />,
      bgColor: "bg-blue-500/10 hover:bg-blue-500/15 border-blue-500/20"
    },
    {
      name: "LinkedIn",
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/brijesh-rajput-595425261/",
      icon: (
        <svg className="w-6 h-6 fill-cyan-400" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      bgColor: "bg-cyan-500/10 hover:bg-cyan-500/15 border-cyan-500/20"
    },
    {
      name: "GitHub",
      label: "Follow on GitHub",
      href: "https://github.com/rgcbrajesh",
      icon: (
        <svg className="w-6 h-6 fill-slate-300" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      bgColor: "bg-slate-500/10 hover:bg-slate-500/15 border-slate-500/20"
    },
    {
      name: "WhatsApp",
      label: "Message on WhatsApp",
      href: "https://wa.me/916268027181",
      icon: (
        <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.484 1.897 14.008 1.002 11.4 1.002C5.962 1.002 1.54 5.42 1.536 10.86c-.001 1.733.456 3.424 1.322 4.93L1.848 20.25l4.799-1.268c1.5.82 3.176 1.25 4.896 1.25 0 .001 0 0 0 0zm8.859-7.069c-.273-.137-1.62-.8-1.872-.892-.254-.094-.44-.137-.625.137-.184.274-.712.892-.871 1.076-.16.184-.32.206-.593.069-.273-.137-1.155-.425-2.2-1.359-.812-.724-1.36-1.62-1.52-1.893-.16-.273-.017-.42.12-.556.124-.122.274-.32.411-.48.137-.16.183-.273.274-.456.09-.183.046-.342-.023-.48-.069-.137-.624-1.506-.856-2.062-.225-.54-.473-.466-.624-.474-.162-.008-.348-.01-.533-.01-.185 0-.486.07-.741.348-.255.273-1.02.997-1.02 2.433 0 1.437 1.045 2.825 1.19 3.016.145.19 2.057 3.14 4.98 4.407.696.302 1.24.482 1.662.617.7.223 1.338.192 1.843.117.563-.084 1.62-.663 1.85-1.277.23-.614.23-1.139.162-1.277-.07-.137-.254-.22-.527-.357z" />
        </svg>
      ),
      bgColor: "bg-emerald-500/10 hover:bg-emerald-500/15 border-emerald-500/20"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#0F172A] border-t border-slate-900 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
              Get in touch
            </span>
            <span className="h-[2px] w-6 bg-blue-500 rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Let’s Build Something Great
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
            I’m open to remote opportunities, product engineering roles, and startup collaborations focused on scalable web and mobile applications. Connect with me directly on any of these channels.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center text-center p-5 sm:p-8 border rounded-3xl transition-all duration-300 ${channel.bgColor} group relative overflow-hidden bg-slate-900/40 border-slate-800 shadow-xl`}
            >
              {/* Background hover light effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl group-hover:scale-110 transition-all duration-300 mb-4 shrink-0 shadow-md">
                {channel.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {channel.name}
              </h3>
              
              <div className="mt-4 px-4 py-2.5 bg-slate-950/80 hover:bg-slate-900 border border-slate-850 group-hover:border-slate-700 rounded-xl text-xs font-semibold text-slate-300 group-hover:text-white transition-all shadow-inner w-full flex items-center justify-center gap-2 font-mono">
                <span>{channel.label}</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
