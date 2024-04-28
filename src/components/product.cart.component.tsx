"use client"

import { IProductResponse } from "@/axios";

export default function ProductCard({ product }: { product: IProductResponse }) {

    return (
        <div>
            <span>
                Name: {product.Name}
            </span>
            <span>
                Price: {product.Price}
            </span>
        </div>
    );

}