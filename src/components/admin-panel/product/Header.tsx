import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold">Add a new Product</h2>
            <div className="space-x-2">
                <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg">Discard</button>
                <button className="px-4 py-2 text-purple-600 border border-gray-300 rounded-lg">Save draft</button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Publish product</button>
            </div>
        </div>
    );
};

export default Header;
