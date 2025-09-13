import React from "react";
import CircularGallery from "../components/CircularGallery";

const Services = () => {
  return (
    <div className="w-full bg-amber-200 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Gallery
      </h1>

      <div className="w-full max-w-6xl h-[600px] relative">
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default Services;
