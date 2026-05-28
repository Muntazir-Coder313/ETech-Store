import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  SlidersHorizontal,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";

import ProductCard from "../Components/ProductCard";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  // MOBILE FILTER
  const [showFilters, setShowFilters] =
    useState(false);

  // PAGINATION
  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 21;

  const navigate = useNavigate();

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    let mounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);

        const res = await fetch(
          "https://dummyjson.com/products?limit=160"
        );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        const data = await res.json();

        if (mounted) {
          setProducts(data.products || []);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  // ================= CATEGORIES =================
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map(
          (item) => item.category
        )
      ),
    ];
  }, [products]);

  // ================= FILTER PRODUCTS =================
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        item.category === category;

      const matchPrice =
        item.price <= maxPrice;

      return (
        matchSearch &&
        matchCategory &&
        matchPrice
      );
    });
  }, [
    products,
    search,
    category,
    maxPrice,
  ]);

  // ================= PAGINATION =================
  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  const startIndex =
    (currentPage - 1) *
    productsPerPage;

  const endIndex =
    startIndex + productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );

  // RESET PAGE
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, maxPrice]);

  // ================= NAVIGATION =================
  const handleCardClick = useCallback(
    (id) => {
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  // ================= LOADING CARD =================
  const SkeletonCard = () => {
    return (
      <div className="animate-pulse bg-white rounded-3xl border p-4 shadow-sm">

        <div className="h-52 bg-gray-200 rounded-2xl mb-4"></div>

        <div className="h-4 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        <div className="h-10 bg-gray-200 rounded-xl mt-5"></div>

      </div>
    );
  };

  // ================= FILTER UI =================
  const FilterContent = () => (
    <div className="p-5 space-y-6">

      {/* SEARCH */}
      <div>

        <label className="text-sm font-semibold text-gray-700 block mb-2">
          Search
        </label>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full pl-11 pr-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          />

        </div>

      </div>

      {/* CATEGORY */}
      <div>

        <label className="text-sm font-semibold text-gray-700 block mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full p-3 rounded-2xl border outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
        >

          {categories.map(
            (cat, index) => (
              <option
                key={index}
                value={cat}
              >
                {cat}
              </option>
            )
          )}

        </select>

      </div>

      {/* PRICE */}
      <div>

        <div className="flex justify-between mb-2">

          <label className="text-sm font-semibold text-gray-700">
            Max Price
          </label>

          <span className="text-purple-600 font-bold">
            ${maxPrice}
          </span>

        </div>

        <input
          type="range"
          min="0"
          max="3000"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(
              Number(e.target.value)
            )
          }
          className="w-full accent-purple-600"
        />

      </div>

      {/* CLEAR */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setMaxPrice(3000);
        }}
        className="w-full py-3 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition text-sm sm:text-base"
      >
        Clear Filters
      </button>

    </div>
  );

  // ================= ERROR =================
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-4">

        <div className="bg-white p-6 sm:p-8 rounded-3xl border shadow-sm text-center">

          <h2 className="text-xl sm:text-2xl font-bold text-red-500">
            {error}
          </h2>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 sm:py-6">

        {/* MOBILE FILTER BUTTON */}
        <div className="lg:hidden mb-5">

          <button
            onClick={() =>
              setShowFilters(true)
            }
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg"
          >

            <Filter size={18} />

            Filters

          </button>

        </div>

        <div className="flex gap-6">

          {/* SIDEBAR */}
          <div className="hidden lg:block w-[320px] shrink-0">

            <div className="sticky top-5 bg-white rounded-3xl border shadow-sm overflow-hidden">

              {/* HEADER */}
              <div className="p-5 border-b">

                <div className="flex items-center gap-3">

                  <div className="bg-purple-600 text-white p-3 rounded-2xl">
                    <SlidersHorizontal
                      size={18}
                    />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold">
                      Filters
                    </h2>

                    <p className="text-sm text-gray-500">
                      Smart filtering system
                    </p>

                  </div>

                </div>

              </div>

              <FilterContent />

            </div>

          </div>

          {/* MOBILE FILTER MODAL */}
          {showFilters && (
            <div className="fixed inset-0 bg-black/40 z-50 lg:hidden">

              <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between p-5 border-b">

                  <h2 className="text-xl font-bold">
                    Filters
                  </h2>

                  <button
                    onClick={() =>
                      setShowFilters(false)
                    }
                    className="p-2 rounded-xl bg-gray-100"
                  >
                    <X size={20} />
                  </button>

                </div>

                <FilterContent />

              </div>

            </div>
          )}

          {/* MAIN */}
          <main className="flex-1 min-w-0">

            {/* HERO */}
            <div className="bg-white rounded-3xl border shadow-sm p-5 sm:p-6 mb-8">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                  <div className="flex items-center gap-2 text-purple-600 mb-3">

                    <Sparkles size={18} />

                    <span className="font-medium text-sm sm:text-base">
                      Modern Ecommerce UI
                    </span>

                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                    Discover Premium Products
                  </h1>

                  <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Smooth and modern shopping experience
                  </p>

                </div>

                <div className="bg-gray-100 rounded-2xl px-5 py-4 min-w-[120px] w-fit">

                  <p className="text-sm text-gray-500">
                    Products
                  </p>

                  <h2 className="text-2xl font-bold">
                    {loading
                      ? "..."
                      : filteredProducts.length}
                  </h2>

                </div>

              </div>

            </div>

            {/* PRODUCTS */}
            {loading ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {Array.from({
                  length: 6,
                }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}

              </div>

            ) : currentProducts.length ===
              0 ? (

              <div className="bg-white rounded-3xl border shadow-sm p-10 text-center">

                <h2 className="text-xl sm:text-2xl font-bold">
                  No Products Found
                </h2>

              </div>

            ) : (

              <>
                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

                  {currentProducts.map(
                    (item) => (

                      <div
                        key={item.id}
                        className="cursor-pointer hover:-translate-y-1 transition duration-200"
                      >

                        <ProductCard
                          item={item}
                          onClick={() =>
                            handleCardClick(
                              item.id
                            )
                          }
                        />

                      </div>
                    )
                  )}

                </div>

                {/* PAGINATION */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mt-10 flex-wrap">

                  {/* PREV */}
                  <button
                    disabled={
                      currentPage === 1
                    }
                    onClick={() =>
                      setCurrentPage(
                        (prev) =>
                          prev - 1
                      )
                    }
                    className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-semibold transition text-sm sm:text-base
                    ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white border hover:bg-purple-600 hover:text-white"
                    }`}
                  >

                    <ChevronLeft
                      size={18}
                    />

                    <span className="hidden sm:block">
                      Prev
                    </span>

                  </button>

                  {/* PAGE NUMBERS */}
                  {Array.from(
                    {
                      length:
                        totalPages,
                    },
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentPage(
                            index + 1
                          )
                        }
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl font-bold transition text-sm sm:text-base
                        ${
                          currentPage ===
                          index + 1
                            ? "bg-purple-600 text-white"
                            : "bg-white border hover:bg-purple-100"
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
                        (prev) =>
                          prev + 1
                      )
                    }
                    className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-semibold transition text-sm sm:text-base
                    ${
                      currentPage ===
                      totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white border hover:bg-purple-600 hover:text-white"
                    }`}
                  >

                    <span className="hidden sm:block">
                      Next
                    </span>

                    <ChevronRight
                      size={18}
                    />

                  </button>

                </div>
              </>
            )}

          </main>

        </div>

      </div>

    </div>
  );
}

export default Product;