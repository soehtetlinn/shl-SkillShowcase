import { useState, useEffect, useRef } from 'react';
import { Server, Code, Database } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiAmazon, SiDocker, SiGit } from 'react-icons/si';

interface SkillBarProps {
  label: string;
  percentage: number;
}

function SkillBar({ label, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, 500);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [percentage, isVisible]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bg-slate-600 rounded-full h-2">
        <div 
          className="bg-cyan-400 h-2 rounded-full transition-all duration-2000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { label: 'Python', percentage: 95 },
        { label: 'Odoo Framework', percentage: 90 },
        { label: 'Django', percentage: 85 },
        { label: 'Flask', percentage: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { label: 'JavaScript', percentage: 88 },
        { label: 'React', percentage: 82 },
        { label: 'TypeScript', percentage: 75 },
        { label: 'OWL Framework', percentage: 85 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { label: 'PostgreSQL', percentage: 90 },
        { label: 'AWS', percentage: 78 },
        { label: 'MySQL', percentage: 85 },
        { label: 'Digital Ocean', percentage: 80 }
      ]
    }
  ];

  const techStack = [
    { icon: SiPython, name: 'Python', color: 'text-yellow-400' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiReact, name: 'React', color: 'text-blue-400' },
    { icon: SiAmazon, name: 'AWS', color: 'text-orange-400' },
    { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: SiGit, name: 'Git', color: 'text-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <category.icon className="text-4xl text-cyan-400 mb-4 mx-auto" size={48} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    label={skill.label}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <tech.icon className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform mx-auto`} />
                <div className="mt-2 text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
