import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header bg-blue-200 text-gray-900 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
        <h1 className="text-3xl font-bold">System Monitor</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 p-2 rounded-r-md hover:bg-blue-600 transition duration-200">
          <FaSearch className="text-white" />
        </button>
      </div>
    </header>
  );
}