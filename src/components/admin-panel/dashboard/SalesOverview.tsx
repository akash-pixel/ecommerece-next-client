const SalesOverview = ({ totalSales = 0, numOrders = 0, totalRevenue = 0 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-medium text-gray-700">Total Sales</h3>
        <p className="text-xl font-bold text-gray-900">{totalSales}</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-medium text-gray-700">Number of Orders</h3>
        <p className="text-xl font-bold text-gray-900">{numOrders}</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-medium text-gray-700">Total Revenue</h3>
        <p className="text-xl font-bold text-gray-900">{totalRevenue}</p>
      </div>
    </div>
  );
};


export default SalesOverview;