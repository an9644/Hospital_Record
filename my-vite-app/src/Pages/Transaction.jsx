import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Layout from "../Layout/layout";

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch all transactions on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/transactions");
        if (!res.ok) alert("Failed to fetch transactions");
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  // Handle search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      // If search term is empty, fetch all transactions
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    } else {
      // If there's a search term, fetch filtered results
      const res = await fetch(`/api/transactions/search?query=${searchTerm}`);
      const data = await res.json();
      setTransactions(data);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
        <div className={`flex-1 transition-all ${sidebarOpen ? "ml-64" : "ml-0"} bg-cyan-800`}>
          <Layout setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="mb-4 p-6 flex space-x-4">
          <input
            type="text"
            placeholder="Search by Patient Name or Receipt Number"
            className="p-2 border rounded w-full bg-gray-100 text-cyan-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all"
          >
            Search
          </button>
        </div>
        <table className="w-full p-5 border-collapse border border-cyan-500 text-cyan-900">
          <thead>
            <tr className="bg-cyan-600 text-white">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Receipt Number</th>
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Client Name</th>
              <th className="border p-2">Visit Date</th>
              <th className="border p-2">Visit ID</th>
              <th className="border p-2">Gross Amount</th>
              <th className="border p-2">Discount</th>
              <th className="border p-2">Net Amount</th>
              <th className="border p-2">Paid Amount</th>
              <th className="border p-2">Due Amount</th>
              <th className="border p-2">Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="12" className="text-center py-6">No Transactions Available</td>
              </tr>
            ) : (
              transactions.map((transaction, index) => (
                <tr key={transaction._id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{transaction.receiptNumber}</td>
                  <td className="border p-2">{transaction.patientName}</td>
                  <td className="border p-2">{transaction.clientName}</td>
                  <td className="border p-2">{new Date(transaction.visitDate).toLocaleDateString()}</td>
                  <td className="border p-2">{transaction.visitID}</td>
                  <td className="border p-2">{transaction.grossAmount}</td>
                  <td className="border p-2">{transaction.discount}</td>
                  <td className="border p-2">{transaction.netAmount}</td>
                  <td className="border p-2">{transaction.paidAmount}</td>
                  <td className="border p-2">{transaction.dueAmount}</td>
                  <td className="border p-2">{transaction.modeOfPayment}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transaction;
