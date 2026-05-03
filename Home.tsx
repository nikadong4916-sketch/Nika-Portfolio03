import { motion } from "motion/react";
import { projects, personalInfo } from "../data";
import ProjectCard from "../components/ProjectCard";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24"
    >
      {/* 1. 个人介绍 (About Me) */}
      <section id="about" className="pt-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-purple/20 text-brand-purple text-xs font-medium tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[1.1]">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-pink">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-xl text-gray-400 font-light leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {personalInfo.skills.map((skill) => (
                <span key={skill} className="glass px-4 py-2 rounded-full text-xs text-gray-400 border-white/5 whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 blur-3xl bg-brand-purple/20 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 blur-3xl bg-brand-blue/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. 项目 (Work/Projects) */}
      <section id="projects" className="space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Selected Works</h2>
            <p className="text-gray-400 max-w-md font-light">
              Explore my latest projects where design meets technology to create meaningful experiences.
            </p>
          </div>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            {projects.length} Projects • 2025 - 2026
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. 联系我 (Contact) */}
      <section id="contact" className="py-10 border-t border-white/5 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">Let's Connect</h2>
          <p className="text-gray-400 font-light max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href={`mailto:${personalInfo.social.email}`} className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all text-center">
            <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="text-white font-medium mb-2">Email</h3>
            <p className="text-gray-500 text-sm truncate">{personalInfo.social.email}</p>
          </a>

          <div className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all text-center">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-white font-medium mb-2">WeChat</h3>
            <p className="text-gray-500 text-sm">{personalInfo.social.wechat}</p>
          </div>

          <a href={`tel:${personalInfo.social.phone}`} className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all text-center">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-brand-pink" />
            </div>
            <h3 className="text-white font-medium mb-2">Phone</h3>
            <p className="text-gray-500 text-sm">{personalInfo.social.phone}</p>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
