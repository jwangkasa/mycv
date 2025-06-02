
import React from 'react';
import { Camera } from 'lucide-react';

const PhotoGallery = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      caption: "Team collaboration at TechCorp"
    },
    {
      url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      caption: "Speaking at Tech Conference 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      caption: "Working on exciting projects"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      caption: "Team building event"
    },
    {
      url: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
      caption: "Hackathon winner 2022"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      caption: "Professional headshot"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Photo Gallery</h2>
          </div>
          <p className="text-xl text-gray-600">Moments from my professional journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
