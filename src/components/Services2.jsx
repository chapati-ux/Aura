import React from "react";
import s1 from '../assets/phtos/c1.jpg'
import s2 from '../assets/phtos/hero1.jpg'
import vendoor from '../assets/Services/vendor.jpg'
import destination from '../assets/Services/destination.png'
import guest from '../assets/Services/guest.jpg'
import prewedding from '../assets/Services/pre-wedding.jpg'
const Services2 = () => {
  const services = [
    {
      title: "Wedding Planning",
      image: s2,
    },
     {
      title: "Destination Wedding",
      image: destination,
    },
    {
      title: "Venue Selection",
      image: s1,
    },
    {
      title: "Vendor Coordination",
      image: vendoor,
    },
    {
      title: "Guest Experience & Travel",
      image: guest,
    },
    {
      title: "Pre-Wedding Shoots/Events",
      image: prewedding, // No image available due to policy restriction
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 py-12 px-4">
      <h1 className="text-center text-4xl font-bold text-pink-700 mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center justify-center text-center text-2xl font-semibold text-pink-600 h-[24rem]"
          >
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="w-56 h-56 object-cover mb-4 rounded-xl"
              />
            ) : (
              <div className="w-56 h-56 mb-4 flex items-center justify-center bg-pink-100 rounded-xl text-pink-400 text-base px-4 text-center">
                Visual coming soon — experience the magic of pre-wedding moments!
              </div>
            )}
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services2;
