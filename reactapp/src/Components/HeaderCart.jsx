


// ===========================================
// FILE: src/Components/HeaderCart.jsx
// ===========================================

import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function HeaderCart() {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-300"
    >
      <ShoppingCart
        size={22}
        className="text-black"
      />

      {/* BADGE */}
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center font-bold animate-bounce">
          {cartCount}
        </span>
      )}
    </Link>
  );
}

export default HeaderCart;