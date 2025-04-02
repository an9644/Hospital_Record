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
    modeOfPayment: "Cash",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/transactions", {
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
        modeOfPayment: "Cash",
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
            {[
              { name: "receiptNumber", label: "Receipt Number", type: "text" },
              { name: "patientName", label: "Patient Name", type: "text" },
              { name: "clientName", label: "Client Name", type: "text" },
              { name: "visitDate", label: "Visit Date", type: "date" },
              { name: "visitID", label: "Visit ID", type: "text" },
              { name: "grossAmount", label: "Gross Amount", type: "number" },
              { name: "discount", label: "Discount", type: "number" },
              { name: "netAmount", label: "Net Amount", type: "number" },
              { name: "paidAmount", label: "Paid Amount", type: "number" },
              { name: "dueAmount", label: "Due Amount", type: "number" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-cyan-900 font-semibold">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  className="border p-2 rounded bg-gray-100 text-cyan-900 w-full"
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-cyan-900 font-semibold">Mode of Payment</label>
              <select
                name="modeOfPayment"
                className="border p-2 rounded bg-gray-100 text-cyan-900 w-full"
                value={formData.modeOfPayment}
                onChange={handleChange}
                required
              >
                {["Cash", "Card", "UPI", "Bank Transfer"].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="col-span-2 bg-cyan-600 text-white p-2 rounded font-bold w-44 ml-[84vh] hover:bg-cyan-700 transition-all">
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
