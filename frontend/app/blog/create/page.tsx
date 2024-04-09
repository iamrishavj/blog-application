"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateBlogPage = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/${data.slug}`);
    }
  };

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll no-scrollbar">
      <div className="flex flex-row justify-between">
        <Link
          href="/"
          className="top-0 left-0 mt-4 ml-4 py-2 px-4 bg-gray-500 text-white cursor-pointer rounded-lg"
        >
          Go Back
        </Link>
        <button
          className="top-0 right-0 mt-4 mr-4 py-2 px-4 bg-blue-500 text-white cursor-pointer rounded-lg"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      <div className="relative flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className="mb-4 p-8 text-5xl bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex gap-5 px-6 relative h-[700px]">
          <ReactQuill
            className="w-full"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
