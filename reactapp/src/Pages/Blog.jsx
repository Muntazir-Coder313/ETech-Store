import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  Search,
  Sparkles,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Heart,
  MessageCircle,
} from "lucide-react";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // SEARCH & SORT
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 9;

  const navigate = useNavigate();

  // ================= FETCH BLOGS =================
  useEffect(() => {
    let mounted = true;

    async function fetchBlogs() {
      try {
        setLoading(true);

        const res = await fetch(
          "https://dummyjson.com/posts"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        if (mounted) {
          setBlogs(data.posts || []);
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

    fetchBlogs();

    return () => {
      mounted = false;
    };
  }, []);

  // ================= FILTER & SORT =================
  const filteredBlogs = useMemo(() => {
    let filtered = blogs.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    // SORTING
    if (sort === "title") {
      filtered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "popular") {
      filtered.sort(
        (a, b) =>
          (b.reactions?.likes || 0) -
          (a.reactions?.likes || 0)
      );
    }

    if (sort === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [blogs, search, sort]);

  // ================= PAGINATION =================
  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const startIndex =
    (currentPage - 1) * blogsPerPage;

  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // RESET PAGE
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sort]);

  // ================= NAVIGATION =================
  const handleCardClick = useCallback(
    (id) => {
      navigate(`/Blog/${id}`);
    },
    [navigate]
  );

  // ================= LOADING CARD =================
  const SkeletonCard = () => {
    return (
      <div className="animate-pulse bg-white rounded-[30px] overflow-hidden shadow-md">
        <div className="h-60 bg-gray-200"></div>

        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>

          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>

          <div className="h-10 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  };

  // ================= ERROR =================
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f5f2]">
        <div className="bg-white p-10 rounded-[30px] shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-500">
            {error}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-black py-24">
        {/* BLUR EFFECT */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center items-center gap-2 text-orange-500 mb-5">
            <Sparkles size={18} />

            <span className="uppercase tracking-[4px] font-semibold">
              E Tech Blog
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Latest Articles &
            <br />
            Modern Insights
          </h1>

          <p className="text-gray-300 text-lg mt-8 max-w-3xl mx-auto leading-[35px]">
            Explore modern web development, ecommerce,
            UI/UX design, and technology articles from E
            Tech Software Company.
          </p>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-[30px] shadow-xl p-5 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
            {/* SEARCH */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full pl-12 pr-5 py-4 rounded-2xl bg-[#f7f5f2] outline-none border border-transparent focus:border-orange-500 transition-all"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* SORT */}
              <div className="flex items-center gap-3 bg-[#f7f5f2] px-5 py-4 rounded-2xl">
                <ArrowUpDown
                  size={18}
                  className="text-orange-500"
                />

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="bg-transparent outline-none font-medium"
                >
                  <option value="newest">
                    Newest
                  </option>

                  <option value="popular">
                    Most Popular
                  </option>

                  <option value="title">
                    A - Z
                  </option>
                </select>
              </div>

              {/* TOTAL BLOGS */}
              <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl">
                <p className="text-sm opacity-90">
                  Total Blogs
                </p>

                <h2 className="text-xl font-bold">
                  {loading
                    ? "..."
                    : filteredBlogs.length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOGS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : currentBlogs.length === 0 ? (
          <div className="bg-white rounded-[30px] shadow-md p-16 text-center">
            <h2 className="text-3xl font-black">
              No Blogs Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try searching something else.
            </p>
          </div>
        ) : (
          <>
            {/* BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentBlogs.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    handleCardClick(item.id)
                  }
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* IMAGE */}
                    <div className="relative overflow-hidden">
                      <img
                        src={`https://picsum.photos/600/400?random=${item.id}`}
                        alt={item.title}
                        className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      {/* CATEGORY */}
                      <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                        <CalendarDays size={16} />

                        <span>Tech Blog</span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-7">
                      {/* TAGS */}
                      <div className="flex gap-2 flex-wrap mb-4">
                        {item.tags?.slice(0, 2).map(
                          (tag, index) => (
                            <span
                              key={index}
                              className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              #{tag}
                            </span>
                          )
                        )}
                      </div>

                      {/* TITLE */}
                      <h2 className="text-2xl font-black text-gray-900 line-clamp-2 leading-tight">
                        {item.title}
                      </h2>

                      {/* DESCRIPTION */}
                      <p className="text-gray-600 mt-4 line-clamp-3 leading-[30px]">
                        {item.body}
                      </p>

                      {/* FOOTER */}
                      <div className="flex items-center justify-between mt-8">
                        <button className="bg-black hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                          Read More
                        </button>

                        {/* REACTIONS */}
                        <div className="flex items-center gap-5">
                          {/* LIKES */}
                          <div className="flex items-center gap-2 text-gray-700">
                            <Heart
                              size={18}
                              className="text-red-500"
                            />

                            <span className="font-semibold">
                              {item.reactions?.likes ||
                                0}
                            </span>
                          </div>

                          {/* DISLIKES */}
                          <div className="flex items-center gap-2 text-gray-700">
                            <MessageCircle
                              size={18}
                              className="text-orange-500"
                            />

                            <span className="font-semibold">
                              {item.reactions
                                ?.dislikes || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= PAGINATION ================= */}

            <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
              {/* PREV */}
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => prev - 1)
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all
                ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-orange-500 hover:text-white shadow-md"
                }`}
              >
                <ChevronLeft size={18} />
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`w-12 h-12 rounded-2xl font-bold transition-all
                    ${
                      currentPage === index + 1
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white hover:bg-orange-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}

              {/* NEXT */}
              <button
                disabled={
                  currentPage === totalPages
                }
                onClick={() =>
                  setCurrentPage((prev) => prev + 1)
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all
                ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-orange-500 hover:text-white shadow-md"
                }`}
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Blog;