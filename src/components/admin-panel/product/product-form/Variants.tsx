import { IProductCreate } from '@/interface/product';
import React from 'react';
import "./styles.css"

interface IProps {
    Product?: IProductCreate
}

const Variants = ({ }: IProps) => {
    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Variants</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Options</label>
                        <select className="w-full p-2 border border-gray-300 rounded bg-white text-gray-500" >
                            <option>Size</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Enter size</label>
                        <input type="text" placeholder="Enter size" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                </div>
                <button className="btn">Add another option</button>
            </div>
        </div>
    );
};

export default Variants;
