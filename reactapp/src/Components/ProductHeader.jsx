import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal, Sparkles } from "lucide-react";

import ProductCard from "../Components/ProductCard";
import FilterSidebar from "../Components/FilterSidebar";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  const navigate = useNavigate();

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    let mounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);

        // FAST FETCH
        const res = await fetch(
          "https://dummyjson.com/products?limit=12"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        // OPTIMIZED PRODUCTS
        const optimizedProducts = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          category: item.category,
          rating: item.rating,
          description: item.description,
          stock: item.stock,
        }));

        if (mounted) {
          setProducts(optimizedProducts);
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
      ...new Set(products.map((item) => item.category)),
    ];
  }, [products]);

  // ================= FILTER PRODUCTS =================
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      const matchPrice = item.price <= maxPrice;

      return matchSearch && matchCategory && matchPrice;
    });
  }, [products, search, category, maxPrice]);

  // ================= NAVIGATION =================
  const handleCardClick = useCallback(
    (id) => {
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  // ================= SKELETON =================
  const SkeletonCard = () => {
    return (
      <div className="animate-pulse bg-white rounded-3xl border p-4 shadow-sm">

        <div className="h-52 bg-gray-200 rounded-2xl mb-4"></div>

        <div className="h-4 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

        <div className="h-10 bg-gray-200 rounded-xl mt-5"></div>

      </div>
    );
  };

  // ================= ERROR =================
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">

        <div className="bg-white p-8 rounded-3xl border shadow-sm text-center">

          <h2 className="text-red-500 text-2xl font-bold">
            {error}
          </h2>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            Reload
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto p-4 lg:p-6">

        <div className="flex gap-6">

          {/* ================= SIDEBAR ================= */}
          <div className="hidden lg:block w-[320px] shrink-0">

            <div className="sticky top-5 bg-white rounded-3xl border shadow-sm overflow-hidden">

              {/* HEADER */}
              <div className="p-5 border-b">

                <div className="flex items-center gap-3">

                  <div className="bg-purple-600 text-white p-3 rounded-2xl">
                    <SlidersHorizontal size={18} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      Filters
                    </h2>

                    <p className="text-sm text-gray-500">
                      Smart filtering
                    </p>
                  </div>

                </div>

              </div>

              {/* FILTERS */}
              <div className="p-5">

                <FilterSidebar
                  search={search}
                  setSearch={setSearch}
                  category={category}
                  setCategory={setCategory}
                  categories={categories}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                />

              </div>

            </div>

          </div>

          {/* ================= MAIN ================= */}
          <main className="flex-1 min-w-0">

            {/* HERO */}
            <div className="bg-white rounded-3xl border shadow-sm p-6 mb-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                {/* LEFT */}
                <div>

                  <div className="flex items-center gap-2 text-purple-600 mb-3">

                    <Sparkles size={18} />

                    <span className="font-medium">
                      Modern Ecommerce UI
                    </span>

                  </div>

                  <h1 className="text-3xl md:text-4xl font-black">
                    Discover Premium Products
                  </h1>

                  <p className="text-gray-500 mt-2">
                    Fast, smooth and modern shopping experience
                  </p>

                </div>

                {/* RIGHT */}
                <div className="bg-gray-100 rounded-2xl px-6 py-4 min-w-[120px]">

                  <p className="text-sm text-gray-500">
                    Products
                  </p>

                  <h2 className="text-2xl font-bold">
                    {loading ? "..." : filteredProducts.length}
                  </h2>

                </div>

              </div>

            </div>

            {/* ================= PRODUCTS ================= */}
            {loading ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}

              </div>

            ) : filteredProducts.length === 0 ? (

              <div className="bg-white rounded-3xl border shadow-sm p-10 text-center">

                <h2 className="text-2xl font-bold">
                  No Products Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try changing filters
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setMaxPrice(3000);
                  }}
                  className="mt-5 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
                >
                  Clear Filters
                </button>

              </div>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredProducts.map((item) => (

                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className="cursor-pointer hover:-translate-y-1 transition duration-200"
                  >
                    <ProductCard item={item} />
                  </div>

                ))}

              </div>

            )}

          </main>

        </div>

      </div>

    </div>
  );
}

export default Product;