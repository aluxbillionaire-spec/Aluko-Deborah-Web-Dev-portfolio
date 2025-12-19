
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Cavidel Ltd.',
      location: 'Lagos, Nigeria (Hybrid)',
      period: 'March 2025 – September 2025',
      points: [
        'Developed and improved multiple web applications under direct supervision, handling real-world responsibilities.',
        'Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript to enhance accessibility.',
        'Designed backend systems using PHP, MySQL, and Laravel, focusing on database communication and form security.',
        'Structured content and page layouts to significantly enhance readability and visual clarity for end-users.',
        'Documented technical work clearly for supervisors, mimicking professional client reporting standards.',
      ],
    },
    {
      title: 'Final Year Student (MIS)',
      company: 'Covenant University',
      location: 'Ota, Nigeria',
      period: 'Present',
      points: [
        'Focusing on Software Engineering, Internet Programming, and Digital Systems Management.',
        'Leading collaborative projects involving project management and system design for e-commerce.',
        'Applying theoretical digital strategy frameworks to real-world social impact scenarios.',
      ],
    },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-slate-500">My journey of professional growth and technical application.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-sm"></div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold mt-1">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 gap-1 md:items-end">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
