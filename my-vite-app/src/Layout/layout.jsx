import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Layout({ setSidebarOpen }) {
  return (
    <div className="flex-1 transition-all">
      {/* Navbar */}
      <div className=" bg-cyan-800 text-white flex items-center justify-between p-4 shadow-xl ">
        <div className="flex items-center space-x-4">
          <FiMenu
            className="text-2xl cursor-pointer hover:text-gray-300 transition-all"
            onClick={() => setSidebarOpen(true)}
          />
          <Link to="/" className="font-bold text-xl tracking-wide">
            Oncolab Diagnostics LLC
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <h2 className="text-sm font-medium tracking-wide">ACCOUNT1 / Rider Name</h2>
          <img
            src="../assets/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
          <span className="font-semibold text-lg">THOMAS</span>
        </div>
      </div>

      {/* Action Buttons with Navigation */}
      <div className="flex justify-center font-bold bg-cyan-500 text-white p-4 space-x-4 overflow-x-auto rounded-lg shadow-lg">
        <Link to="/billing" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Create</Link>
        <Link to="/bills" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Bills</Link>
        <Link to="/print" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Print</Link>
        <Link to="/email" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Email</Link>
        <Link to="/clear" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Clear</Link>
        <Link to="/dispatch" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Dispatch</Link>
        <Link to="/fetch" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Fetch</Link>
        <Link to="/issues" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Issues</Link>
        <Link to="/close" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-md shadow-lg transition-all">Close</Link>
      </div>
    </div>
  );
}
