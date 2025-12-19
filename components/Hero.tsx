
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Available for Freelance & Internships
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Aluko Ifeoluwa <span className="text-indigo-600">Deborah</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl font-light">
              Web Developer & Digital Strategy Enthusiast
            </p>
            <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
              Focused on driving social impact through technology, website maintenance, 
              and digital storytelling for nonprofit initiatives.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all duration-200"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&auto=format&fit=crop"
                  alt="Aluko Ifeoluwa Deborah"
                  className="w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all"
                />
              </div>
              {/* Floating element for soft animation */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 animate-soft-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Currently</p>
                    <p className="text-sm text-slate-800 font-bold">Open to Roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
