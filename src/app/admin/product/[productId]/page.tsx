"use client"

import { HttpRequest } from "@/app/http.request.service";
import "../../../globals.css"
import Head from 'next/head';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setProductState } from "@/redux/slice/product.slice";
import { useRouter } from 'next/navigation';
import Header from "@/components/admin-panel/product/product-form/Header";
import ProductInformation from "@/components/admin-panel/product/product-form/Product.Information";
import Variants from "@/components/admin-panel/product/product-form/Variants";
import MediaUpload from "@/components/admin-panel/product/product-form/MediaUpload";
import Pricing from "@/components/admin-panel/product/product-form/Pricing";
import Organize from "@/components/admin-panel/product/product-form/Organize";
import Inventory from "@/components/admin-panel/product/product-form/Inventory";


interface IRouteParams {
    productId: string;
}

export default function EditProduct() {

    const { productId } = useParams<any>();
    const router = useRouter();


    const dispatch = useAppDispatch();

    async function fetchProduct() {
        if (!productId) return router.push("/admin/product");

        let product = await HttpRequest.getProductById(productId);
        if (!product) return router.push("/admin/product");

        dispatch(setProductState(product));
    }

    useEffect(() => {
        fetchProduct();

    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-4 ">
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