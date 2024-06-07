"use client"

import { IProductCreate } from '@/interface/product';
import React from 'react';
import './styles.css';

interface IProps {
    Product?: IProductCreate
}


const Inventory = ({ }: IProps) => {
    return (
        <div className="inventory-container">
            <h3 className="sub-heading">Inventory</h3>
            <div className="inventory-content">
                <div className="inventory-sidebar">
                    <button className="inventory-button active">Restock</button>
                    <button className="inventory-button">Shipping</button>
                    <button className="inventory-button">Global Delivery</button>
                    <button className="inventory-button">Attributes</button>
                    <button className="inventory-button">Advanced</button>
                </div>
                <div className="inventory-main">
                    <h4 className="inventory-options-title">Options</h4>
                    <div className="inventory-options">
                        <div>
                            <label className="inventory-label">Add to Stock</label>
                            <input type="number" placeholder="Quantity" className="inventory-input" />
                            <button className="inventory-confirm-button">Confirm</button>
                        </div>
                        <div className="inventory-info">
                            <p>Product in stock now: 54</p>
                            <p>Product in transit: 390</p>
                            <p>Last time restocked: 24th June, 2023</p>
                            <p>Total stock over lifetime: 2430</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
