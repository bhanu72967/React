import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">CRUD App</Link>
        <Link to="/add" className="bg-white text-blue-500 px-4 py-2 rounded">Add Item</Link>
      </div>
    </nav>
  );
};

export default NavBar;
