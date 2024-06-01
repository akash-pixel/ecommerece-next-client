import "../../globals.css"
import Filter from '@/components/admin-panel/product/Filter';
import Pagination from '@/components/admin-panel/product/Pagination';
import ProductTable from '@/components/admin-panel/product/Product.Table';
import Head from 'next/head';

export default function Home() {
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
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">+ Add Product</button>
                </div>
                <ProductTable />
                <Pagination />
            </div>
        </div>
    );
}
