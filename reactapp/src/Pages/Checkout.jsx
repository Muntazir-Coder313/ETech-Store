// import React, { useState } from "react";

// import {
//   CreditCard,
//   Landmark,
//   Wallet,
//   ShieldCheck,
//   Truck,
//   CheckCircle2,
// } from "lucide-react";

// import { useCart } from "../context/CartContext";

// function Checkout() {

//   const { cart, cartCount } = useCart();

//   const [paymentMethod, setPaymentMethod] =
//     useState("card");

//   const subtotal = cart.reduce(
//     (acc, item) =>
//       acc +
//       (Number(item.price) || 0) *
//         (Number(item.quantity) || 1),
//     0
//   );

//   const shipping =
//     cart.length > 0 ? 20 : 0;

//   const tax = subtotal * 0.05;

//   const total =
//     subtotal + shipping + tax;

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-14 px-4 lg:px-8">

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* ================= LEFT ================= */}

//         <div className="lg:col-span-2 space-y-8">

//           {/* BILLING */}
//           <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8">

//             <h2 className="text-4xl font-black text-gray-900 mb-8">
//               Billing Information
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//               />

//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
//               />

//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//               />

//               <input
//                 type="text"
//                 placeholder="City"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//               />

//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
//               />

//             </div>

//           </div>

//           {/* PAYMENT */}
//           <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8">

//             <h2 className="text-4xl font-black text-gray-900 mb-8">
//               Payment Method
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//               {/* CARD */}
//               <button
//                 onClick={() =>
//                   setPaymentMethod("card")
//                 }
//                 className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
//                   paymentMethod === "card"
//                     ? "border-orange-500 bg-orange-50"
//                     : "border-gray-200"
//                 }`}
//               >

//                 <CreditCard
//                   size={40}
//                   className="text-orange-500"
//                 />

//                 <h3 className="text-xl font-black mt-4">
//                   Credit Card
//                 </h3>

//               </button>

//               {/* BANK */}
//               <button
//                 onClick={() =>
//                   setPaymentMethod("bank")
//                 }
//                 className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
//                   paymentMethod === "bank"
//                     ? "border-orange-500 bg-orange-50"
//                     : "border-gray-200"
//                 }`}
//               >

//                 <Landmark
//                   size={40}
//                   className="text-orange-500"
//                 />

//                 <h3 className="text-xl font-black mt-4">
//                   Bank Transfer
//                 </h3>

//               </button>

//               {/* CASH */}
//               <button
//                 onClick={() =>
//                   setPaymentMethod("cash")
//                 }
//                 className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
//                   paymentMethod === "cash"
//                     ? "border-orange-500 bg-orange-50"
//                     : "border-gray-200"
//                 }`}
//               >

//                 <Wallet
//                   size={40}
//                   className="text-orange-500"
//                 />

//                 <h3 className="text-xl font-black mt-4">
//                   Cash On Delivery
//                 </h3>

//               </button>

//             </div>

//             {/* CARD FORM */}
//             {paymentMethod === "card" && (

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

//                 <input
//                   type="text"
//                   placeholder="Card Holder Name"
//                   className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Expiry Date"
//                   className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="CVV"
//                   className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
//                 />

//               </div>

//             )}

//             {/* BANK */}
//             {paymentMethod === "bank" && (

//               <div className="mt-8 bg-orange-50 rounded-3xl p-6 border border-orange-100">

//                 <h3 className="text-2xl font-black text-gray-900 mb-4">
//                   Bank Information
//                 </h3>

//                 <div className="space-y-3 text-lg">

//                   <p>
//                     <span className="font-bold">
//                       Bank:
//                     </span>{" "}
//                     HBL Pakistan
//                   </p>

//                   <p>
//                     <span className="font-bold">
//                       Account Name:
//                     </span>{" "}
//                     Ecommerce Store
//                   </p>

//                   <p>
//                     <span className="font-bold">
//                       Account Number:
//                     </span>{" "}
//                     1234567890
//                   </p>

//                   <p>
//                     <span className="font-bold">
//                       IBAN:
//                     </span>{" "}
//                     PK00HBL000123456789
//                   </p>

