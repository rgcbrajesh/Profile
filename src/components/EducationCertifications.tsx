"use client";

import React from "react";
import { GraduationCap, Award, MapPin, CheckCircle } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section className="relative py-20 bg-[#0F172A] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-blue-500 rounded" />
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
                Education
              </span>
            </div>

            <div className="relative border-l border-slate-800 pl-6 ml-3 space-y-8">
              
              {/* MCA Degree */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1 bg-slate-900 border border-slate-800 p-1.5 rounded-full text-blue-400">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                    Pursuing
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">
                    MCA (Master of Computer Applications)
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1.5 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-blue-500" />
                      Indore, Madhya Pradesh
                    </span>
                  </div>
                </div>
              </div>

              {/* BCA Degree */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1 bg-slate-900 border border-slate-800 p-1.5 rounded-full text-slate-500">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-slate-400 uppercase">
                    Completed
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">
                    BCA (Bachelor of Computer Applications)
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1.5 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-blue-500" />
                      Barkatullah University, Bhopal
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-blue-500 rounded" />
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono">
                Certifications
              </span>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-4 sm:p-8 shadow-lg flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400 shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  NASSCOM Certified Full Stack Developer
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Professional certification validating competencies in full-stack architecture, frontend design, database development, and cloud deployments.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold font-mono mt-4">
                  <CheckCircle size={14} />
                  <span>Verified Credentials</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
