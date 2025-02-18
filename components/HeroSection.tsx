
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroSection(){
    return(
        
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="top-0 left-0 px-16 pt-24 w-full h-screen "
        // className=" flex flex-col justify-center items-center text-center min-h-screen px-6"
      >
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600  bg-clip-text text-transparent">
            Loic Ayassou
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 ">
          I'm a software engineer with 5 years of experience in web development.
          I have a strong background in web development and have worked with
          various technologies and frameworks.
        </p>


        <div className="flex mt-8 gap-4">
          <button className="px-8 py-3 rounded-full border-2 border-primary bg-primary text-white font-bold hover:bg-primary-800">
            About Me
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-solid hover:border-primary text-white hover:text-primary font-bold cursor-pointer">
            Contact Me
          </button>
        </div>

        {/* <div className="mt-6 space-x-4">
          <Link href="/projects">
            <Button className="px-6 py-3 text-lg">View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="px-6 py-3 text-lg">
              Contact Me
            </Button>
          </Link>
        </div> */}
      </motion.div>
    )
}