"use client"

import Header from "@/components/admin-panel/product/product-form/Header";
import "../../../globals.css"
import Head from 'next/head';
import { useState } from "react";
import ProductInformation from "@/components/admin-panel/product/product-form/Product.Information";
import MediaUpload from "@/components/admin-panel/product/product-form/MediaUpload";
import Variants from "@/components/admin-panel/product/product-form/Variants";
import Pricing from "@/components/admin-panel/product/product-form/Pricing";
import Organize from "@/components/admin-panel/product/product-form/Organize";
import Inventory from "@/components/admin-panel/product/product-form/Inventory";

export interface IProductCreate {
    Name: string,
    SKU: string,
    Price: number,
    Quantity: number,
    Description: string
}

export default function AddProduct() {


    const [product, setProduct] = useState<IProductCreate>({
        Name: "",
        SKU: "",
        Price: 0,
        Quantity: 0,
        Description: "",
    });

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>Add New Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto">
                <Header />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        <ProductInformation Product={product} />
                        <MediaUpload Product={product} />
                        <Variants Product={product} />
                        <Inventory Product={product} />
                    </div>
                    <div className="lg:col-span-1 space-y-4">
                        <Pricing Product={product} />
                        <Organize Product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
