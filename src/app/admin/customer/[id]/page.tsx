import MainCustomerPage from '@/components/admin-panel/customer/MainCustomerPage';
import Head from 'next/head';
import "../../../globals.css"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Customer Details</title>
                <meta name="description" content="Customer details page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainCustomerPage />
        </div>
    );
}
