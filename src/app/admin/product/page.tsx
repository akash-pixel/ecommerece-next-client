"use client"

import "../../globals.css"
import Filter from '@/components/admin-panel/product/product-list/Filter';
import Pagination from '@/components/admin-panel/product/product-list/Pagination';
import ProductTable from '@/components/admin-panel/product/product-list/Product.Table';
import Head from 'next/head';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Product() {

    const [pageNumber, setPageNumber] = useState(1);

    const productList = [
        { Id: 1, Name: 'Air Jordan', Category: 'Shoes', SKU: "31063", Quantity: 942 },
        { Id: 2, Name: 'Amazon Fire TV', Category: 'Electronics', SKU: "5829", Quantity: 587 },
        { Id: 3, Name: 'Apple iPad', Category: 'Electronics', SKU: "35946", Quantity: 468 },
        { Id: 4, Name: 'Apple Watch Series 7', Category: 'Accessories', SKU: "46658", Quantity: 851 },
        { Id: 5, Name: 'BANGE Anti Theft Backpack', Category: 'Accessories', SKU: "41867", Quantity: 519 },
        { Id: 6, Name: 'Canon EOS Rebel T7', Category: 'Electronics', SKU: "63474", Quantity: 810 },
        { Id: 7, Name: 'Dohioue Wall Clock', Category: 'Household', SKU: "29540", Quantity: 804 },
    ];

    useEffect(() => {

    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>E-commerce Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                <Filter />
                <div className="mb-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">Products</div>
                    <Link href="/admin/product/add" className="px-4 py-2 bg-blue-500 text-white rounded-lg" >+ Add Product</Link>
                </div>
                <ProductTable Products={productList} />
                <Pagination SetPageNumber={setPageNumber} PageNumber={pageNumber} />
            </div>
        </div>
    );
}
