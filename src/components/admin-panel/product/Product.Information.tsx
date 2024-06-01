"use client"
import { IProductCreate } from '@/interface/product';
import React from 'react';


interface IProps {
    Product: IProductCreate
}

const ProductInformation = ({ Product }: IProps) => {



    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Product information</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" placeholder="Product title" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">SKU</label>
                        <input type="text" placeholder="SKU" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Barcode</label>
                        <input type="text" placeholder="0123-4567" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Description (Optional)</label>
                    <textarea placeholder="Product Description" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
