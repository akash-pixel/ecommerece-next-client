"use client"

import { IProductTableView } from '@/interface/product';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

interface IProps {
    Products: IProductTableView[]
}

const ProductTable = ({ Products: products }: IProps) => {

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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">{product.Name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {product.Category}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.Quantity ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                                    {product.Quantity ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.SKU}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.Quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Link href={`/admin/product/${product.Id}`}><FaEdit /></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
