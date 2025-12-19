
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-2xl font-bold font-heading text-indigo-600 tracking-tight">AID.</span>
            <p className="mt-2 text-slate-500 text-sm max-w-xs">
              Web Developer & Digital Strategy Enthusiast driven by social impact.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Navigation</span>
              <a href="#home" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#about" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">About</a>
              <a href="#portfolio" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Projects</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Resources</span>
              <a href="#" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Resume</a>
              <a href="#contact" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            &copy; {currentYear} Aluko Ifeoluwa Deborah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline decoration-slate-200">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline decoration-slate-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
