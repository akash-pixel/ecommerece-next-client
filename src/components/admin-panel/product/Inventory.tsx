import React from 'react';

const Inventory = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Inventory</h3>
            <div className="flex">
                <div className="w-1/4 space-y-4">
                    <button className="w-full text-left px-4 py-2 text-gray-700 border-l-4 border-purple-600">Restock</button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 border-l-4 border-transparent">Shipping</button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 border-l-4 border-transparent">Global Delivery</button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 border-l-4 border-transparent">Attributes</button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 border-l-4 border-transparent">Advanced</button>
                </div>
                <div className="w-3/4 p-4 border-l">
                    <h4 className="text-md font-semibold mb-2">Options</h4>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Add to Stock</label>
                            <input type="number" placeholder="Quantity" className="w-full p-2 border border-gray-300 rounded" />
                            <button className="mt-2 px-4 py-2 text-white bg-purple-600 rounded-lg">Confirm</button>
                        </div>
                        <div className="text-gray-700">
                            <p>Product in stock now: 54</p>
                            <p>Product in transit: 390</p>
                            <p>Last time restocked: 24th June, 2023</p>
                            <p>Total stock over lifetime: 2430</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
