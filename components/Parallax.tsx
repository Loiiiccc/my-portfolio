"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll("[data-speed]");

    elements.forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed")) || 1;

      gsap.to(element, {
        y: () => window.innerHeight * speed * -1, // Déplace en fonction de la vitesse
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#000] text-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-5xl font-bold">
        🔥 Parallax Effect avec GSAP + Next.js 🚀
      </div>

      <div className="relative h-[150vh]">
        {/* Image avec effet de parallaxe */}
        <img
          src="/image.jpg"
          alt="Parallax Image"
          data-speed="0.3"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Texte qui bouge avec un autre speed */}
        <h2
          data-speed="0.5"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold"
        >
          Effet de Parallaxe 😍
        </h2>
      </div>
    </div>
  );
}