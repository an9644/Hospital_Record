const RiderSelection = ({ selectedRider, setSelectedRider }) => {
  const riders = ["John Doe", "Jane Smith", "Alice Johnson"];

  return (
    <div className="p-6  bg-cyan-100 rounded-lg shadow-lg">
      <label className="text-blcak font-semibold">Rider Name:</label>
      <select
        className="ml-2 p-2 border rounded bg-cyan-500 text-black"
        value={selectedRider}
        onChange={(e) => setSelectedRider(e.target.value)}
      >
        <option value="">Select Rider</option>
        {riders.map((rider) => (
          <option key={rider} value={rider}>{rider}</option>
        ))}
      </select>
      <button className="ml-4 px-4 py-2 border rounded bg-cyan-500 text-white hover:bg-cyan-600 transition-all">Refresh</button>
    </div>
  );
};

export default RiderSelection;
