"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    // <div> for navbar add check if you will use it
    <div className="bg-white dark:bg-[#000] w-full max-w-5xl mx-auto px-6">
        
      <Navbar />
          
      <HeroSection />
      
      <TechnologySection />

    </div>
  );
}
