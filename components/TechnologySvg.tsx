import React from "react";
import { TechsData } from "../app/data";

export default function TechnologySvg() {
  return (
    <div className="sticky top-0 h-screen sm:mt-0 flex items-center justify-center text-3xl md:text-5xl font-bold">
      {TechsData.map((tech, index) => (
        <div
          key={index}
          className="relative flex flex-col h-auto md:h-[500px] top-0 md:top-[-10%] sm:top-[-5%] w-full md:w-[1000px] border-1 border-indigo-500 rounded-xl bg-gradient-to-tr from-indigo-600  to-purple-50 dark:bg-gradient-to-t dark:from-[#000] dark:to-[#131417] p-[50px] md:p-[50px]"
        >
          <h2 className="text-center m-0 font-bold">{tech.name}</h2>
          {/* Boucle sur les collections dynamiquement */}
          {Object.entries(tech).map(([key, value]) => {
            // Exclure les propriétés qui ne sont pas des collections
            if (Array.isArray(value)) {
              return (
                <div
                  key={key}
                  className="flex flex-col h-full mt-4 md:mt-0 gap-4 md:gap-50"
                >
                  <div className="flex flex-col h-full mt-4 md:mt-0 gap-4 md:gap-50">
                    <ul className="list-disc pl-4">
                      {value.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
