import React from 'react';
import hero from '../assets/phtos/hero1.jpg';
import c1 from '../assets/phtos/c1.jpg';
import c2 from '../assets/phtos/c2.jpg';
import c3 from '../assets/phtos/c3.jpg';
import c5 from '../assets/phtos/c5.jpg';
import g19 from '../assets/galary/g19.jpg';
import g3 from '../assets/galary/g3.jpg';
import g2 from '../assets/galary/g2.jpg';
import v1 from '../assets/galary/gv1.mp4';
import v2 from '../assets/galary/gv2.mp4';

const Gallery = () => {
  const mediaItems = [
    { type: 'image', src: hero },
    { type: 'image', src: c1 },
    { type: 'video', src: v1 },
    { type: 'image', src: c3 },
     { type: 'video', src: v2 },
    { type: 'image', src: c5 },
    { type: 'image', src: g19 },
    
    { type: 'image', src: g3 },
    { type: 'image', src: g2 },
  ];

  return (
    <div className="w-full bg-violet-400 py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-white mb-8">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
       {mediaItems.map((item, index) => (
  <div
    key={index}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
  >
    {item.type === 'image' ? (
      <img
        src={item.src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-[400px] object-cover"
      />
    ) : (
      <video
        src={item.src}
        className="w-full h-[400px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default Gallery;
