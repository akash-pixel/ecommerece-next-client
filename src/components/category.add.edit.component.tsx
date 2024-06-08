"use client"

import { HttpRequest } from "@/app/http.request.service";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export interface ICategory {
    Id?: string,
    Name: string,
    Description: string
}

export interface ICategoryEditProps {
    id?: number
}

export default function AddEditCategory(props: ICategoryEditProps) {

    const [category, setCategory] = useState<ICategory>({
        Name: "",
        Description: "",
    });

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (category.Id) {
            await HttpRequest.updateCategory(category);

        } else {
            const newCategory = await HttpRequest.addCategory(category);
            if (!newCategory) return;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (props.id) {
            HttpRequest.getCategoryById(props.id).then((categ) => {
                console.log(categ)
                if (categ) {
                    setCategory(categ as any)
                }
            })


        }
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    name="Name"
                    type="text"
                    value={category.Name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name"
                    required
                />

                <label htmlFor="description">Description</label>
                <input
                    name="Description"
                    type="text"
                    value={category.Description}
                    onChange={(e) => handleChange(e)}
                    placeholder="Description"
                />

                <button type="submit">{category.Id ? "Edit" : "Add"}</button>
            </form>
        </div>
    );

}