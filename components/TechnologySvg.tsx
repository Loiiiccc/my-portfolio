import React from "react";
import { TechsData } from "../app/data";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechnologySvg() {
  const { scrollYProgress } = useScroll(); // Récupère la position du scroll
  
  return (
    <div className="top-0  sticky h-[200vh] sm:mt-0 items-center justify-center text-3xl md:text-5xl font-bold border space-y-12">
      {TechsData.map((tech, index) => {
        const opacity = useTransform(scrollYProgress, [0, 0.3 * (index + 1), 0.5 * (index + 1)], [0, 1, 0]);
        const scale = useTransform(scrollYProgress, [0, 0.3 * (index + 1), 0.5 * (index + 1)], [0.8, 1, 0.8]);

const parallaxY = useTransform(
  scrollYProgress,
  [0, 1],
  [0, -200 * (index + 1)]);

        return (
          <div key={index} className=" h-screen flex items-center justify-center ">
          <motion.div
            style={{ opacity, scale }} // Applique le Parallax
            className=" top-1/2 -translate-y-1/2  flex flex-col  origin-top  w-auto p-[25px] border-indigo-500 rounded-xl bg-gradient-to-tr from-indigo-600  to-purple-50 dark:bg-gradient-to-t dark:from-[#000] dark:to-[#080808e5] "
          >
            <h2 className="text-center pt-10 font-bold">{tech.name}</h2>
            <Separator className="my-4" />
            <div className="flex flex-wrap justify-center items-center mx-8 my-8 p-4 gap-6 md:gap-50">
              {tech.LanguagesTechs.map((tech, i) => (
                <div
                  key={i}
                  className="basis-32 justify-items-center items-center mt-8 px-8 py-4"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64}
                    height={64}

                  />
                </div>))}
            </div>
            
          </motion.div>
          </div>)})}
        
    </div>
  );
}
