import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Sparkles,
  Send,
  ChevronRight,
} from "lucide-react";

function BlogDetail() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const [views, setViews] = useState(120);

  const [commentForm, setCommentForm] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ali Khan",
      comment:
        "Amazing blog design and very useful information.",
    },
    {
      id: 2,
      name: "Ahmed",
      comment:
        "Modern UI and very smooth reading experience.",
    },
  ]);

  // ================= FETCH BLOG =================

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dummyjson.com/posts/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();

        setBlog(data);

        const relatedRes = await fetch(
          "https://dummyjson.com/posts"
        );

        const relatedData = await relatedRes.json();

        setRelatedBlogs(
          relatedData.posts.filter(
            (item) => item.id !== data.id
          )
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // ================= LIVE VIEWS =================

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ================= COMMENT =================

  const handleCommentChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitComment = (e) => {
    e.preventDefault();

    const newComment = {
      id: Date.now(),
      name: commentForm.name,
      comment: commentForm.comment,
    };

    setComments([newComment, ...comments]);

    setCommentForm({
      name: "",
      comment: "",
    });
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f5f0] p-6 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="h-[500px] rounded-[40px] bg-gray-200"></div>

          <div className="mt-10 space-y-5">
            <div className="h-10 w-2/3 rounded-xl bg-gray-200"></div>

            <div className="h-5 w-full rounded-xl bg-gray-200"></div>

            <div className="h-5 w-5/6 rounded-xl bg-gray-200"></div>

            <div className="h-5 w-4/6 rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  // ================= ERROR =================

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0]">
        <div className="bg-white px-10 py-8 rounded-[30px] shadow-xl">
          <h1 className="text-red-500 text-2xl font-bold">
            {error}
          </h1>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-[#f8f5f0] overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative">
        {/* BACKGROUND EFFECT */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 blur-3xl rounded-full"></div>

        <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-purple-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
          {/* BACK BUTTON */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-10"
          >
            <ArrowLeft size={18} />

            <span className="font-semibold">
              Back To Blogs
            </span>
          </Link>

          {/* HERO CARD */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
            {/* IMAGE */}
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={`https://picsum.photos/1200/700?random=${blog.id}`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* TAG */}
              <div className="absolute top-8 left-8 bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-xl">
                E Tech Blog
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <CalendarDays size={16} />
                    May 2026
                  </div>

                  <div className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Clock3 size={16} />
                    5 min read
                  </div>

                  <div className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Eye size={16} />
                    {views} Views
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-5xl">
                  {blog.title}
                </h1>
              </div>
            </div>

            {/* BLOG CONTENT */}
            <div className="p-8 md:p-14">
              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold transition ${
                    liked
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 hover:bg-red-100"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={liked ? "white" : "transparent"}
                  />

                  Like
                </button>

                <button
                  onClick={() => setSaved(!saved)}
                  className={`px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold transition ${
                    saved
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 hover:bg-orange-100"
                  }`}
                >
                  <Bookmark size={18} />

                  Save
                </button>

                <button className="px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold bg-gray-100 hover:bg-purple-100 transition">
                  <Share2 size={18} />

                  Share
                </button>
              </div>

              {/* BLOG BODY */}
              <div className="max-w-4xl">
                <p className="text-gray-500 text-lg leading-[40px]">
                  {blog.body}
                </p>

                <div className="mt-10 p-8 rounded-[30px] bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles size={24} />

                    <h2 className="text-2xl font-bold">
                      E Tech Software Company
                    </h2>
                  </div>

                  <p className="leading-[35px] text-white/90">
                    We create modern ecommerce websites,
                    premium UI/UX experiences, responsive
                    web applications, and scalable frontend
                    solutions for businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COMMENTS ================= */}

          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            {/* COMMENT FORM */}
            <div className="bg-white rounded-[35px] p-8 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 mb-3">
                Leave Comment
              </h2>

              <p className="text-gray-500 mb-10">
                Share your thoughts about this blog
              </p>

              <form
                onSubmit={submitComment}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  value={commentForm.name}
                  onChange={handleCommentChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-5 rounded-3xl border border-gray-200 outline-none focus:border-orange-400"
                />

                <textarea
                  rows="6"
                  name="comment"
                  value={commentForm.comment}
                  onChange={handleCommentChange}
                  placeholder="Write your comment..."
                  required
                  className="w-full p-5 rounded-3xl border border-gray-200 outline-none resize-none focus:border-orange-400"
                ></textarea>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-5 rounded-3xl flex items-center gap-3 hover:scale-105 transition duration-300 shadow-xl"
                >
                  <Send size={20} />

                  Submit Comment
                </button>
              </form>
            </div>

            {/* COMMENTS */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Reader Comments
              </h2>

              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white rounded-[30px] p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {comment.name}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Blog Reader
                        </p>
                      </div>

                      <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full flex items-center gap-2">
                        <MessageCircle size={16} />

                        Comment
                      </div>
                    </div>

                    <p className="text-gray-600 leading-[32px]">
                      {comment.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RELATED BLOGS ================= */}

          <div className="mt-24">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
                  Related Blogs
                </p>

                <h2 className="text-5xl font-black mt-3">
                  Continue Reading
                </h2>
              </div>

              <Link
                to="/blog"
                className="hidden md:flex items-center gap-2 text-orange-500 font-semibold"
              >
                View All Blogs

                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="overflow-hidden h-64">
                    <img
                      src={`https://picsum.photos/600/400?random=${item.id}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-orange-500 text-sm font-semibold mb-4">
                      <Sparkles size={16} />

                      E Tech Article
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 line-clamp-3 leading-[30px]">
                      {item.body}
                    </p>

                    <button className="mt-6 text-orange-500 font-bold flex items-center gap-2">
                      Read More

                      <ChevronRight size={18} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;