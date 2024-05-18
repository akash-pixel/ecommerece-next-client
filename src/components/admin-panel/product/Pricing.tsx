import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Pricing</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Base Price</label>
                    <input type="number" placeholder="Price" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Discounted Price</label>
                    <input type="number" placeholder="Discounted Price" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="block text-gray-700">Charge tax on this product</label>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
