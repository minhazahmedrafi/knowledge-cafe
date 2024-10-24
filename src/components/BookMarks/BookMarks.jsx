import Bookmark from "./Bookmark";

const BookMarks = ({ bookmarks, reading }) => {
  return (
    <>
      <div className="md:w-1/3 ml-10  bg-gray-100 p-6 rounded">
        <div className=" mb-10">
          <h3 className="text-2xl font-semibold ">Reading Time: {reading}</h3>
        </div>
        <h2 className="text-2xl mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
        {bookmarks.map((books, idx) => (
          <Bookmark key={idx} books={books}></Bookmark>
        ))}
        <br />
      </div>
    </>
  );
};

export default BookMarks;
