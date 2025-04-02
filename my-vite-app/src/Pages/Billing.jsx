import React, { useState } from "react";
import Layout from "../Layout/layout.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import { Link } from "react-router-dom";

export default function Billing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    receiptNumber: "",
    patientName: "",
    clientName: "",
    visitDate: "",
    visitID: "",
    grossAmount: "",
    discount: "",
    netAmount: "",
    paidAmount: "",
    dueAmount: "",
    modeOfPayment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save transaction");
      }
  
      const newTransaction = await response.json();
      setTransactions([...transactions, newTransaction]);
  
      // Reset form after submission
      setFormData({
        receiptNumber: "",
        patientName: "",
        clientName: "",
        visitDate: "",
        visitID: "",
        grossAmount: "",
        discount: "",
        netAmount: "",
        paidAmount: "",
        dueAmount: "",
        modeOfPayment: "",
      });
  
      alert("Transaction saved successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving transaction");
    }
  };
  

  return (
    <div className="flex bg-gradient-to-t from-cyan-700 to-cyan-900 min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      <div className={`flex-1 transition-all ${sidebarOpen ? "ml-64" : "ml-0"} bg-white`}>
        <Layout setSidebarOpen={setSidebarOpen} />
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-cyan-900 font-bold ml-[85vh]">Add New Transaction</h2>
          <Link to="/transactions" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-all">View Transactions</Link>
        </div>
        <div className="bg-cyan-600 p-7 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 mt-4 bg-cyan-200 p-6 shadow-md rounded-lg">
          <input
        type="text"
        name="receiptNumber"
        placeholder="Receipt Number"
        required
        className="border p-2 rounded bg-gray-100 text-cyan-900 w-full"
        value={formData.receiptNumber}
        onChange={handleChange}
      />            <input type="text" name="patientName" placeholder="Patient Name" required className="border p-2  text-cyan-900  rounded bg-gray-100" value={formData.patientName} onChange={handleChange} />
            <input type="text" name="clientName" placeholder="Client Name" className="border p-2 rounded bg-gray-100 text-cyan-900 " value={formData.clientName} onChange={handleChange} />
            <input type="date" name="visitDate" className="border p-2 rounded  bg-gray-100 text-cyan-900" value={formData.visitDate} onChange={handleChange} />
            <input type="text" name="visitID" placeholder="Visit ID" className="border p-2 rounded bg-gray-100 text-cyan-900 " value={formData.visitID} onChange={handleChange} />
            <input type="number" name="grossAmount" placeholder="Gross Amount" className="border p-2 rounded bg-gray-100 text-cyan-900 " value={formData.grossAmount} onChange={handleChange} />
            <input type="number" name="discount" placeholder="Discount" className="border p-2 rounded bg-gray-100 text-cyan-900 " value={formData.discount} onChange={handleChange} />
            <input type="number" name="netAmount" placeholder="Net Amount" className="border p-2 rounded bg-gray-100  text-cyan-900 " value={formData.netAmount} onChange={handleChange} />
            <input type="number" name="paidAmount" placeholder="Paid Amount" className="border p-2 rounded bg-gray-100 text-cyan-900" value={formData.paidAmount} onChange={handleChange} />
            <input type="number" name="dueAmount" placeholder="Due Amount" className="border p-2 rounded  bg-gray-100 text-cyan-900" value={formData.dueAmount} onChange={handleChange} />
            <input type="text" name="modeOfPayment" placeholder="Mode of Payment" className="border p-2 rounded bg-gray-100 text-cyan-900" value={formData.modeOfPayment} onChange={handleChange} />
            <button type="submit" className="col-span-2 bg-cyan-600 text-white p-2 rounded font-bold w-44 ml-[84vh]  hover:bg-cyan-700 transition-all">Add Transaction</button>
          </form>
        </div>
      </div>
    </div>
  );
}
