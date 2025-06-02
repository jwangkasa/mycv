
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import CarmenPhoto from '../assets/carmen.jpg';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">@CAW</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="mailto:carmenangelique.wong@student.unimelb.edu.au" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/carmen-angelique-wong" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/carmenwong150/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
