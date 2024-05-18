import React from 'react';

const ProductTable = () => {
    const products = [
        { name: 'Air Jordan', category: 'Shoes', stock: true, sku: 31063, qty: 942 },
        { name: 'Amazon Fire TV', category: 'Electronics', stock: false, sku: 5829, qty: 587 },
        { name: 'Apple iPad', category: 'Electronics', stock: true, sku: 35946, qty: 468 },
        { name: 'Apple Watch Series 7', category: 'Accessories', stock: false, sku: 46658, qty: 851 },
        { name: 'BANGE Anti Theft Backpack', category: 'Accessories', stock: true, sku: 41867, qty: 519 },
        { name: 'Canon EOS Rebel T7', category: 'Electronics', stock: true, sku: 63474, qty: 810 },
        { name: 'Dohioue Wall Clock', category: 'Household', stock: false, sku: 29540, qty: 804 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {product.category}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.stock ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                                    {product.stock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.qty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
