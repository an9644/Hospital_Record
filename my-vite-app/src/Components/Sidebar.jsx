import { FiX, FiChevronDown } from "react-icons/fi";
import {Link } from 'react-router-dom';

export default function Sidebar({ sidebarOpen, setSidebarOpen, dropdownOpen, setDropdownOpen }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-t from-cyan-700 to-cyan-900 text-white transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="text-lg font-bold">Menu</span>
        <FiX className="text-2xl cursor-pointer hover:text-gray-300 transition-all" onClick={() => setSidebarOpen(false)} />
      </div>
      <ul className="mt-4">
        <Link to="/" className="p-4 hover:bg-cyan-800 cursor-pointer">Dashboard</Link>
        <li className="p-4 hover:bg-cyan-800 cursor-pointer">Settings</li>
        <li className="p-4 hover:bg-cyan-800 cursor-pointer flex justify-between items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
          More <FiChevronDown className={`${dropdownOpen ? "rotate-180" : ""} transition-transform`} />
        </li>
        {dropdownOpen && (
          <ul className="bg-cyan-700">
            <li className="p-3 pl-6 hover:bg-cyan-600 cursor-pointer">Profile</li>
            <li className="p-3 pl-6 hover:bg-cyan-600 cursor-pointer">Notifications</li>
          </ul>
        )}
      </ul>
    </div>
  );
}
