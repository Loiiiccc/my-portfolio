import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import Project from "@/app/models/project";
import Image from "next/image";




export default function ProjectCard( project: Project) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogTrigger asChild>
                <motion.div whileHover={{scale:1.05}} transition={{duration: 0.3}}>
                    <Card className="cursor-pointer">
                        <CardContent className="p-4">
                            <Image src={project.image} alt={project.title} width={400} height={250} className="rounded-lg object-cover w-full"/>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                        </CardContent>
                        
                    </Card>
                </motion.div>
            </DialogTrigger>

<DialogContent className="max-w-lg">
    <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
    </DialogHeader>
    
    <Image src={project.image} alt={project.title} width={600} height={350} className="rounded-lg object-cover w-full" />
        <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStacks.map((tech) => (
            <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm">
              {tech}
            </span>
          ))}
        </div>
      </DialogContent>

        </Dialog>
    )
}