import Project from "@/app/models/project";
import ProjectCard from "./ProjectCard";

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
    return (
      <section className="py-4 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }