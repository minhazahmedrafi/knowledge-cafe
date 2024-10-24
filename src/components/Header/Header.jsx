import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b-2 max-w-7xl mx-auto mb-8">
      <h1 className="text-3xl font-bold ">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
