
import React from 'react';
import { Code, Server, Layout, PenTool, Search } from 'lucide-react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Bootstrap 5'],
      color: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      title: 'Backend & Data',
      icon: <Server className="h-6 w-6" />,
      skills: ['Laravel 12', 'PHP', 'MySQL', 'Spatie Roles'],
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
    {
      title: 'Platforms & Deployment',
      icon: <Layout className="h-6 w-6" />,
      skills: ['WordPress', 'Webflow', 'Vercel', 'Git/GitHub'],
      color: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      title: 'Design & UX',
      icon: <PenTool className="h-6 w-6" />,
      skills: ['Figma', 'Canva', 'UI/UX Fundamentals'],
      color: 'bg-pink-50 text-pink-700 border-pink-100',
    },
    {
      title: 'Digital Strategy',
      icon: <Search className="h-6 w-6" />,
      skills: ['SEO Basics', 'Analytics', 'Digital Storytelling'],
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A diverse toolkit built through academic rigor and hands-on internship experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300 ${group.color.split(' ')[0]}`}>
                <div className={group.color.split(' ')[1]}>{group.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
