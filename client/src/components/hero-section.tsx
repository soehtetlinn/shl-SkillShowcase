import { ChevronDown } from 'lucide-react';
import TypingAnimation from './typing-animation';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full opacity-5 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-600 rounded-full opacity-5 animate-float-delayed-2"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-slate-100">Soe Htet</span> 
            <span className="text-cyan-400">Linn</span>
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 h-8">
            <TypingAnimation 
              text="Senior Software Engineer & Odoo Expert"
              speed={100}
            />
          </div>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            6+ years of experience building innovative ERP solutions, integrations, and full-stack applications. 
            Specialized in Python, Odoo, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400 text-2xl" />
      </div>
    </section>
  );
}
