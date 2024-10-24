import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReading] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkDown = (time, id) => {
    setReading(reading + time);
    const newReadingTime = reading + time;
    setReading(newReadingTime);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkDown={handleMarkDown}
          handleBookmark={handleBookmark}
        ></Blogs>
        <BookMarks reading={reading} bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  );
}

export default App;
