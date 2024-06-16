"use client"

import React from "react";

import "../globals.css"
import "./style.css";
import ProductContainer from "@/components/product-container/product-container.component";

const Shop = () => {
    const url = "https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.jpg?s=1024x1024&w=is&k=20&c=llPbp8xlpfeqd1-hTre0zYbQMi-0-RGaPCaElbFxFxU=";

    const products = [
        { Name: "Name 1", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Stylish sofa", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Stylish sofa", Price: 100, Image: url }
    ];

    return (
        <div className="container">
            <h1>Shop</h1>
            <ProductContainer products={products} />
        </div>
    );
}



export default Shop;
