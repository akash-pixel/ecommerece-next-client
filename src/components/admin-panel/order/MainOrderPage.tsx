import OrderDetails from './OrderDetails';
import CustomerDetails from './CustomerDetails';
import ShippingActivity from './ShippingActivity';

export default function MainOrderPage() {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <OrderDetails />
                <CustomerDetails />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ShippingActivity />
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Billing address</h2>
                    <p>45 Roker Terrace</p>
                    <p>Latheronwheel</p>
                    <p>KW5 8NW, London</p>
                    <p>UK</p>
                    <p className="mt-4">Mastercard</p>
                    <p>Card Number: ******4291</p>
                </div>
            </div>
        </div>
    );
}
