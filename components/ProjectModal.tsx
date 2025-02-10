import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Project from "@/app/models/project";
import { useRef } from "react";

interface ProjectModalProps {
  //+
  project: Project; //+
  onClose: () => void; //+
  onNext: () => void; //+
  onPrev: () => void; //+
}
export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
}: ProjectModalProps) {
    const modalRef =  useRef<HTMLDivElement>(null); 
    const handleClickOutside = (e) => {
      if (modalRef.current === e.target) {
        onClose();
      }
    };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={handleClickOutside} ref={modalRef}>
      <div ref={modalRef} className="bg-gray-900/90 rounded-xl max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-8 h-10/12" onClick={(e)=> e.stopPropagation}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-primary-100">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="text-primary-50 p-2 hover:text-primary-400 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <X />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg> */}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <p className="text-gray-300">{project.fullDescription}</p>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Tech Stack : </h3>
              <ul className="list-disc list-inside pl-6">
                {project.techStacks.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-64 w-full md:w-1/2 md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* div for arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
            <button onClick={onPrev} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[100%]">
<ChevronLeft />
            </button>
            <button onClick={onNext} className="bg-gray-800/50  rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[60%]">
<ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
