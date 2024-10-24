import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleMarkDown }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-16">
      <img
        className="w-full mb-8 rounded"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex justify-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleBookmark(blog)}
            className="text-2xl ml-2 text-red-500"
          >
            <CiBookmarkPlus />
          </button>
        </div>
      </div>
      <h2
        className="text-4xl mb-4 font-semibold
      "
      >
        {title}
      </h2>
      <p className="mb-2">
        {hashtags.map((tag, id) => (
          <span key={id}>
            <a href="">{`#${tag} `}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkDown(reading_time, id)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
