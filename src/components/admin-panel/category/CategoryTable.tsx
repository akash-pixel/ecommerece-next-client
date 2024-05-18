import React from 'react';

const CategoryTable = () => {
    const categories = [
        { name: 'Travel', description: 'Shoes', stock: true, totalEarnings: 31063, totalProducts: 942 },
        { name: 'Smart Phone', description: 'Electronics', stock: false, totalEarnings: 5829, totalProducts: 587 },
        { name: 'Shoes', description: 'Electronics', stock: true, totalEarnings: 35946, totalProducts: 468 },
        { name: 'Jewellery', description: 'Accessories', stock: false, totalEarnings: 46658, totalProducts: 851 },
        { name: 'Home Decor', description: 'Accessories', stock: true, totalEarnings: 41867, totalProducts: 519 },
        { name: 'Grocery', description: 'Electronics', stock: true, totalEarnings: 63474, totalProducts: 810 },
        { name: 'Games', description: 'Household', stock: false, totalEarnings: 29540, totalProducts: 804 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Earning</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                                        <div className="text-sm  text-gray-500">{category.description}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.totalEarnings}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.totalProducts}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 justify-between">
                                    <button className='mr-2'>Edit</button>
                                    <button>Delete</button>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
