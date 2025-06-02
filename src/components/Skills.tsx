
import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "React", level: 70 },
        { name: "TypeScript", level: 70 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="text-green-600" size={24} />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-purple-600" size={24} />,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Office 365", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
