import React from 'react';

const TopProducts = ({ products = [{ name: "Sample 1", id: 1 }] }) => {
    return (
        <div className="section">
            <h2>Top Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProducts;
