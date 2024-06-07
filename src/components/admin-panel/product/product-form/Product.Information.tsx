"use client"
import { IProductCreate } from '@/interface/product';
import React from 'react';
import "./styles.css";


interface IProps {
    Product: IProductCreate
}

const ProductInformation = ({ Product }: IProps) => {



    return (
        <div className="product-info-container">
            <h3 className="sub-heading">Product information</h3>
            <div className="product-info-content">
                <div className="product-info-item">
                    <label className="product-info-label">Name</label>
                    <input type="text" placeholder="Product title" className="product-info-input" />
                </div>
                <div className="product-info-grid">
                    <div className="product-info-item">
                        <label className="product-info-label">SKU</label>
                        <input type="text" placeholder="SKU" className="product-info-input" />
                    </div>
                    <div className="product-info-item">
                        <label className="product-info-label">Barcode</label>
                        <input type="text" placeholder="0123-4567" className="product-info-input" />
                    </div>
                </div>
                <div className="product-info-item">
                    <label className="product-info-label">Description (Optional)</label>
                    <textarea placeholder="Product Description" className="product-info-textarea"></textarea>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
