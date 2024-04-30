"use client"

import { addDiscount, getDiscountById, updateDiscount } from "@/axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export interface IDiscount {
    Id?: number
    Name: string
    Description: string
    IsActive: boolean
}

export interface IDiscountEditProps {
    id?: number
}

export default function AddEditDiscount(props: IDiscountEditProps) {

    const [discount, setDiscount] = useState<IDiscount>({
        Name: "",
        Description: "",
        IsActive: true
    });

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (discount.Id) {
            await updateDiscount(discount);

        } else {
            const newDiscount = await addDiscount(discount);
            if (!newDiscount) return;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDiscount({ ...discount, [e.target.name]: e.target.value });
    }

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setDiscount({ ...discount, [e.target.name]: e.target.checked });
    }

    useEffect(() => {
        if (props.id) {
            getDiscountById(props.id).then((disc) => {
                console.log(disc)
                if (disc) {
                    setDiscount(disc as any)
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
                    value={discount.Name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name"
                    required
                />

                <label htmlFor="description">Description</label>
                <input
                    name="Description"
                    type="text"
                    value={discount.Description}
                    onChange={(e) => handleChange(e)}
                    placeholder="Description"
                />

                <label htmlFor="Active">Active</label>
                <input
                    name="Active"
                    type="checkbox"
                    value={discount.Description}
                    onChange={(e) => handleCheckbox(e)}
                    placeholder="Active"
                />

                <button type="submit">{discount.Id ? "Edit" : "Add"}</button>
            </form>
        </div>
    );

}