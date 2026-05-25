import React from "react";

import {
  Heart,
  MessageCircle,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

function BlogCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
    >
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/600/400?random=${item.id}`}
          alt={item.title}
          className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* CATEGORY */}
        <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[2px] border border-white/20">
          Tech Blog
        </div>

        {/* DATE */}
        <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs flex items-center gap-2 border border-white/10">
          <CalendarDays size={14} />
          <span>Latest</span>
        </div>

        {/* TITLE */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-white text-2xl font-black leading-tight line-clamp-2">
            {item.title}
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-[28px] line-clamp-3">
          {item.body}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-8">
          {/* READ MORE */}
          <button className="flex items-center gap-2 bg-black hover:bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold transition-all duration-300 group/button">
            Read More

            <ArrowUpRight
              size={18}
              className="group-hover/button:rotate-45 transition-all duration-300"
            />
          </button>

          {/* REACTIONS */}
          <div className="flex items-center gap-5">
            {/* LIKES */}
            <div className="flex items-center gap-2 text-gray-700">
              <Heart
                size={18}
                className="text-red-500"
              />

              <span className="font-semibold text-sm">
                {item.reactions?.likes || 0}
              </span>
            </div>

            {/* COMMENTS */}
            <div className="flex items-center gap-2 text-gray-700">
              <MessageCircle
                size={18}
                className="text-orange-500"
              />

              <span className="font-semibold text-sm">
                {item.reactions?.dislikes || 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 rounded-[32px] border border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}

export default BlogCard;