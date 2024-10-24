import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleMarkDown }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleMarkDown={handleMarkDown}
          handleBookmark={handleBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
