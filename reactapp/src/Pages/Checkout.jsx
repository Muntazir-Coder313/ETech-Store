import React, { useState } from "react";

import {
  CreditCard,
  Landmark,
  Wallet,
  ShieldCheck,
  Truck,
  Lock,
  BadgeCheck,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useCart } from "../Context/CartContext";

function Checkout() {

  const { cart, cartCount } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  // ================= TOTALS =================
  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      (Number(item.price) || 0) *
        (Number(item.quantity) || 1),
    0
  );

  const shipping =
    cart.length > 0 ? 20 : 0;

  const tax = subtotal * 0.05;

  const total =
    subtotal + shipping + tax;

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-8 sm:py-10 lg:py-14 px-3 sm:px-5 lg:px-8 overflow-hidden">

      {/* BG EFFECTS */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-yellow-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-10 relative z-10">

        {/* ================================================= */}
        {/* ================= LEFT SIDE ===================== */}
        {/* ================================================= */}

        <div className="xl:col-span-2 space-y-6 lg:space-y-8">

          {/* HEADER */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[25px] sm:rounded-[35px] shadow-2xl border border-white p-5 sm:p-8 overflow-hidden relative">

            <div className="absolute top-0 right-0 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

              <div>

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">

                    <ShoppingBag className="text-white" />

                  </div>

                  <div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                      Secure Checkout
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                      Fast • Secure • Trusted
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-5">

                  <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base">

                    <ShieldCheck size={18} />

                    SSL Protected

                  </div>

                  <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 sm:px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base">

                    <BadgeCheck size={18} />

                    Trusted Payments

                  </div>

                </div>

              </div>

              <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-white px-5 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-2xl">

                <p className="text-sm opacity-90">
                  Total Amount
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-1">
                  ${total.toFixed(2)}
                </h2>

              </div>

            </div>

          </div>

          {/* BILLING */}
          <div className="bg-white rounded-[25px] sm:rounded-[35px] shadow-2xl border border-gray-100 p-5 sm:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">

              <div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
                  Billing Information
                </h2>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Enter your delivery details
                </p>

              </div>

              <div className="bg-orange-100 text-orange-600 px-4 sm:px-5 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm sm:text-base w-fit">

                <Lock size={18} />

                Secure

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full md:col-span-2"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <input
                type="text"
                placeholder="City"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <input
                type="text"
                placeholder="Country"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
              />

              <textarea
                rows="5"
                placeholder="Delivery Address"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 md:col-span-2 text-sm sm:text-base w-full"
              ></textarea>

            </div>

          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-[25px] sm:rounded-[35px] shadow-2xl border border-gray-100 p-5 sm:p-8">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-8">
              Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

              {/* CARD */}
              <button
                onClick={() =>
                  setPaymentMethod("card")
                }
                className={`p-4 sm:p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "card"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

                <CreditCard
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-lg sm:text-xl font-black mt-4">
                  Credit Card
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Visa / Mastercard
                </p>

              </button>

              {/* BANK */}
              <button
                onClick={() =>
                  setPaymentMethod("bank")
                }
                className={`p-4 sm:p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "bank"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

                <Landmark
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-lg sm:text-xl font-black mt-4">
                  Bank Transfer
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Direct Bank Payment
                </p>

              </button>

              {/* CASH */}
              <button
                onClick={() =>
                  setPaymentMethod("cash")
                }
                className={`p-4 sm:p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "cash"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

                <Wallet
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-lg sm:text-xl font-black mt-4">
                  Easypaisa / COD
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Mobile Wallet & Cash
                </p>

              </button>

            </div>

            {/* CARD FORM */}
            {paymentMethod === "card" && (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-orange-400 text-sm sm:text-base w-full"
                />

              </div>

            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 lg:space-y-8">

          <div className="bg-white rounded-[25px] sm:rounded-[35px] shadow-2xl border border-gray-100 p-5 sm:p-7 xl:sticky xl:top-10">

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-7">
              Order Summary
            </h2>

            <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">

              {cart.length === 0 ? (

                <div className="text-center py-10">

                  <h3 className="text-xl sm:text-2xl font-black text-gray-400">
                    Cart Is Empty
                  </h3>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center gap-3 sm:gap-4 border border-gray-100 rounded-3xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300"
                  >

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl object-cover"
                    />

                    <div className="flex-1 min-w-0">

                      <h3 className="font-black text-gray-900 line-clamp-1 text-sm sm:text-base">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-2">

                        <Star
                          size={16}
                          className="text-yellow-500 fill-yellow-400"
                        />

                        <p className="text-xs sm:text-sm text-gray-500">
                          Premium Product
                        </p>

                      </div>

                      <p className="text-gray-500 mt-2 text-sm">
                        Qty : {item.quantity}
                      </p>

                      <p className="text-xl sm:text-2xl font-black text-orange-500 mt-2">
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </p>

                    </div>

                  </div>

                ))

              )}

            </div>

            {/* TOTALS */}
            <div className="mt-8 space-y-4 border-t pt-6">

              <div className="flex justify-between text-sm sm:text-lg">
                <span>Products</span>
                <span>{cartCount}</span>
              </div>

              <div className="flex justify-between text-sm sm:text-lg">
                <span>Subtotal</span>
                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-lg">
                <span>Shipping</span>
                <span>
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-lg">
                <span>Tax</span>
                <span>
                  ${tax.toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-5 flex justify-between text-2xl sm:text-3xl font-black text-orange-500">

                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>

              </div>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">

                <Truck
                  className="mx-auto text-orange-500"
                  size={35}
                />

                <h3 className="font-black text-lg text-orange-600 mt-3">
                  Fast Delivery
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  3-5 Days Delivery
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">

                <ShieldCheck
                  className="mx-auto text-green-500"
                  size={35}
                />

                <h3 className="font-black text-lg text-green-600 mt-3">
                  Safe Payment
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  100% Secure
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                alert(
                  "Order Placed Successfully ✅"
                )
              }
              className="w-full mt-8 py-4 sm:py-5 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-white text-base sm:text-lg lg:text-xl font-black shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              Complete Payment
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;