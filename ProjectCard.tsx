import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Project } from "../data";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/project/${project.id}`} className="group block">
        <div className="glass glass-hover rounded-[2rem] overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden relative">
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <span className="text-xs font-mono py-1 px-3 rounded-full border border-white/5 bg-white/5 text-gray-500 uppercase tracking-widest">
                {project.year}
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-brand-blue font-medium px-2 py-1 rounded border border-brand-blue/20 bg-brand-blue/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
