import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/metrics" className="text-white">Metrics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
