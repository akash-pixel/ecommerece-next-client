import MainOrderPage from '@/components/admin-panel/order/MainOrderPage';
import Head from 'next/head';

import "../../../globals.css"


export default function Home() {
    return (
        <div>
            <Head>
                <title>Order Details</title>
                <meta name="description" content="Order details page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainOrderPage />
        </div>
    );
}
