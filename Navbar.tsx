import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-6 px-6 container mx-auto max-w-5xl">
      <div className="glass px-6 py-3 rounded-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-tight text-white">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center">
            <span className="text-white text-sm font-bold">N</span>
          </div>
          <span>Nika Portfolio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">个人介绍</a>
          <a href="#projects" className="hover:text-white transition-colors">项目</a>
          <a href="#contact" className="hover:text-white transition-colors">联系我</a>
        </div>

        <button className="text-sm font-medium px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all">
          Resume
        </button>
      </div>
    </nav>
  );
}
