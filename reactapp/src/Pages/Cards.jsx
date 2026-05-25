import React from "react";
import { MapPin, ArrowRight, Star, Heart } from "lucide-react";

function Cards({ data }) {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#e0f2fe] via-[#fdf4ff] to-[#fef9c3]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center">

        <p className="text-sm tracking-[5px] text-purple-500 font-semibold uppercase">
          Explore Travel
        </p>

        <h1 className="text-5xl font-extrabold text-gray-800 mt-3">
          Beautiful Destinations 🇵🇰
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Discover breathtaking places, mountains, valleys and natural beauty.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {data.map((tour) => (

          <div
            key={tour.id}
            className="group relative rounded-[30px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* favorite */}
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition cursor-pointer">
                <Heart size={18} />
              </div>

              {/* rating */}
              <div className="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Star size={14} className="text-yellow-500" />
                5.0
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* location */}
              <div className="flex items-center gap-2 text-sm text-gray-500">

                <MapPin size={16} className="text-purple-500" />

                {tour.location}

              </div>

              {/* title */}
              <h2 className="text-xl font-bold text-gray-800 mt-2">
                {tour.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Explore one of the most beautiful destinations in Pakistan.
              </p>

              {/* button */}
              <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition shadow-lg">

                View Details

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Cards;