import { IProductCreate } from '@/interface/product';
import React from 'react';

interface IProps {
    Product?: IProductCreate
}

const Pricing = ({ }: IProps) => {
    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Pricing</h3>
            <div className="space-y-4">
                <div className="product-info-item">
                    <label className="product-info-label">Base Price</label>
                    <input type="number" placeholder="Price" className="product-info-input" />
                </div>
                <div className="product-info-item">
                    <label className="product-info-label">Discounted Price</label>
                    <input type="number" placeholder="Discounted Price" className="product-info-input" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="product-info-label">Charge tax on this product</label>
                </div>
            </div>
        </div>

    );
};

export default Pricing;