//                 </div>

//               </div>

//             )}

//             {/* CASH */}
//             {paymentMethod === "cash" && (

//               <div className="mt-8 bg-orange-50 rounded-3xl p-6 border border-orange-100">

//                 <h3 className="text-2xl font-black text-gray-900">
//                   Cash On Delivery
//                 </h3>

//                 <p className="text-gray-600 mt-3 leading-7">
//                   Pay when your order arrives at your doorstep.
//                 </p>

//               </div>

//             )}

//           </div>

//         </div>

//         {/* ================= RIGHT ================= */}

//         <div className="space-y-8">

//           {/* SUMMARY */}
//           <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-7">

//             <h2 className="text-3xl font-black text-gray-900 mb-7">
//               Order Summary
//             </h2>

//             <div className="space-y-4">

//               <div className="flex justify-between text-lg">
//                 <span>Products</span>
//                 <span>{cartCount}</span>
//               </div>

//               <div className="flex justify-between text-lg">
//                 <span>Subtotal</span>
//                 <span>
//                   ${subtotal.toFixed(2)}
//                 </span>
//               </div>

//               <div className="flex justify-between text-lg">
//                 <span>Shipping</span>
//                 <span>
//                   ${shipping.toFixed(2)}
//                 </span>
//               </div>

//               <div className="flex justify-between text-lg">
//                 <span>Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>

//               <div className="border-t pt-4 flex justify-between text-3xl font-black text-orange-500">

//                 <span>Total</span>

//                 <span>
//                   ${total.toFixed(2)}
//                 </span>

//               </div>

//               <button
//                 onClick={() =>
//                   alert(
//                     "Order Placed Successfully ✅"
//                   )
//                 }
//                 className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-black text-lg shadow-xl hover:scale-105 transition-all duration-300"
//               >
//                 Place Order
//               </button>

//             </div>

//           </div>

//           {/* FEATURES */}

//           <div className="grid grid-cols-1 gap-5">

//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center gap-5">

//               <Truck
//                 size={45}
//                 className="text-orange-500"
//               />

//               <div>
//                 <h3 className="font-black text-xl">
//                   Fast Delivery
//                 </h3>

//                 <p className="text-gray-500 mt-1">
//                   Delivery within 3-5 days
//                 </p>
//               </div>

//             </div>

//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center gap-5">

//               <ShieldCheck
//                 size={45}
//                 className="text-orange-500"
//               />

//               <div>
//                 <h3 className="font-black text-xl">
//                   Secure Payment
//                 </h3>

//                 <p className="text-gray-500 mt-1">
//                   100% secure checkout
//                 </p>
//               </div>

//             </div>

//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center gap-5">

//               <CheckCircle2
//                 size={45}
//                 className="text-orange-500"
//               />

//               <div>
//                 <h3 className="font-black text-xl">
//                   Quality Guarantee
//                 </h3>

//                 <p className="text-gray-500 mt-1">
//                   Premium quality products
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Checkout;




import React, { useState } from "react";

