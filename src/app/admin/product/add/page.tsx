"use client"

import Header from "@/components/admin-panel/product/product-form/Header";
import "../../../globals.css"
import Head from 'next/head';
import { useEffect, useState } from "react";
import ProductInformation from "@/components/admin-panel/product/product-form/Product.Information";
import MediaUpload from "@/components/admin-panel/product/product-form/MediaUpload";
import Variants from "@/components/admin-panel/product/product-form/Variants";
import Pricing from "@/components/admin-panel/product/product-form/Pricing";
import Organize from "@/components/admin-panel/product/product-form/Organize";
import Inventory from "@/components/admin-panel/product/product-form/Inventory";
import "./styles.css"

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

    useEffect(() => {

    }, [])

    return (
        <div className="add-product">
            <Head>
                <title>Add New Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <Header />
                <div className="content-grid">
                    <div className="main-section">
                        <ProductInformation />
                        <MediaUpload />
                        <Variants />
                        <Inventory />
                    </div>
                    <div className="side-section">
                        <Pricing />
                        <Organize />
                    </div>
                </div>
            </div>
        </div>
    );
}
