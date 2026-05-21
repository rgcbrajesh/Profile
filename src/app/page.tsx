import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Intro from "@/components/Intro";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EngineeringHighlights from "@/components/EngineeringHighlights";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic Header Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Short Summary Highlights */}
        <Stats />

        {/* Biography Section */}
        <Intro />

        {/* Specialized Skills / Tech stack */}
        <TechStack />

        {/* Detailed Projects Panels */}
        <Projects />

        {/* Job Timeline Experience */}
        <Experience />

        {/* Key Engineering Accomplishments */}
        <EngineeringHighlights />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Footer Taglines */}
      <Footer />
    </>
  );
}
