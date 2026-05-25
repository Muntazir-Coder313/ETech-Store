


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Send,
  Eye,
  Flame,
  Sparkles,
  BadgeCheck,
  Clock3,
} from "lucide-react";

import RelatedProducts from "../components/RelatedProducts";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [wishlist, setWishlist] = useState(false);

  const [viewers, setViewers] = useState(14);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ali Khan",
      rating: 5,
      comment:
        "Premium quality product. Delivery was fast and packaging was amazing.",
    },
    {
      id: 2,
      name: "Ahmed",
      rating: 4,
      comment:
        "Very nice product and quality is impressive.",
    },
  ]);

  // ================= Fetch =================

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();

        setProduct(data);
        setMainImage(data.thumbnail);

        const relatedRes = await fetch(
          `https://dummyjson.com/products/category/${data.category}`
        );

        const relatedData = await relatedRes.json();

        setRelatedProducts(relatedData.products);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ================= Live Viewers =================

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const random = Math.floor(Math.random() * 4);
        return prev + random - 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ================= Quantity =================

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // ================= Total =================

  const totalPrice = product
    ? (product.price * quantity).toFixed(2)
    : 0;

  // ================= Review =================

  const handleReviewChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitReview = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating: Number(reviewForm.rating),
      comment: reviewForm.comment,
    };

    setReviews([newReview, ...reviews]);

    setReviewForm({
      name: "",
      rating: 5,
      comment: "",
    });

    alert("Review Submitted Successfully!");
  };

  // ================= Skeleton =================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7fb] px-4 md:px-10 py-10 animate-pulse relative overflow-hidden">

        {/* Blur BG */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full"></div>

        {/* Back */}
        <div className="w-52 h-6 bg-gray-200 rounded-full mb-10"></div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <div className="w-full h-[550px] rounded-[40px] bg-white/70 border border-white/40 shadow-xl"></div>

            <div className="flex gap-4 mt-5">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-24 h-24 rounded-3xl bg-white/70 border border-white/40"
                ></div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="w-36 h-10 rounded-full bg-pink-100"></div>

            <div className="space-y-4">
              <div className="w-full h-14 rounded-2xl bg-gray-200"></div>
              <div className="w-3/4 h-14 rounded-2xl bg-gray-200"></div>
            </div>

            <div className="space-y-3">
              <div className="w-full h-4 rounded-full bg-gray-200"></div>
              <div className="w-full h-4 rounded-full bg-gray-200"></div>
              <div className="w-2/3 h-4 rounded-full bg-gray-200"></div>
            </div>

            <div className="flex gap-4">
              <div className="w-32 h-12 rounded-full bg-yellow-100"></div>
              <div className="w-40 h-12 rounded-full bg-red-100"></div>
            </div>

            <div className="w-60 h-16 rounded-2xl bg-cyan-100"></div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gray-200"></div>
              <div className="w-24 h-14 rounded-2xl bg-gray-200"></div>
              <div className="w-14 h-14 rounded-2xl bg-gray-200"></div>
            </div>

            <div className="h-40 rounded-[35px] bg-gradient-to-r from-pink-100 to-blue-100"></div>

            <div className="flex gap-4">
              <div className="flex-1 h-16 rounded-3xl bg-gradient-to-r from-pink-200 to-purple-200"></div>
              <div className="w-20 h-16 rounded-3xl bg-gray-200"></div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ================= Error =================

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7fb]">

        <div className="bg-white px-10 py-8 rounded-[35px] shadow-2xl border border-red-100">

          <h1 className="text-red-500 text-2xl font-bold">
            {error}
          </h1>

        </div>

      </div>
    );
  }

  if (!product) return null;

  // ================= Main UI =================

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-gray-800 relative overflow-hidden px-4 md:px-10 py-10">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-purple-300/20 blur-3xl rounded-full"></div>

      {/* Back */}
      <Link
        to="/"
        className="relative z-10 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg text-purple-600 hover:scale-105 transition mb-10"
      >
        ← Back to Products
      </Link>

      {/* Main Card */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-6 md:p-10 overflow-hidden">

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* LEFT */}
        <div className="relative z-10">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 shadow-xl group">

            {/* Discount */}
            <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">
              -{Math.round(product.discountPercentage)}%
            </div>

            {/* Trending */}
            <div className="absolute top-5 right-5 z-20 bg-white/80 backdrop-blur-xl text-orange-500 px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">
              <Flame size={16} />
              Trending
            </div>

            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-5 overflow-x-auto pb-2">
            {product.images?.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer min-w-[95px] h-[95px] rounded-3xl overflow-hidden border-2 transition duration-300 shadow-lg ${
                  mainImage === img
                    ? "border-pink-500 scale-105"
                    : "border-white/30"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex flex-col justify-center">

          {/* Category */}
          <div className="w-fit px-5 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 font-semibold capitalize flex items-center gap-2">
            <Sparkles size={16} />
            {product.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mt-6 text-gray-900">
            {product.title}
          </h1>

          {/* Description */}
          <p className="text-gray-500 leading-8 mt-6 text-lg">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mt-8">

            <div className="bg-yellow-100 text-yellow-700 px-5 py-3 rounded-full flex items-center gap-2 font-bold shadow-sm">
              <Star size={18} fill="currentColor" />
              {product.rating}
            </div>

            <div className="bg-red-100 text-red-500 px-5 py-3 rounded-full flex items-center gap-2 font-semibold">
              <Eye size={18} />
              {viewers} viewing now
            </div>

            <div className="bg-green-100 text-green-600 px-5 py-3 rounded-full flex items-center gap-2 font-semibold">
              <BadgeCheck size={18} />
              {product.stock} in stock
            </div>

          </div>

          {/* Price */}
          <div className="mt-10">

            <p className="text-gray-500 mb-3">
              Premium Price
            </p>

            <div className="flex items-center gap-5">

              <h2 className="text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                ${product.price}
              </h2>

              <span className="line-through text-gray-400 text-2xl">
                $
                {(
                  product.price +
                  product.price *
                    (product.discountPercentage / 100)
                ).toFixed(0)}
              </span>

            </div>

          </div>

          {/* Quantity */}
          <div className="mt-10">

            <p className="text-gray-600 mb-4 font-medium">
              Quantity
            </p>

            <div className="flex items-center gap-4">

              <button
                onClick={decreaseQty}
                className="w-14 h-14 rounded-2xl bg-white/70 border border-white/40 hover:bg-red-500 hover:text-white transition flex items-center justify-center shadow-lg"
              >
                <Minus size={20} />
              </button>

              <div className="w-24 h-14 rounded-2xl bg-white/70 border border-white/40 flex items-center justify-center text-2xl font-bold shadow-lg">
                {quantity}
              </div>

              <button
                onClick={increaseQty}
                className="w-14 h-14 rounded-2xl bg-white/70 border border-white/40 hover:bg-purple-500 hover:text-white transition flex items-center justify-center shadow-lg"
              >
                <Plus size={20} />
              </button>

            </div>

          </div>

          {/* Total */}
          <div className="mt-10 rounded-[35px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px] shadow-2xl">

            <div className="rounded-[35px] bg-white p-8">

              <p className="text-gray-500">
                Total Price
              </p>

              <h2 className="text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-3">
                ${totalPrice}
              </h2>

              <p className="text-gray-500 mt-2">
                {quantity} × ${product.price}
              </p>

            </div>

          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

            <div className="bg-white/70 border border-white/40 rounded-[30px] p-5 text-center shadow-lg hover:-translate-y-2 transition">
              <Truck className="mx-auto text-pink-500 mb-3" />
              <p className="text-sm font-semibold text-gray-700">
                Free Shipping
              </p>
            </div>

            <div className="bg-white/70 border border-white/40 rounded-[30px] p-5 text-center shadow-lg hover:-translate-y-2 transition">
              <ShieldCheck className="mx-auto text-green-500 mb-3" />
              <p className="text-sm font-semibold text-gray-700">
                Secure Payment
              </p>
            </div>

            <div className="bg-white/70 border border-white/40 rounded-[30px] p-5 text-center shadow-lg hover:-translate-y-2 transition">
              <RotateCcw className="mx-auto text-purple-500 mb-3" />
              <p className="text-sm font-semibold text-gray-700">
                Easy Return
              </p>
            </div>

          </div>

          {/* Extra Features */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-orange-100 text-orange-600 font-semibold">
              <Clock3 size={18} />
              Fast Delivery
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-blue-100 text-blue-600 font-semibold">
              <BadgeCheck size={18} />
              Verified Product
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">

            {/* Cart */}
            <button className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-[1.02] text-white font-bold py-5 rounded-3xl transition duration-300 flex items-center justify-center gap-3 shadow-2xl">

              <ShoppingCart size={22} />

              Add To Cart

            </button>

            {/* Wishlist */}
            <button
              onClick={() => setWishlist(!wishlist)}
              className={`w-20 rounded-3xl transition border shadow-lg ${
                wishlist
                  ? "bg-pink-500 border-pink-500 text-white"
                  : "bg-white/70 border-white/40 hover:bg-pink-100"
              }`}
            >
              <Heart
                fill={wishlist ? "white" : "transparent"}
              />
            </button>

          </div>

          {/* Warning */}
          {product.stock < 20 && (
            <div className="mt-6 bg-red-100 border border-red-200 text-red-500 rounded-3xl p-5 font-semibold">
              ⚠ Hurry! Only {product.stock} items left.
            </div>
          )}

        </div>

      </div>

      {/* ================= Reviews ================= */}

      <div className="grid lg:grid-cols-2 gap-10 mt-24 relative z-10">

        {/* Review Form */}
        <div className="rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-8">

          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Customer Feedback
          </h2>

          <p className="text-gray-500 mb-10">
            Share your experience with this product
          </p>

          <form
            onSubmit={submitReview}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              value={reviewForm.name}
              onChange={handleReviewChange}
              required
              placeholder="Enter your name"
              className="w-full bg-white border border-gray-200 rounded-3xl p-5 outline-none focus:border-purple-400"
            />

            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleReviewChange}
              className="w-full bg-white border border-gray-200 rounded-3xl p-5 outline-none focus:border-purple-400"
            >
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Bad</option>
            </select>

            <textarea
              rows="5"
              name="comment"
              value={reviewForm.comment}
              onChange={handleReviewChange}
              required
              placeholder="Write your feedback..."
              className="w-full bg-white border border-gray-200 rounded-3xl p-5 outline-none focus:border-purple-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold px-8 py-5 rounded-3xl transition flex items-center gap-3 hover:scale-105 shadow-xl"
            >
              <Send size={20} />
              Submit Review
            </button>

          </form>
        </div>

        {/* Reviews */}
        <div className="space-y-6">

          <h2 className="text-4xl font-black text-gray-900">
            Customer Reviews
          </h2>

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-[35px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-lg p-6"
            >

              <div className="flex items-center justify-between mb-4">

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Verified Customer
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

              </div>

              <p className="text-gray-600 leading-8">
                {review.comment}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Related Products */}
      <div className="mt-24 relative z-10">
        <RelatedProducts
          products={relatedProducts}
          currentProductId={product.id}
        />
      </div>
    </div>
  );
}

export default ProductDetails;