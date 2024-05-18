import React from 'react';

const Pagination = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mt-4">
            <div className="text-sm text-gray-700">Displaying 1 to 7 of 100 entries</div>
            <div className="inline-flex -space-x-px">
                <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100">Previous</button>
                {/* Add page numbers dynamically if needed */}
                <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">1</button>
                <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">2</button>
                <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100">3</button>
                <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100">Next</button>
            </div>
        </div>
    );
};

export default Pagination;
