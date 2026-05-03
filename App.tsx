import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import Navbar from "./Navbar";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-hidden selection:text-white">
        {/* Ambient Glows */}
        <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] glow-purple blur-[100px] pointer-events-none z-0" />
        <div className="fixed top-[40%] -right-[10%] w-[50%] h-[50%] glow-blue blur-[100px] pointer-events-none z-0" />
        <div className="fixed -bottom-[10%] left-[20%] w-[40%] h-[40%] glow-pink blur-[100px] pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-6 max-w-5xl py-12">
            <AnimatedRoutes />
          </main>
          
          <footer className="py-24 text-center opacity-30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Alex Sterling • Crafted with Zen
          </footer>
        </div>
      </div>
    </Router>
  );
}
