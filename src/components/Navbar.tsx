"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Who I Am", href: "#who-i-am" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link check based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let currentActive = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0F172A]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="group flex flex-col"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#F8FAFC]">
            Brijesh<span className="text-[#2563EB] group-hover:text-blue-400 transition-colors duration-300 font-extrabold">.</span>RAJPUT
          </span>
          <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1 group-hover:text-slate-300 transition-colors duration-300">
            Full Stack Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:text-white ${activeSection === link.href.substring(1)
                      ? "text-[#2563EB]"
                      : "text-slate-300"
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg border border-blue-500/30 hover:border-blue-400/50 shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
          >
            <FileText size={14} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-[#0F172A] border-l border-slate-800 shadow-2xl z-40 transform transition-transform duration-300 md:hidden flex flex-col p-8 pt-24 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-6 mb-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-medium block py-2 transition-all ${activeSection === link.href.substring(1)
                    ? "text-[#2563EB] pl-2 border-l-2 border-[#2563EB]"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg text-sm transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
        >
          <FileText size={16} />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </nav>
  );
}
