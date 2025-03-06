"use client"
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import Project from "../app/models/project";
import gsap from 'gsap';
const ProjectSection = () => {
  
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

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if(currentIndex === - 1) {
      return null;}

    const nextIndex = (currentIndex + 1) % projects.length; //% to return de selection on first if it reaches the end
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePreviousProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);
    if(currentIndex === - 1) {
      return null;}
      
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length; //% to return last selection on last if it reaches the start
    setSelectedProject(projects[previousIndex].id);
  }

  useEffect(() => {
    gsap.from('.project-item', { opacity: 0, y: 50, stagger: 0.2 });
  }, []);


  return (
    <section id="projects"  className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6  bg-white dark:bg-gray-900">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <button onClick={() => handleProjectClick(project.id)  }
            key={index}
            className=" hover:scale-105  group bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-primary-500 transition-colors hover:shadow-sm text-left"
          >
            <div className=" flex flex-col h-full">
              <h3 className=" text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500">{project.title}</h3>
              <div className=" flex flex-wrap gap-1 mt-auto ">
                {
                  project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-900 border border-primary-500/30 dark:border-primary-500/30 dark:text-primary-200">
{tag}
                    </span>
                  ))
                }
              </div>
            </div>
          </button>
        ))}
      </div>

      {
        selectedProject && (
          <ProjectModal project={projects.find((project) => project.id === selectedProject)} onClose={handleCloseModal} onNext={handleNextProject} onPrev={handlePreviousProject}/>)
}

    </section>
  );
};

export default ProjectSection;
