export default function CustomerDetails() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Customer details</h2>
            <div className="flex items-center mb-4">
                <div className="mr-4">
                    <img className="w-12 h-12 rounded-full" src="/avatar.png" alt="Customer Avatar" />
                </div>
                <div>
                    <p className="font-medium">Shamus Tuttle</p>
                    <p>Customer ID: #58909</p>
                </div>
            </div>
            <p>Email: <a href="mailto:Shamus889@yahoo.com" className="text-blue-500">Shamus889@yahoo.com</a></p>
            <p>Mobile: +1 (609) 972-22-22</p>
            <p className="mt-4">Shipping address: 45 Roker Terrace, Latheronwheel, KW5 8NW, London, UK</p>
            <p className="mt-2">Billing address: 45 Roker Terrace, Latheronwheel, KW5 8NW, London, UK</p>
            <p className="mt-2">Mastercard: ******4291</p>
        </div>
    );
}
