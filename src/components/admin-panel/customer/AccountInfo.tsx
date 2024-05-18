export default function AccountInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
                <p className="text-xl font-semibold text-purple-600">$2345</p>
                <p className="text-gray-500">Credit Left</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Loyalty Program</h3>
                <p className="text-lg font-semibold text-green-600">PLATINUM MEMBER</p>
                <p className="text-gray-500">3000 points to next tier</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Wishlist</h3>
                <p className="text-xl font-semibold">15</p>
                <p className="text-gray-500">Items in wishlist</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Coupons</h3>
                <p className="text-xl font-semibold">21</p>
                <p className="text-gray-500">Coupons you win</p>
            </div>
        </div>
    );
}
