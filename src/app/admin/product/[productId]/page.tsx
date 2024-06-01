"use client"

import { HttpRequest } from "@/app/http.request.service";
import "../../../globals.css"
import Header from '@/components/admin-panel/product/Header';
import Inventory from '@/components/admin-panel/product/Inventory';
import MediaUpload from '@/components/admin-panel/product/MediaUpload';
import Organize from '@/components/admin-panel/product/Organize';
import Pricing from '@/components/admin-panel/product/Pricing';
import ProductInformation from '@/components/admin-panel/product/Product.Information';
import Variants from '@/components/admin-panel/product/Variants';
import Head from 'next/head';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IRouteParams {
    productId: string;
}

export default function EditProduct() {

    const [product, setProduct] = useState<any>({
        Name: "",
        SKU: "",
        Price: 0,
        Quantity: 0,
        Description: "",
    });

    const { productId } = useParams<any>()

    useEffect(() => {
        if (!product) return;

        HttpRequest.getProductById(productId).then(product => {
            console.log({ product })
            setProduct(product);
        })
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-4 mt-20">
            <Head>
                <title>Edit Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto">
                <Header />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        <ProductInformation />
                        <MediaUpload />
                        <Variants />
                        <Inventory />
                    </div>
                    <div className="lg:col-span-1 space-y-4">
                        <Pricing />
                        <Organize />
                    </div>
                </div>
            </div>
        </div>
    );
}