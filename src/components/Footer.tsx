
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Carmen Angelique Wong</h3>
            <p className="text-gray-300 mb-4">
              Data Scientist passionate about creating innovative solutions 
              and building an insight based on data, algorithms, and machine learning.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:carmenangelique.wong@student.unimelb.edu.au" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/carmen-angelique-wong" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/carmenwong150/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Carmen Angelique Wong © 2024
          </p>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
