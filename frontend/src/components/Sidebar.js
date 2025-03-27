import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-600 rounded">Home</Link>
        </li>
        <li>
          <Link to="/metrics" className="block p-2 hover:bg-gray-600 rounded">Metrics</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