import {
  CreditCard,
  Landmark,
  Wallet,
  ShieldCheck,
  Truck,
  CheckCircle2,
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
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-14 px-4 lg:px-8 overflow-hidden">

      {/* BG EFFECTS */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-yellow-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">

        {/* ================================================= */}
        {/* ================= LEFT SIDE ===================== */}
        {/* ================================================= */}

        <div className="lg:col-span-2 space-y-8">

          {/* HEADER */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[35px] shadow-2xl border border-white p-8 overflow-hidden relative">

            <div className="absolute top-0 right-0 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">

                    <ShoppingBag className="text-white" />

                  </div>

                  <div>
                    <h1 className="text-5xl font-black text-gray-900">
                      Secure Checkout
                    </h1>

                    <p className="text-gray-500 mt-2">
                      Fast • Secure • Trusted
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-4 mt-5">

                  <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-2xl font-semibold">

                    <ShieldCheck size={18} />

                    SSL Protected

                  </div>

                  <div className="flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-2xl font-semibold">

                    <BadgeCheck size={18} />

                    Trusted Payments

                  </div>

                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-white px-8 py-5 rounded-3xl shadow-2xl">

                <p className="text-sm opacity-90">
                  Total Amount
                </p>

                <h2 className="text-4xl font-black mt-1">
                  ${total.toFixed(2)}
                </h2>

              </div>

            </div>

          </div>

          {/* BILLING */}
          <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-4xl font-black text-gray-900">
                  Billing Information
                </h2>

                <p className="text-gray-500 mt-2">
                  Enter your delivery details
                </p>
              </div>

              <div className="bg-orange-100 text-orange-600 px-5 py-3 rounded-2xl font-bold flex items-center gap-2">

                <Lock size={18} />

                Secure

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder="City"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder="Country"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <textarea
                rows="5"
                placeholder="Delivery Address"
                className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
              ></textarea>

            </div>

          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8">

            <h2 className="text-4xl font-black text-gray-900 mb-8">
              Payment Method
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* CARD */}
              <button
                onClick={() =>
                  setPaymentMethod("card")
                }
                className={`p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "card"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

            

                <CreditCard
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-xl font-black mt-4">
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
                className={`p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "bank"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

                <Landmark
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-xl font-black mt-4">
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
                className={`p-6 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  paymentMethod === "cash"
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200"
                }`}
              >

               
                <Wallet
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="text-xl font-black mt-4">
                  Easypaisa / COD
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Mobile Wallet & Cash
                </p>

              </button>

            </div>

            {/* CARD FORM */}
            {paymentMethod === "card" && (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400 md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
                />

              </div>

            )}

            {/* BANK INFO */}
            {paymentMethod === "bank" && (

              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-3xl p-7">

                <h3 className="text-2xl font-black text-gray-900 mb-5">
                  Bank Information
                </h3>

                <div className="space-y-4 text-lg">

                  <p>
                    <span className="font-bold">
                      Bank:
                    </span>{" "}
                    HBL Pakistan
                  </p>

                  <p>
                    <span className="font-bold">
                      Account Name:
                    </span>{" "}
                    Ecommerce Store
                  </p>

                  <p>
                    <span className="font-bold">
                      Account Number:
                    </span>{" "}
                    1234567890
                  </p>

                  <p>
                    <span className="font-bold">
                      IBAN:
                    </span>{" "}
                    PK00HBL000123456789
                  </p>

                </div>

              </div>

            )}

            {/* CASH */}
            {paymentMethod === "cash" && (

              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-3xl p-7">

                <h3 className="text-2xl font-black text-gray-900">
                  Easypaisa / Cash On Delivery
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Pay using Easypaisa wallet or
                  pay cash when your order arrives.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* ================================================= */}
        {/* ================= RIGHT SIDE ==================== */}
        {/* ================================================= */}

        <div className="space-y-8">

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-7 sticky top-10">

            <h2 className="text-3xl font-black text-gray-900 mb-7">
              Order Summary
            </h2>

            {/* PRODUCTS */}
            <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">

              {cart.length === 0 ? (

                <div className="text-center py-10">

                  <h3 className="text-2xl font-black text-gray-400">
                    Cart Is Empty
                  </h3>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center gap-4 border border-gray-100 rounded-3xl p-4 hover:shadow-xl transition-all duration-300"
                  >

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-black text-gray-900 line-clamp-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-2">

                        <Star
                          size={16}
                          className="text-yellow-500 fill-yellow-400"
                        />

                        <p className="text-sm text-gray-500">
                          Premium Product
                        </p>

                      </div>

                      <p className="text-gray-500 mt-2">
                        Qty : {item.quantity}
                      </p>

                      <p className="text-2xl font-black text-orange-500 mt-2">
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

              <div className="flex justify-between text-lg">
                <span>Products</span>
                <span>{cartCount}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span>
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Tax</span>
                <span>
                  ${tax.toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-5 flex justify-between text-3xl font-black text-orange-500">

                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>

              </div>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-8">

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
              className="w-full mt-8 py-5 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-white text-xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
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