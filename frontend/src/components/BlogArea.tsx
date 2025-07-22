import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const BlogArea = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/blog/${res.data.id}`);
    } catch (error) {
      toast.error(" Content at least 10 characters.");

    }
  };


  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ✍️ Write a New Blog
      </h2>
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a catchy title..."
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Blog Content
        </label>
        <textarea
          id="content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Share your thoughts here..."
          required
        ></textarea>
      </div>

      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          🚀 PUBLISH POST
        </button>
      </div>
    </div>
  );
};
