"use client"

import Filter from "@/components/admin-panel/product/product-list/Filter";
import "../../globals.css"
import Head from 'next/head';
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductTable from "@/components/admin-panel/product/product-list/Product.Table";
import Pagination from "@/components/admin-panel/product/product-list/Pagination";
import { HttpRequest } from "@/app/http.request.service";
import "./styles.css"

export default function Product() {

    const [pageNumber, setPageNumber] = useState(1);

    const [productList, setProductList] = useState([
        { Id: 1, Name: 'Air Jordan', Category: 'Shoes', SKU: "31063", Quantity: 942 },
        { Id: 2, Name: 'Amazon Fire TV', Category: 'Electronics', SKU: "5829", Quantity: 587 },
        { Id: 3, Name: 'Apple iPad', Category: 'Electronics', SKU: "35946", Quantity: 468 },
        { Id: 4, Name: 'Apple Watch Series 7', Category: 'Accessories', SKU: "46658", Quantity: 851 },
        { Id: 5, Name: 'BANGE Anti Theft Backpack', Category: 'Accessories', SKU: "41867", Quantity: 519 },
        { Id: 6, Name: 'Canon EOS Rebel T7', Category: 'Electronics', SKU: "63474", Quantity: 810 },
        { Id: 7, Name: 'Dohioue Wall Clock', Category: 'Household', SKU: "29540", Quantity: 804 }
    ]);

    async function fetchProducts() {
        const products = await HttpRequest.getProducts();

        if (products) {
            setProductList([...productList, ...products])
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className="min-h-screen">
            <Head>
                <title>E-commerce Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Filter />
                <div className="mb-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">Products</div>
                    <Link href="/admin/product/add" className="link-button">+ Add Product</Link>
                </div>
                <ProductTable Products={productList} />
                <Pagination SetPageNumber={setPageNumber} PageNumber={pageNumber} />
            </div>
        </div>
    );
}
