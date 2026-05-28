import React from "react";
import {
  MapPin,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

function Cards({ data }) {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#e0f2fe] via-[#fdf4ff] to-[#fef9c3] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center">

        <p className="text-xs sm:text-sm tracking-[3px] sm:tracking-[5px] text-purple-500 font-semibold uppercase">
          Explore Travel
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mt-3 leading-tight">
          Beautiful Destinations 🇵🇰
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7">
          Discover breathtaking places, mountains,
          valleys and natural beauty.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {data.map((tour) => (

          <div
            key={tour.id}
            className="group relative rounded-[24px] sm:rounded-[30px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl transition duration-500"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-60 sm:h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* FAVORITE */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition cursor-pointer">
                <Heart size={18} />
              </div>

              {/* RATING */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Star
                  size={14}
                  className="text-yellow-500"
                />
                5.0
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-5">

              {/* LOCATION */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

                <MapPin
                  size={16}
                  className="text-purple-500"
                />

                {tour.location}

              </div>

              {/* TITLE */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-2 line-clamp-1">
                {tour.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm mt-2 leading-6">
                Explore one of the most beautiful
                destinations in Pakistan.
              </p>

              {/* BUTTON */}
              <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-[1.02] transition shadow-lg">

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