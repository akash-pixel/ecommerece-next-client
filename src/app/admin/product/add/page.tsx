"use client"

import { addProduct } from "@/axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

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
    const router = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const newProduct = addProduct(product);
        if (!newProduct) return;
        console.log("new product", newProduct);

        router.push("/");

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: parseFloat(e.target.value) });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    name="Name"
                    type="text"
                    value={product.Name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name"
                    required
                />

                <label htmlFor="description">Description</label>
                <input
                    name="Description"
                    type="text"
                    value={product.Description}
                    onChange={(e) => handleChange(e)}
                    placeholder="Description"
                />

                <label htmlFor="SKU">SKU</label>
                <input
                    name="SKU"
                    type="text"
                    value={product.SKU}
                    onChange={(e) => handleChange(e)}
                    placeholder="SKU"
                />

                <label htmlFor="Quantity">Quantity</label>
                <input
                    name="Quantity"
                    type="number"
                    value={product.Quantity}
                    onChange={(e) => handleNumberChange(e)}
                    placeholder="Quantity"
                    required min="0" step="2"
                />

                <label htmlFor="Price">Price</label>
                <input
                    name="Price"
                    type="number"
                    value={product.Price}
                    onChange={(e) => handleChange(e)}
                    required min="0" step="2"
                    placeholder="Price"
                />


                <button type="submit">Add</button>
            </form>

        </div>
    );

}