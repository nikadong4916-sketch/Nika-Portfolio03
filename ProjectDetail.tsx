import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center text-white">
      Project not found. <Link to="/" className="ml-2 underline text-brand-purple">Go back</Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-16"
    >
      {/* Header */}
      <header className="space-y-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="glass p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                Year
              </span>
              <span className="font-mono text-white tracking-widest">{project.year}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-500">
                <Tag className="w-4 h-4" />
                Role
              </span>
              <span className="text-white">Lead Design</span>
            </div>
            
            <button className="w-full py-4 rounded-xl glass glass-hover flex items-center justify-center gap-2 text-white font-medium group">
              View Case Study
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl overflow-hidden glass border-white/5"
      >
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full aspect-[21/9] object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Gallery */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white border-l-2 border-brand-purple pl-4">
          Gallery & Process
        </h2>
        
        <div className="flex flex-col gap-6">
          {project.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="rounded-xl overflow-hidden glass border-white/5 group aspect-[16/9]"
            >
              <img 
                src={img} 
                alt={`${project.title} screenshot ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion / Next Project */}
      <footer className="py-20 border-t border-white/5 text-center space-y-8">
        <p className="text-gray-500 uppercase tracking-widest text-xs">Ready for more?</p>
        <Link 
          to="/" 
          className="text-4xl md:text-6xl font-semibold text-white hover:text-brand-purple transition-colors tracking-tighter"
        >
          View all projects
        </Link>
      </footer>
    </motion.div>
  );
}
