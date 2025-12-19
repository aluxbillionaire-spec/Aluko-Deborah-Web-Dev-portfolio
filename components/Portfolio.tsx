
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Jewelry E-Commerce Website',
      description: 'A refined shopping experience with improved homepage layout and optimized media organization.',
      tools: ['Laravel', 'MySQL', 'Bootstrap 5', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&h=500&auto=format&fit=crop',
      demo: 'https://jewelry-store-cu.vercel.app',
      github: 'https://github.com/aluko-ifeoluwa/jewelry-ecommerce',
    },
    {
      title: 'Netflix-Styled Streaming UI',
      description: 'A modern UI focus on intuitive navigation and responsive layout mimicking a premium streaming service.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&h=500&auto=format&fit=crop',
      demo: 'https://netflix-clone-deborah.vercel.app',
      github: 'https://github.com/aluko-ifeoluwa/netflix-ui-clone',
    },
    {
      title: 'Pizza Ordering Application',
      description: 'Enhanced form usability and call-to-action clarity for a seamless food ordering flow.',
      tools: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&h=500&auto=format&fit=crop',
      demo: 'https://pizza-delivery-ife.vercel.app',
      github: 'https://github.com/aluko-ifeoluwa/pizza-ordering-app',
    },
    {
      title: 'Multi-Vendor Marketplace',
      description: 'A complex marketplace platform (Shoes) featuring role-based access control and donation-style flow.',
      tools: ['Laravel', 'Spatie Roles', 'MySQL', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&h=500&auto=format&fit=crop',
      demo: 'https://shoe-marketplace-beta.vercel.app',
      github: 'https://github.com/aluko-ifeoluwa/multi-vendor-platform',
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Project Showcase</h2>
            <p className="text-slate-500 text-lg">
              A collection of technical projects ranging from e-commerce solutions to intuitive user interfaces.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex items-center gap-2 text-indigo-600 font-medium px-4 py-2 bg-indigo-50 rounded-lg">
                <Layers className="h-5 w-5" />
                <span>4 Featured Projects</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Refined Color Overlay */}
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="h-6 w-6 text-indigo-600" />
                   </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg border border-slate-200 group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
