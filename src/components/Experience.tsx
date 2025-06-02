
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Marketing Officer of the Data Science Student’s Society",
      company: "The University of Melbourne",
      location: "Melbourne, Victoria, Australia",
      period: "March 2025 - Present",
      description: "Curated and managed the club’s digital presence across Instagram and LinkedIn, growing engagement by 50% through data-driven content planning and branding consistency; Collaborated with Events and Tech teams to promote 5 workshops and speaker panels, enhancing cross-functional, coordination and community reach within the data science space",
    },
    {
      title: "Patient Service Associate",
      company: "National University Hospital",
      location: "Singapore, Singapore",
      period: "January 2024 - May 2024",
      description: [
        "Managed patient inquiries and appointment scheduling, improving patient satisfaction by 30% through effective communication and problem-solving.",
        "Assisted in the implementation of a new electronic health record system, reducing patient wait times by 20%.",
        "Trained new staff on patient service protocols and electronic systems, enhancing team efficiency and service quality."
      ],
    },
    {
      title: "Executive Committee Member – Head of the Co-Curricular Activities (CCA) Subcommittee",
      company: "Anglo-Chinese Junior College",
      location: "Singapore, Singapore",
      period: "June 2022 – August 2023",
      description: [
        "Led the 2023 AC Games Ad-Hoc for 700+ students by directing a team of 10 council members to ensure seamless planning and execution, increasing community engagement.",
        "Spearheaded the 2023 National School Games cheering season by coordinating communication among 50+ CCA leaders and schoolmates, enhancing collaboration and stakeholder management.",
        "Designed and executed large-scale programmes as part of the Orientation 2024 Planning Committee, streamlining logistics and applying innovative thinking to create impactful experiences for 700+ participants.",
        "Mentored over 30 juniors in the 48th Students' Council, providing structured guidance, facilitating leadership training, and ensuring a smooth handover of responsibilities.",
        "Served as Head of the Executive Committee Member of the CCA Advisory Board, contributing to strategic planning and inter-CCA engagement.",
        "Hosted and coordinated 'CCA Updates, liaising with 20+ other leaders to execute the programme, enhancing public, speaking and event management skills.",
      ]
    },
    {
      title: "Customer Service Associate (Full-Time during holidays)",
      company: "Kith Cafe",
      location: "Singapore, Singapore",
      period: "October 2021 - December 2022",
      description: 
        [
          "Delivered exceptional customer service in a fast-paced environment, handling up to 100+ customers daily and maintaining a positive dining experience.",
          "Managed cash transactions and processed payments accurately, ensuring financial integrity and customer satisfaction.",
          "Collaborated with kitchen staff to ensure timely food preparation and delivery, enhancing operational efficiency."
        ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and achievements</p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-4">{exp.company}</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                 
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
