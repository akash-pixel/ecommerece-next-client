"use client"
import { getProducts } from "@/axios";
import ProductCard from "@/components/product.cart.component";
import { useEffect, useState } from "react"

export default function ProductListPage() {

    const [productList, setProductList] = useState<any[]>([]);


    useEffect(() => {

        getProducts().then(productList => {

            if (!productList) return;

            setProductList(productList);
        })

    }, []);

    return <>
        <div>
            Product
            {
                productList.map(product => <ProductCard product={product} />)
            }
        </div>
    </>
}