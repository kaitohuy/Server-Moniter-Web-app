import { FaTachometerAlt, FaCog, FaFileAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar bg-blue-100 text-gray-900 w-64 p-6 rounded-r-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li className="flex items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200">
          <FaTachometerAlt className="mr-3 text-blue-600" /> 
          <span className="text-lg">Dashboard</span>
        </li>
        <li className="flex items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200">
          <FaCog className="mr-3 text-blue-600" /> 
          <span className="text-lg">Settings</span>
        </li>
        <li className="flex items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200">
          <FaFileAlt className="mr-3 text-blue-600" /> 
          <span className="text-lg">Reports</span>
        </li>
      </ul>
    </div>
  );
}