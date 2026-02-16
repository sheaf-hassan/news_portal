import React, { useState } from "react";
import {
  useCreateBlogMutation,
  useGetBlogsQuery,
} from "../store/services/blogsApi";

const Blog = () => {
  const { data: blogs, isError, isLoading } = useGetBlogsQuery();
  //   console.log("news data", blogs);

  const [blog, setBlog] = useState("");
  const [createBlog] = useCreateBlogMutation();

  const handleBlog = async () => {
    const payload = {
      content: blog,
    };

    await createBlog(payload);
  };

  return (
    <div>
      <h2>Blog List</h2>

      {blogs?.map((blog) => (
        <div key={blog?._id}>
          <p>{blog?._id}</p>
          <p>{blog?.content}</p>
        </div>
      ))}

      <h2 className="mt-10 mb-2">Add Blog</h2>
      <input
        type="text"
        className="border border-black p-2 mr-5"
        value={blog}
        onChange={(event) => setBlog(event.target.value)}
      />
      <button className="p-2 border border-black" onClick={handleBlog}>
        Add Blog
      </button>
    </div>
  );
};

export default Blog;
