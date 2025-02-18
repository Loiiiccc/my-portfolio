"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <motion.nav initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            MyPortfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-gray-700 dark:text-gray-300 text-lg font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

            {/* Theme Toggle */}
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <Button
            variant="default"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link,index) => (
              <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-800 dark:text-gray-300 text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}


// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const toggleNav = () => setNav(!nav);

//   const closeNav = () => setNav(false);

//   const menuVariants = {
//     open: {
//       x: 0,
//       transition: {
//           stiffness:20,
//           damping:15
//       },
//     //   display: "block",
//     //   transition: {
//     //     staggerChildren: 0.07,
//     //     delayChildren: 0.2,
//     //   },
//     },
//     closed: {
//       x: "-100%",
//       transition: {
//           stiffness:20,
//           damping:15
//       },
//     //   display: "none",
//     //   transition: {
//     //     staggerChildren: 0.05,
//     //     staggerDirection: -1,
//     //   },
//     },
//   };

//   return (
//     <div className="text-white/70 pt-6">
//       <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
//         <ul className="flex flex-row p-8 space-x-8">
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <Link href={link.href}>
//                 <p>{link.name}</p>
//               </Link>
//             </li>
//           ))}

//           <li>
//             <a href="#contact" className=" relative">
//               <h1 className="text-lg font text-white/70 cursor-pointer">
//                 Contact
//               </h1>
//               {/* <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> */}
//               <div className="relative group">
//                 <div className="absolute w-2/3 h1 transition-all duration-300 ease-out bg-orange-300 rounded-full group-hover:w-full"></div>

//                 <div
//                   className="mt-1 absolute w-1
//                                 /3 h1 transition-all duration-300 ease-out bg-orange-500 rounded-full group-hover:w-full"
//                 ></div>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div
//         onClick={toggleNav}
//         className="md:hidden flex items-center justify-end px-4 py-2"
//       >
//         {nav ? <X size={24} /> : <Menu size={24} />}
//       </div>

//       <motion.div
//         initial={false}
//         animate={nav ? 'open' : 'closed'}
//         variants={menuVariants}
//         className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50"
//       >
//         <ul className="text-3xl font-bold my-24 text-center space-y-8">
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <Link href={link.href} onClick={closeNav}>
//                 <p>{link.name}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

// export default Navbar;
