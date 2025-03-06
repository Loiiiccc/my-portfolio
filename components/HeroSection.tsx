import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#fff] dark:bg-[#000] w-full min-h-screen flex flex-col justify-center display-flex relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" h-w-100 max-w-89.5rem mx-auto px-2.5rem"
      >
        <div className="relative mx-auto flex flex-col justify-end items-start w-100 ">
          <h1
            className=" mb-8 mt-12 inline-block text-7xl font-semibold line-height-100%
            "
          >
            Hi, I'm{" "}
            <span
              className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text"
            >
              Loïc Ayassou
            </span>
          </h1>
          <div className="mt-0 font-semibold text-lg text-[#000] dark:text-[#fff]">
            <p>
              a graduate in computer science and software engineering in
              full-stack development with a strong focus on backend
              technologies. My expertise includes working with stacks like
              FARM/P, ASP.NET, MERN. I have professional experience in C#
              (ASP.NET Core 8), PERN stack and basic Bash scripting.
              Additionally, I have some foundational academic experience in C
              and Java. When it comes to databases, SQL is my jam, and I prefer
              it over NoSQL options.
            </p>
            <p>
              I love designing, developing, and deploying apps from start to
              finish. Whether it's creating something new or tweaking an
              existing project, I'm always up for it! When I'm not coding,
              you'll find me locked into Animes or First Person Shooter Games.
            </p>
            <p>
              If it's about solving problems and building cool stuff, I'm ready
              to jump in and get started!
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8 gap-4">
            
            <Link href="/contact">
                <Button className="px-12 py-7 rounded-full border-1 text-center bg-indigo-600 hover:bg-purple-600">Let's create something great together! 
                <ArrowRight size={48} strokeWidth={3} /></Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
    //   <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6">

    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.8 }}
    //   className=" p-8 bg-white dark:bg-[#000]"
    // >

    //   <h1 className="text-start text-7xl font-extrabold text-gray-900 dark:text-white tracking-light">
    //     Hi, I'm{" "}
    //     <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600  bg-clip-text text-transparent">
    //       Loic Ayassou
    //     </span>
    //   </h1>
    //   <p className="mt-4 text-lg  text-gray-600 text-wrap dark:text-gray-300 ">
    //     I'm a software engineer with 5 years of experience in web development.
    //     I have a strong background in web development and have worked with
    //     various technologies and frameworks.
    //   </p>

    //   <div className="flex mt-8 gap-4">
    //     <button className="px-8 py-3 rounded-full border-2 border-primary bg-primary text-white font-bold hover:bg-primary-800">
    //       About Me
    //     </button>
    //     <button className="px-8 py-3 rounded-full border-2 border-solid border-gray-900 hover:border-primary  hover:text-primary font-bold  text-gray-900 dark:text-white cursor-pointer">
    //       Contact Me
    //     </button>
    //   </div>

    // </motion.div>
    //   </section>
  );
}
