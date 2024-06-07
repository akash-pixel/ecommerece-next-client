// "use client"
// import AddEditCategory from "@/components/category.add.edit.component";
// import { useParams } from "next/navigation";


// export default function Category() {

//     const { categoryId } = useParams();

//     return (
//         <div>
//             <h2>Category</h2>

//             <AddEditCategory id={+categoryId} />


//         </div>
//     )

// }


import CategoryTable from "@/components/admin-panel/category/CategoryTable";
import "../../globals.css"
import Filter from '@/components/admin-panel/product/product-list/Filter';
import Pagination from '@/components/admin-panel/product/product-list/Pagination';
import ProductTable from '@/components/admin-panel/product/product-list/Product.Table';
import Head from 'next/head';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 mt-20">
            <Head>
                <title>E-commerce Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                {/* <Filter /> */}
                <div className="mb-4 flex justify-between items-center">
                    {/* <div className="text-lg font-semibold">Category</div> */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Search Category"
                            className="p-2 w-full border border-gray-300 rounded"
                        />
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">+ Add Category</button>
                </div>
                <CategoryTable />
                <Pagination />
            </div>
        </div>
    );
}
