const Bookmark = ({ books }) => {
  const { title } = books;
  return (
    <div className="bg-white p-4 rounded mb-4">
      <h3 className="text-xl">{title}</h3>
    </div>
  );
};

export default Bookmark;
