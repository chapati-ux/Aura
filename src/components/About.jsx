import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[rgb(48,29,47)] py-12 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl font-extrabold text-pink-500">About Us</h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
          Welcome to <span className="font-semibold text-pink-400">Crew Aura</span> — your one-stop destination for unforgettable celebrations. 
          Co-founded by <span className="font-medium">Sahil Manjulkar</span> & <span className="font-medium">Nityanand Bankar</span>, 
          Crew Aura blends creativity, precision, and passion. From beachside vows to ballroom launches, 
          we craft every event with elegance, energy, and emotion. <br /><br />
          📍 <span className="italic">Based in Navi Mumbai — Available Pan-India for Destination Events</span>
        </p>
      </div>
    </div>
  );
};

export default About;
