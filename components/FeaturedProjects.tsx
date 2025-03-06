import Project from "@/app/models/project";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import gsap from 'gsap';

  const projects : Project[] = [
    {
      id:1,
      title: "Real Easte App",
      tags: ["NextJS", "TailwindCSS"],
      description: "This is a real estate app that allows users to search for properties, view details, and make bookings.",
      fullDescription: "This is a real estate app that allows users to search for properties, view details, and make bookings and other properties available to users and applications that require them.",
      image: "/real-estate.jpg",
      techStacks: ["NextJS", "TailwindCSS"],
    },
    {
      id:2,
      title: "MePark API",
      tags: ["API", ".Net", "Entity Framework"],
      description: "This is an API for a park management system.",
      fullDescription: "This is an API for a park management system that allows users to create, update, delete, and view parks, their slots, and their bookings.",
      image: "/park.png",
      techStacks: ["API", ".Net", "Entity Framework"],
    },
    {
      id:3,
      title: "Sanity App",
      tags: ["Sanity", "NextJS", "Headless CMS"],
      description: "This is a CMS for a blog platform.",
      fullDescription: "This is a CMS for a blog platform that allows users to create, update, delete, and view blog posts.",
      image: "/sanity.png",
      techStacks: ["Sanity", "NextJS", "CMS"],
    },
    {
      id:4,
      title: "Blog",
      tags: ["NextJS", "TailwindCSS"],
      description: "This is a blog platform.",
      fullDescription: "This is a blog platform that allows users to create, update, delete, and view blog posts. The front end is built with NextJS and the backend is built with Sanity. It also uses Tailwind CSS for styling.",
      image: "/blog.jpg",
      techStacks: ["NextJS", "TailwindCSS"],
    },
  ];

  export default function FeaturedProjects() {

    // GSAP animation on load
  useEffect(() => {
    gsap.from('.project-item', { opacity: 0, y: 50, stagger: 0.2 });
  }, []);


    return (

      <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="flex flex-wrap justify-center  mx-auto mt-6 box-border columns-1 gap-[1em] md:columns-2 lg:columns-3">
      {projects.map((project, index) => (
        <div
          className="project-item bg-white shadow-lg hover:scale-105 transition-transform cursor-pointer mb-2 break-inside-avoid rounded-lg bg-neutral-800/50 p-5 hover:bg-neutral-800/75">
            <ProjectCard key={index} {...project} />
</div>
         ))}
      </div>
</section>
      
      // <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6">
          
      //   <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      //     {projects.map((project, index) => (
      //       <ProjectCard key={index} {...project} />
      //     ))}
      //   </div>
      // </section>
    );
  }