import React from 'react';

const Filter = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mb-4">
            <div className="flex space-x-4">
                <select className="p-2 border border-gray-300 rounded">
                    <option>Status</option>
                    {/* Add other options here */}
                </select>
                <select className="p-2 border border-gray-300 rounded">
                    <option>Category</option>
                    {/* Add other options here */}
                </select>
                <select className="p-2 border border-gray-300 rounded">
                    <option>Stock</option>
                    {/* Add other options here */}
                </select>
            </div>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Search Product"
                    className="p-2 w-full border border-gray-300 rounded"
                />
            </div>
        </div>
    );
};

export default Filter;
