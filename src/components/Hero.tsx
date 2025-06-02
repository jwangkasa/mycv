
import React from 'react';
import { Download, MapPin, Phone, Mail } from 'lucide-react';



const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Carmen Angelique Wong</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">Data Scientist (AI Engineer) Wannabe</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Team Leadership, Effective Communication, Adaptable, Able to Perform Under Pressure, Innovative Thinking, Strong Attention to Detail
              
              I am an undergraduate student at Melbourne University focusing on Data Science.
              I love turning complex problems into simple, beautiful, and intuitive solutions.

              I am eagers to enrich my knowledge and skills in the field of data science and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center">
                Contact Me
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} />
                <span>Melbourne, VC, Australia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={18} />
                <span>+61 - XXX XXX 070</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} />
                <span>carmenangelique.wong@student.unimelb.edu.au</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/carmen.png" 
                  alt="Carmen Angelique Wong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <span className="text-sm font-semibold">2+ Years Combined Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
