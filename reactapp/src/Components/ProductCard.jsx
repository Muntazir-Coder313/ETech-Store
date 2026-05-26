



// ===========================================
// FILE: src/Components/ProductCard.jsx
// ===========================================

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductCard({ item, onClick }) {
  const navigate = useNavigate();
const { addToCart } = useCart();



      const handleAddToCart = (product) => {
  addToCart(product);

  const goToCart = window.confirm(
    "Product added to cart ✅\nGo to cart page?"
  );

  if (goToCart) {
    navigate("/cart");
  }
};

  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        {/* STOCK */}
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
          Stock: {item.stock}
        </div>

        {/* CATEGORY */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs capitalize">
          {item.category}
        </div>

        {/* TITLE */}
        <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold line-clamp-2">
          {item.title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-5 bg-white">
        <p className="text-gray-500 text-sm line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-6">
          {/* PRICE */}
          <div>
            <p className="text-2xl font-black text-orange-500">
              ${item.price}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              ⭐ {item.rating}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-2">
            {/* VIEW */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              View
            </button>

            {/* ADD TO CART */}
                <button
                onClick={(e) => {
                e.stopPropagation();

                addToCart(item);
                alert(`${item.title} added to cart 🛒`);

                const goToCart = window.confirm("Go to cart page?");

                if (goToCart) {
                navigate("/cart");
                }
              }}
              className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;