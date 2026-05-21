"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0b111e] border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-6">

        {/* Logo element */}
        <div className="text-lg font-bold tracking-tight text-[#F8FAFC]">
          Brijesh<span className="text-[#2563EB] font-extrabold">.</span>RAJPUT
        </div>

        {/* Tagline */}
        <p className="text-sm text-slate-400 max-w-md leading-relaxed font-medium">
          Building scalable products, automation systems and mobile experiences for modern businesses.
        </p>

        {/* Action: Scroll to Top */}
        <button
          onClick={handleScrollTop}
          className="flex items-center justify-center p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-full text-slate-400 hover:text-white transition-all shadow-md group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Copyright section */}
        <div className="w-full border-t border-slate-900/60 pt-6 mt-2">
          <p className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Brijesh Rajput. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
