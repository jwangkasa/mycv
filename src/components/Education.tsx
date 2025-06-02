
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Science (In-Progress)",
      school: "Melbourne University, Victoria, Australia",
      year: "2025 - 2027",
      gpa: "NaN",
      description: "Focused on data science, machine learning, algorithms, and data structures as well as minor in Finance."
    },
    {
      degree: "Diploma",
      school: "Trinity College, Melbourne, Australia",
      year: "2024",
      gpa: "Graduate with High Distinction (97/100)",
      description: "June Fast Track Foundation Programme, 2024."
    },
    {
      degree: "GCE A Levels",
      school: "Anglo-Chinese Junior College",
      year: "2022 - 2023",
    }
  ];

  const certifications = [
    "MOE Edusave Award for Achievement, Good Leadership and Service - 2023 Awardee",
    "Anglo-Chinese Junior College Outstanding Service Award - 2023 Awardee",
    "Singapore Schools Sports Council Award - 2022 Awardee",
    "Mother St. Gaetan Award for Outstanding Performance - 2021 Awardee",
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Awards</h2>
          <p className="text-xl text-gray-600">My academic background and Awards</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <h5 className="text-lg text-blue-600 font-semibold mb-2">{edu.school}</h5>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">{edu.year}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Award className="text-blue-600" />
              Awards
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
