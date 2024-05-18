import React from 'react';

const Variants = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Options</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Size</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Enter size</label>
                        <input type="text" placeholder="Enter size" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                </div>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">Add another option</button>
            </div>
        </div>
    );
};

export default Variants;
