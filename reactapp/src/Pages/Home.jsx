// ================= IMPORTS =================

import React, { useState, useEffect } from "react";



import { useNavigate } from "react-router-dom";

import Ecommerce from "../Img/E-Commerce.jpg";
import ECommerce1 from "../Img/E-Commerce1.jpg";
import ECommerce2 from "../Img/E-Commerce2.jpg";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
  Sparkles,
  ArrowRight,
  Quote,
  Mail,
  BadgeCheck,
  Heart,
  MessageCircle,
  Eye,
} from "lucide-react";

function Home() {
  // ================= NAVIGATE =================

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 8;

  // ================= HERO SLIDES =================

  const slides = [
    {
      image: Ecommerce,
      title: "Luxury Fashion Collection",
      subtitle:
        "Discover premium fashion, electronics, and modern lifestyle products.",
    },

    {
      image: ECommerce1,
      title: "Modern Ecommerce Experience",
      subtitle:
        "Elegant design, fast delivery, and secure shopping experience.",
    },

    {
      image: ECommerce2,
      title: "Trending Collection 2026",
      subtitle:
        "Upgrade your style with the newest premium products.",
    },
  ];

  // ================= STATES =================

  const [current, setCurrent] = useState(0);

  const [products, setProducts] = useState([]);

  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);





const [activeIndex, setActiveIndex] = useState(0);



const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const currentProducts = products
  .filter((p) => p.rating >= 4)
  .sort((a, b) => b.rating - a.rating)
  .slice(indexOfFirstProduct, indexOfLastProduct);

