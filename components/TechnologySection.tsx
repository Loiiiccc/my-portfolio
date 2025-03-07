"use client";
import {TechsData } from "../app/data";
import TechnologyCard from "./TechnologyCard";
import TechnologySvg from "./TechnologySvg";

export default function TechnologySection() {
  
  return (
    <section className="bg-[#fff] dark:bg-[#000] min-h-screen py-16 sm:h-[50vh] px-4 sm:px-6  lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Technologies 🚀
        </h2>
        <p className="text-base sm:text-lg text-center text-[#000] dark:text-[#fff] mb-12">
          I have experience working with a range of technologies, including:
        </p>
        <div className="mt-20 md:mt-[50vh] mb-20 md:mb-[100vh] relative">
          <TechnologySvg />
        </div>
      </div>
    </section>

    //     <section
    //         className="bg-[#fff] dark:bg-[#000] h-auto md:h-[100vh]"
    //     >

    //         <div className="sticky top-0  h-auto flex flex-col items-center justify-center text-3xl md:text-5xl font-bold">
    //             Technologies 🚀
    //             <p className="mt-4 text-base md:text-lg text-[#000] dark:text-[#fff]">
    //                 I have experience working with a range of technologies, including:
    //             </p>
    //             <div className="mt-20 md:mt-[50vh] mb-20 md:mb-[100vh] relative">
    //                 {Techs.map((tech,index) => { return <TechnologyCard name={tech.name} description={tech.Descriptions} key={index} {...tech} />})

    //                 }
    //             </div>
    //         <div>
    //         </div>
    //         </div>
    //     </section>
  );
}

{
  /*<div key={tech.id} className="w-[200px] h-[200px] bg-[#fff] dark:bg-[#000] rounded-lg overflow-hidden">
                            
                             <img src={tech.image} alt={tech.name} />
                            <h3 className="mt-4 text-lg text-[#000] dark:text-[#fff]">{tech.name}</h3> 
                        </div>*/
}
