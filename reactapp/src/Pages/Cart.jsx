


// ============================================
// FILE: src/Pages/Cart.jsx
// ============================================
import { Link } from "react-router-dom";
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
  cart,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  cartCount,
} = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  // ================= PAGINATION =================
  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 20;

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=150"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        setSelectedProduct(
          data.products[0]
        );

        setLoading(false);
      });
  }, []);

  // ================= CART PRODUCTS ONLY =================
  const currentProducts = cart.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(
    cart.length / productsPerPage
  );


  // ================= RELATED PRODUCTS =================

const relatedProducts = useMemo(() => {

  if (!selectedProduct) return [];

  return products
    .filter(
      (item) =>
        item.category ===
          selectedProduct.category &&
        item.id !== selectedProduct.id
    )
    .slice(0, 4);

}, [selectedProduct, products]);

  

  // ================= TOTALS =================
  const subtotal = cart.reduce(
  (acc, item) =>
    acc +
    (Number(item.price) || 0) *
      (Number(item.quantity) || 1),
  0
);

  const shipping = cart.length > 0 ? 20 : 0;

  const tax = subtotal * 0.05;

  const finalTotal =
    subtotal + shipping + tax;

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-black">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-14 px-4 lg:px-8">

      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto mb-12">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <h1 className="text-5xl font-black text-gray-900">
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Premium Ecommerce Experience
            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* ITEMS */}
            <div className="bg-white px-6 py-4 rounded-3xl shadow-lg border border-gray-100">

              <p className="text-sm text-gray-500">
                Total Items
              </p>

              <h2 className="text-3xl font-black text-orange-500">
                {cartCount}
              </h2>

            </div>

            {/* TOTAL */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-4 rounded-3xl shadow-xl">

              <p className="text-sm opacity-90">
                Total Price
              </p>

              <h2 className="text-3xl font-black">
                ${finalTotal.toFixed(2)}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10">

        {/* ================================================= */}
        {/* ================= LEFT TABLE ==================== */}
        {/* ================================================= */}

        <div className="xl:col-span-2 bg-white rounded-[35px] shadow-2xl border border-gray-100 overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between px-8 py-7 border-b border-gray-100">

            <div>

              <h2 className="text-3xl font-black text-gray-900">
                Added Products
              </h2>

              <p className="text-gray-500 mt-1">
                Products Added To Cart
              </p>

            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-xl">

              <ShoppingCart
                size={30}
                className="text-white"
              />

            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-orange-50 border-b border-orange-100">

                <tr className="text-left">

                  <th className="px-6 py-5 font-bold text-gray-700">
                    Product
                  </th>

                  <th className="px-4 py-5 font-bold text-gray-700">
                    Price
                  </th>

                  <th className="px-4 py-5 font-bold text-gray-700">
                    Quantity
                  </th>

                  <th className="px-4 py-5 font-bold text-gray-700">
                    Total
                  </th>

                  <th className="px-4 py-5 font-bold text-gray-700">
                    Remove
                  </th>

                </tr>

              </thead>

              <tbody>

                {currentProducts.length === 0 ? (

                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-16 text-2xl font-bold text-gray-400"
                    >
                      No Product Added
                    </td>
                  </tr>

                ) : (

                  currentProducts.map(
                    (item) => (

                      <tr
                        key={item.id}
                        onClick={() =>
                          setSelectedProduct(
                            item
                          )
                        }
                        className="border-b border-gray-100 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer"
                      >

                        {/* PRODUCT */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4">

                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-20 h-20 rounded-2xl object-cover border"
                            />

                            <div>

                              <h3 className="font-black text-gray-900 line-clamp-1">
                                {item.title}
                              </h3>

                              <p className="text-sm text-gray-500 capitalize mt-1">
                                {
                                  item.category
                                }
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* PRICE */}
                        <td className="px-4 py-5">

                          <p className="text-xl font-black text-orange-500">
                            ${item.price}
                          </p>

                        </td>

                        {/* QUANTITY */}
                        <td className="px-4 py-5">

                          <div className="flex items-center gap-3">

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                decreaseQty(item.id);
                              }}
                              className="w-9 h-9 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                            >
                              <Minus
                                size={18}
                              />
                            </button>

                            <span className="font-black text-lg">
                              {
                                item.quantity
                              }
                            </span>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                increaseQty(item.id);
                              }}
                              className="w-9 h-9 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                            >
                              <Plus
                                size={18}
                              />
                            </button>

                          </div>

                        </td>

                        {/* TOTAL */}
                        <td className="px-4 py-5">

                          <p className="text-2xl font-black text-orange-500">
                            $
                            {(
                            (Number(item.price) || 0) *
                            (Number(item.quantity) || 1)
                            ).toFixed(2)}
                          </p>

                        </td>

                        {/* REMOVE */}
                        <td className="px-4 py-5">

                          <button
                            onClick={(e) => {
                              e.stopPropagation();

                              removeFromCart(
                                item.id
                              );
                            }}
                            className="w-11 h-11 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                          >
                            <Trash2
                              size={20}
                            />
                          </button>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>

          {/* ================= PAGINATION ================= */}

          {cart.length > 0 && (

            <div className="flex items-center justify-center gap-4 py-8">

              {/* PREV */}
              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage - 1
                  )
                }
                className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-40"
              >
                <ChevronLeft />
              </button>

              {/* PAGES */}
              {Array.from(
                {
                  length: totalPages,
                },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(
                        index + 1
                      )
                    }
                    className={`w-12 h-12 rounded-2xl font-bold transition-all duration-300 ${
                      currentPage ===
                      index + 1
                        ? "bg-orange-500 text-white"
                        : "bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}

              {/* NEXT */}
              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage + 1
                  )
                }
                className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-40"
              >
                <ChevronRight />
              </button>

            </div>

          )}




            {/* ================= RELATED PRODUCTS ================= */}

<div className="p-8 border-t border-gray-100">

  <div className="mb-8">

    <h2 className="text-3xl font-black text-gray-900">
      Related Products
    </h2>

    <p className="text-gray-500 mt-2">
      Similar products you may like
    </p>

  </div>

  <div className="overflow-x-auto rounded-3xl border border-gray-100">

    <table className="w-full">

      <thead className="bg-orange-50 border-b border-orange-100">

        <tr className="text-left">

          <th className="px-6 py-5 font-bold text-gray-700">
            Product
          </th>

          <th className="px-4 py-5 font-bold text-gray-700">
            Category
          </th>

          <th className="px-4 py-5 font-bold text-gray-700">
            Rating
          </th>

          <th className="px-4 py-5 font-bold text-gray-700">
            Price
          </th>

          <th className="px-4 py-5 font-bold text-gray-700">
            Action
          </th>

        </tr>

      </thead>

      <tbody>

        {relatedProducts.map((item) => (

          <tr
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="border-b border-gray-100 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer"
          >

            {/* PRODUCT */}
            <td className="px-6 py-5">

              <div className="flex items-center gap-4">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 rounded-2xl object-cover border"
                />

                <div>

                  <h3 className="font-black text-gray-900 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                </div>

              </div>

            </td>

            {/* CATEGORY */}
            <td className="px-4 py-5">

              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold capitalize">
                {item.category}
              </span>

            </td>

            {/* RATING */}
            <td className="px-4 py-5">

              <div className="flex items-center gap-2">

                <Star
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />

                <span className="font-bold">
                  {item.rating}
                </span>

              </div>

            </td>

            {/* PRICE */}
            <td className="px-4 py-5">

              <h3 className="text-2xl font-black text-orange-500">
                ${item.price}
              </h3>

            </td>

            {/* ACTION */}
            <td className="px-4 py-5">

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Add
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>


            


        </div>

        {/* ================================================= */}
        {/* ================= RIGHT SIDE ==================== */}
        {/* ================================================= */}

        <div className="space-y-8">

          {/* ================= ORDER SUMMARY ================= */}

          <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-7">

            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-lg">
                <span>Products</span>
                <span>{cartCount}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-2xl font-black text-orange-500">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="block text-center w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-black text-lg shadow-xl hover:scale-105 transition-all duration-300">
              Proceed To Checkout
              </Link>

            </div>

          </div>

          {/* ================= FEATURES ================= */}

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">

              <Truck
                size={40}
                className="text-orange-500"
              />

              <h3 className="font-black text-xl mt-4">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-2">
                Worldwide shipping
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">

              <ShieldCheck
                size={40}
                className="text-orange-500"
              />

              <h3 className="font-black text-xl mt-4">
                Secure Payment
              </h3>

              <p className="text-gray-500 mt-2">
                100% protected checkout
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cart;