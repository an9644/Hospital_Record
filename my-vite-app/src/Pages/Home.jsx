import { useState } from "react";
import Layout from "../Layout/layout.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import RiderSelection from "../Components/RiderSelection.jsx";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex bg-gradient-to-t from-cyan-700 to-cyan-900 min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      <div className={`flex-1 transition-all ${sidebarOpen ? "ml-64" : "ml-0"} bg-cyan-800`}>
        <Layout setSidebarOpen={setSidebarOpen} />
        
        <RiderSelection/>

        {/* Main Content */}
        <div className="p-6 bg-gray-200 rounded-lg shadow-md h-80 flex items-center justify-center">
          <p className="text-gray-500">No Data Available</p>
        </div>

        {/* Footer */}
        <div className="bg-cyan-900 text-white text-center p-3 text-sm shadow-inner mt-80">
          Copyright &copy; 2024. All rights reserved to <span className="font-bold">Caredata Informatics</span>
        </div>
      </div>
    </div>
  );
}
