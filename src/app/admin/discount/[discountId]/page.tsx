"use client"
import AddEditDiscount from "@/components/discount.add.edit.component";
import { useParams } from "next/navigation";


export default function Discount() {

    const { discountId } = useParams();

    return (
        <div>
            <h2>Discount</h2>

            <AddEditDiscount id={+discountId} />


        </div>
    )

}