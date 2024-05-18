export default function CustomerOverview() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-6">
                <img className="w-16 h-16 rounded-full" src="/avatar.png" alt="Customer Avatar" />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">Lorine Hischke</h2>
                    <p>Customer ID #634759</p>
                </div>
            </div>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <div className="mr-4 text-center">
                        <p className="text-xl font-semibold">184</p>
                        <p className="text-gray-500">Orders</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold">$12,378</p>
                        <p className="text-gray-500">Spent</p>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <p><strong>Username:</strong> lorine.hischke</p>
                <p><strong>Email:</strong> <a href="mailto:vafgot@vultukir.org" className="text-blue-500">vafgot@vultukir.org</a></p>
                <p><strong>Status:</strong> <span className="text-green-500">ACTIVE</span></p>
                <p><strong>Contact:</strong> (123) 456-7890</p>
                <p><strong>Country:</strong> USA</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Edit Details</button>
        </div>
    );
}
