"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { TechsData } from "../app/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export default function TechnologyCard() {
  const { scrollYProgress } = useScroll(); // Récupère la position du scroll

  return (
    <div className=" items-center p-6 space-y-16 sticky top-0 h-screen sm:mt-0 justify-center text-3xl md:text-5xl font-bold">
      {TechsData.map((category, index) => {
        // Effet de Parallax : déplacement vertical en fonction du scroll
        const parallaxY = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -200 * (index + 1)]
        );

        <Separator className="my-4" />
        return (
          <motion.div
            key={category.id}
            style={{ y: parallaxY }} // Applique le Parallax
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className=" bg-gray-800 text-white shadow-lg   relative flex flex-col h-auto md:h-[500px] top-0 md:top-[-10%] sm:top-[-5%] w-full md:w-[1000px] border-1 border-indigo-500 rounded-xl bg-gradient-to-tr from-indigo-600  to-purple-50 dark:bg-gradient-to-t dark:from-[#000] dark:to-[#131417] p-[50px] md:p-[50px]"
          >
            <h2 className="text-center m-0 font-bold">{category.name}</h2>
            <Separator className="my-4" />
            <div className="flex flex-wrap justify-center mt-4 gap-6 md:gap-50">
              {category.LanguagesTechs.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: -i * 20 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="mt-8 p-2"
                >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={40}
                      height={40}
                    />
                    {/* <h3 className="text-lg font-semibold mt-2">{tech.name}</h3>
                    <p className="text-sm text-gray-300">{tech.description}</p> */}
                </motion.div> 
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
