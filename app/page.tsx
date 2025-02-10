import ProjectSection from "@/components/ProjectSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20sm:p-20 font-[family-name: var(--font-geist-sans)]">
      <div className="relative">
        {/* ///Background blur */}
<div className="opacity-15">
        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary opacity-50 rounded-full blur-3xl"/>
        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] bg-primary opacity-70 rounded-full blur-2xl"/>
        <div className="absolute top-6 right-6 sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] bg-primary opacity-90 rounded-full blur-xl"/>
        </div>
        <h1 className="text-4xl font-bold tracking-light">Hello Im 
          <span className="block text-primary"> Software Engineer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">I'm a software engineer with 5 years of experience in web development. I have a strong background in web development and have worked with various technologies and frameworks.</p>
        
        <div className="flex mt-8 gap-4">
          <button className="px-8 py-3 rounded-full border-2 border-primary bg-primary text-white font-bold hover:bg-primary-800">
            About Me
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-solid hover:border-primary text-white hover:text-primary font-bold cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
      <ProjectSection/>

    </div>
  );
}