const totalPages = Math.ceil(
  products.filter((p) => p.rating >= 4).length / productsPerPage
);

  // ================= FETCH API =================

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const productRes = await fetch(
          "https://dummyjson.com/products?limit=6"
        );

        const blogRes = await fetch(
          "https://dummyjson.com/posts?limit=8"
        );

        const productData =
          await productRes.json();

        const blogData = await blogRes.json();

        setProducts(productData.products || []);

        setBlogs(blogData.posts || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        (prev + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(slider);
  }, [slides.length]);

  // ================= SLIDER =================

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  // ================= NAVIGATION =================

  const handleProductDetail = (id) => {
    navigate(`/Product/${id}`);
  };

  const handleBlogDetail = (id) => {
    navigate(`/Blog/${id}`);
  };

  return (
    <div className="bg-[#f8f5f0] overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-155 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
                <p className="uppercase tracking-[4px] text-orange-300 text-sm font-semibold">
                  Premium Ecommerce Store
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black max-w-[1000px] leading-tight">
                {slide.title}
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-200 max-w-[750px] leading-[35px]">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105">
                  Shop Now
                </button>

                <button className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 z-20 bg-white/10 hover:bg-orange-500 backdrop-blur-lg p-4 rounded-full text-white transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 z-20 bg-white/10 hover:bg-orange-500 backdrop-blur-lg p-4 rounded-full text-white transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-10 h-3 bg-orange-500"
                  : "w-3 h-3 bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Truck,
              title: "Fast Delivery",
              text: "Quick and secure worldwide shipping.",
            },

            {
              icon: ShieldCheck,
              title: "Secure Payments",
              text: "100% secure and trusted payment methods.",
            },

            {
              icon: Headphones,
              title: "24/7 Support",
              text: "Professional support anytime you need.",
            },

            {
              icon: BadgeCheck,
              title: "Premium Quality",
              text: "Luxury products with best quality.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center mb-6 shadow-lg">
                <item.icon
                  className="text-white"
                  size={30}
                />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-[30px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRENDING PRODUCTS ================= */}

      <section className="max-w-[1600px] mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            <Sparkles size={18} />
            Trending Products
          </div>

          <h2 className="text-5xl font-black mt-6 text-gray-900">
            Trending Collection
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[35px] overflow-hidden animate-pulse"
                >
                  <div className="h-[280px] bg-gray-200"></div>

                  <div className="p-6">
                    <div className="h-5 bg-gray-200 rounded mb-4"></div>

                    <div className="h-4 bg-gray-200 rounded mb-3"></div>

                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-[280px] w-full object-cover group-hover:scale-110 transition-all duration-700 cursor-pointer"
                    onClick={() =>
                      handleProductDetail(
                        product.id
                      )
                    }
                  />

                  {/* DISCOUNT */}
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {Math.round(
                      product.discountPercentage
                    )}
                    % OFF
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="uppercase tracking-[2px] text-orange-500 text-xs font-semibold">
                    {product.category}
                  </p>

                  <h3 className="text-2xl font-black mt-3 text-gray-900 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-[28px] line-clamp-2 text-sm">
                    {product.description}
                  </p>

                  {/* RATING */}
                  <div className="flex items-center gap-1 mt-5">
                    <div className="flex text-yellow-500">
                      <Star fill="currentColor" size={17} />
                      <Star fill="currentColor" size={17} />
                      <Star fill="currentColor" size={17} />
                      <Star fill="currentColor" size={17} />
                      <Star fill="currentColor" size={17} />
                    </div>

                    <span className="text-gray-500 text-sm ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center justify-between mt-7">
                    <h4 className="text-3xl font-black text-orange-500">
                      ${product.price}
                    </h4>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          handleProductDetail(
                            product.id
                          )
                        }
                        className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-all duration-300"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleProductDetail(
                            product.id
                          )
                        }
                        className="bg-black hover:bg-orange-500 text-white px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                      >
                        Buy
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= PAGINATION ================= */}
<div className="flex justify-center items-center gap-3 mt-12">

  {/* PREV */}
  <button
    onClick={() =>
      setCurrentPage((prev) => Math.max(prev - 1, 1))
    }
    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-orange-500 hover:text-white transition"
  >
    Prev
  </button>

  {/* PAGE NUMBERS */}
  {Array.from({ length: totalPages }).map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-4 py-2 rounded-xl font-bold transition ${
        currentPage === index + 1
          ? "bg-orange-500 text-white"
          : "bg-gray-100 hover:bg-orange-200"
      }`}
    >
      {index + 1}
    </button>
  ))}

  {/* NEXT */}
  <button
    onClick={() =>
      setCurrentPage((prev) =>
        Math.min(prev + 1, totalPages)
      )
    }
    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-orange-500 hover:text-white transition"
  >
    Next
  </button>

</div>
      </section>



      {/* ================= TOP RATED + ABOUT SECTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-28">

  {/* ================= ABOUT SECTION ================= */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-5xl font-black text-gray-900 leading-tight">
        About Our <span className="text-orange-500">Premium Products</span>
      </h2>

      <p className="text-gray-600 mt-6 text-lg leading-[35px]">
        We provide high quality, trending and top-rated products from global brands.
        Our ecommerce store is built to deliver a smooth, fast and secure shopping experience
        with modern UI and trusted delivery system.
      </p>

      <p className="text-gray-500 mt-4 leading-[30px]">
        Every product is carefully selected based on customer reviews, ratings and demand.
        We focus on quality, affordability and customer satisfaction.
      </p>

      <button className="mt-8 px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all">
        Explore Products
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
        className="rounded-[35px] shadow-2xl w-full h-[450px] object-cover"
        alt="Products"
      />

      {/* IMAGE NAME */}
      <div className="absolute bottom-6 left-6 bg-black/60 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md">
        Smart Watch Collection
      </div>

    </div>
  </div>

  {/* ================= TOP RATED PRODUCTS ================= */}
  <div>

    <div className="text-center mb-14">
      <h2 className="text-5xl font-black text-gray-900">
        ⭐ Top Rated Products
      </h2>
      <p className="text-gray-500 mt-4 text-lg">
        Customers’ most loved and highest rated items
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

      {products
  .filter((p) => p.rating >= 4)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4)
  .map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-[35px] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >

      {/* IMAGE */}
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[260px] w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          ⭐ {product.rating}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-black text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-orange-500 font-black text-2xl">
            ${product.price}
          </span>

          <button className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-orange-500 transition">
            Buy Now
          </button>
        </div>

        {/* RATING BELOW */}
        <div className="mt-5 flex items-center justify-between bg-orange-50 p-3 rounded-2xl">
          <span className="text-sm font-semibold text-gray-700">
            Rating
          </span>

          <div className="flex items-center gap-1 text-orange-500 font-bold">
            ⭐ {product.rating}
          </div>
        </div>

      </div>
    </div>
))}

    </div>

  </div>

</section>



{/* ================= FAQ GRID SECTION ================= */}

<section className="relative py-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">

  {/* BACKGROUND EFFECTS */}
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-300/20 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-yellow-300/20 blur-[140px] rounded-full"></div>

  {/* GRID PATTERN */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-20">

      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-orange-200 text-orange-600 px-7 py-3 rounded-full shadow-xl font-bold tracking-wide">

        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
          <MessageCircle size={16} className="text-white" />
        </div>

        FAQ SECTION
      </div>

      <h2 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-gray-900">

        Questions? <br />

        <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
          We’ve Got You Covered
        </span>

      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-[38px] mt-8">
        Explore answers about orders, payments, returns,
        support, and premium shopping services.
      </p>
    </div>

    {/* ================= FAQ GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        {
          question: "How fast is your delivery service?",
          answer:
            "We provide ultra-fast worldwide delivery with secure packaging and live tracking for every order.",
        },

        {
          question: "Are payments secure on your website?",
          answer:
            "Yes, all payments are fully encrypted and protected using advanced security systems.",
        },

        {
          question: "Can I return products after purchase?",
          answer:
            "Absolutely. We provide smooth returns and refund policies for stress-free shopping.",
        },

        {
          question: "Do you provide customer support?",
          answer:
            "Yes, our premium support team is available 24/7 to help you anytime.",
        },

        {
          question: "Are your products premium quality?",
          answer:
            "We carefully select luxury-quality products to ensure the best experience.",
        },

        {
          question: "Can I track my order live?",
          answer:
            "Yes, after placing your order you will receive real-time tracking information instantly.",
        },
      ].map((faq, index) => (

        <div
          key={index}
          className={`group relative overflow-hidden rounded-[35px] transition-all duration-500 border ${
            activeIndex === index
              ? "bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 border-transparent shadow-[0_25px_80px_rgba(255,140,0,0.25)] scale-[1.02]"
              : "bg-white/80 backdrop-blur-2xl border-white shadow-xl hover:-translate-y-2 hover:shadow-2xl"
          }`}
        >

          {/* GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"></div>

          {/* TOP DECOR */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

          {/* QUESTION BUTTON */}
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === index ? null : index
              )
            }
            className="relative z-10 w-full p-8 text-left"
          >

            {/* TOP */}
            <div className="flex items-start justify-between gap-5">

              {/* LEFT */}
              <div className="flex items-start gap-5">

                {/* ICON */}
                <div
                  className={`min-w-[70px] h-[70px] rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-white text-orange-500 shadow-2xl rotate-6"
                      : "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-xl group-hover:scale-110"
                  }`}
                >

                  <MessageCircle size={30} />

                </div>

                {/* TEXT */}
                <div>

                  <h3
                    className={`text-2xl font-black leading-[38px] transition-all duration-300 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <p
                    className={`mt-3 text-sm transition-all duration-300 ${
                      activeIndex === index
                        ? "text-orange-100"
                        : "text-gray-500"
                    }`}
                  >
                    Click to reveal answer
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <div
                className={`min-w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-white text-orange-500 rotate-180"
                    : "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                }`}
              >

                <ChevronDown size={30} />

              </div>

            </div>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-8"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >

              <div className="overflow-hidden">

                <div
                  className={`border-t pt-6 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-white/20"
                      : "border-gray-100"
                  }`}
                >

                  <p
                    className={`text-lg leading-[34px] transition-all duration-300 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          </button>
        </div>
      ))}
    </div>
  </div>
</section>
      

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
              <Quote size={18} />
              Testimonials
            </div>

            <h2 className="text-5xl font-black mt-6">
              What Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                review:
                  "Amazing premium ecommerce experience with elegant design and fast delivery.",
              },

              {
                name: "David Smith",
                review:
                  "The UI is modern and shopping experience feels luxury and smooth.",
              },

              {
                name: "Emily Brown",
                review:
                  "Excellent support, premium quality products, and beautiful website.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fff7ed] to-white p-10 rounded-[35px] shadow-lg hover:-translate-y-2 transition-all duration-500"
              >
                <Quote
                  className="text-orange-400 mb-5"
                  size={42}
                />

                <p className="text-gray-600 text-lg leading-[35px]">
                  "{item.review}"
                </p>

                <div className="flex text-yellow-500 mt-6">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}

      <section className="max-w-[1600px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            Latest News
          </div>

          <h2 className="text-5xl font-black mt-6 text-gray-900">
            Latest Blogs & Articles
          </h2>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {blogs.slice(0, 8).map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100"
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() =>
                  handleBlogDetail(blog.id)
                }
              >
                <img
                  src={`https://picsum.photos/700/500?random=${blog.id}`}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                  Tech Article
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags
                    ?.slice(0, 2)
                    .map((tag, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-gray-900 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mt-4 leading-[28px] line-clamp-3 text-sm">
                  {blog.body}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() =>
                      handleBlogDetail(blog.id)
                    }
                    className="bg-black hover:bg-orange-500 text-white px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>

                  {/* REACTIONS */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Heart
                        size={17}
                        className="text-red-500"
                      />

                      <span className="font-bold text-sm">
                        {blog.reactions?.likes ||
                          0}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                      <MessageCircle
                        size={17}
                        className="text-orange-500"
                      />

                      <span className="font-bold text-sm">
                        {blog.reactions
                          ?.dislikes || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail
                className="text-orange-500"
                size={40}
              />
            </div>

            <h2 className="text-5xl font-black text-gray-900">
              Subscribe Newsletter
            </h2>

            <p className="text-gray-600 mt-6 text-lg max-w-[700px] mx-auto leading-[35px]">
              Get updates about latest products,
              exclusive offers, discounts, and
              modern ecommerce trends directly in
              your inbox.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-10">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-7 py-5 rounded-full border border-gray-200 outline-none focus:border-orange-500 text-lg"
              />

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;