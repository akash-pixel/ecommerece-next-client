"use client"
import AddEditCategory from "@/components/category.add.edit.component";
import { useParams } from "next/navigation";


export default function Category() {

    const { categoryId } = useParams();

    return (
        <div>
            <h2>Category</h2>

            <AddEditCategory id={+categoryId} />


        </div>
    )

}