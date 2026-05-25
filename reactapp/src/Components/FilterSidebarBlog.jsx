import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

import ProductCard from "../Components/ProductCard";
import FilterSidebar from "../Components/FilterSidebar";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ ACTIVE FILTERS ONLY
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setLoading(true);

        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        if (isMounted) setProducts(data.products);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  // Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || item.category === category) &&
        item.price <= maxPrice
      );
    });
  }, [products, search, category, maxPrice]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Skeleton
  const SkeletonCard = () => (
    <div className="animate-pulse rounded-[32px] bg-white/60 border p-5">
      <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-red-500 text-2xl font-bold">{error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb] relative">

      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full"></div>

      {/* Layout */}
      <div className="flex gap-6 p-5 w-full">

        {/* SIDEBAR */}
        <div className="hidden lg:block w-[420px] flex-shrink-0">
          <div className="sticky top-5 bg-white/70 backdrop-blur-2xl rounded-[35px] border shadow-xl overflow-hidden">

            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-600 text-white">
                  <SlidersHorizontal size={18} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Filters</h2>
                  <p className="text-sm text-gray-500">Smart filtering system</p>
                </div>
              </div>
            </div>

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

        {/* MAIN */}
        <main className="flex-1">

          {/* HERO */}
          <div className="relative rounded-[35px] bg-white/70 backdrop-blur-2xl border p-8 mb-8 overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex justify-between items-center">

              <div>
                <div className="flex items-center gap-2 text-purple-600 mb-3">
                  <Sparkles size={18} />
                  Modern Ecommerce UI
                </div>

                <h1 className="text-4xl font-black">
                  Discover Premium Products
                </h1>

                <p className="text-gray-500 mt-2">
                  Clean filters, smooth UI, modern experience
                </p>
              </div>

              <div className="bg-white shadow-lg px-6 py-4 rounded-2xl">
                <p className="text-sm text-gray-500">Products</p>
                <h2 className="text-2xl font-bold">
                  {filteredProducts.length}
                </h2>
              </div>

            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className="cursor-pointer hover:-translate-y-2 transition"
                  >
                    <ProductCard item={item} />
                  </div>
                ))}

          </div>

          {/* EMPTY */}
          {!loading && filteredProducts.length === 0 && (
            <div className="text-center mt-20 text-gray-500">
              No products found
            </div>
          )}

        </main>

      </div>
    </div>
  );
}

export default Product;
