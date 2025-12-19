
import React from 'react';
import { BookOpen, Heart, Target, Star } from 'lucide-react';

const About: React.FC = () => {
  const traits = [
    {
      title: 'Self-Motivated',
      description: 'Driven to learn and excel independently, consistently seeking growth opportunities.',
      icon: <Target className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: 'Proactive',
      description: 'Anticipating needs and taking action before being asked, ensuring efficient workflows.',
      icon: <Star className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Problem Solver',
      description: 'Applying creative and analytical thinking to overcome complex technical challenges.',
      icon: <Heart className="h-6 w-6 text-red-500" />,
    },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a final-year student of <span className="font-semibold text-indigo-600">Management Information Systems</span> at 
                <span className="font-semibold"> Covenant University</span>. My journey in tech is fueled by a deep-seated 
                passion for web development, digital strategy, and the transformative power of nonprofit initiatives.
              </p>
              <p>
                Throughout my academic and professional experiences, I've cultivated a robust foundation in both frontend and backend 
                technologies, allowing me to build comprehensive, user-centric web solutions. I believe that technology 
                should serve a purpose beyond code—it should create impact and empower communities.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-500 italic">
                  "Blending MIS theory with practical full-stack implementation."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {traits.map((trait, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{trait.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{trait.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
