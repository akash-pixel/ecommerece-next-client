import Head from 'next/head';
import "../../globals.css"
import OrderTable from '@/components/admin-panel/order/OrderTable';
import OrderHeader from '@/components/admin-panel/order/OrderHeader';

export default function OrdersPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>Orders</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                <OrderHeader />
                <OrderTable />
            </div>
        </div>
    );
}
