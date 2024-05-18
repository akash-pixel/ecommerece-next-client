export default function OrdersPlaced() {
    const orders = [
        { id: '#9957', date: 'Nov 29, 2022', status: 'OUT FOR DELIVERY', spent: '$59.28' },
        { id: '#9956', date: 'Nov 28, 2022', status: 'DELIVERED', spent: '$89.60' },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Orders placed</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 text-left">ORDER</th>
                        <th className="py-2 text-left">DATE</th>
                        <th className="py-2 text-left">STATUS</th>
                        <th className="py-2 text-left">SPENT</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className="py-2">{order.id}</td>
                            <td className="py-2">{order.date}</td>
                            <td className="py-2 text-purple-600">{order.status}</td>
                            <td className="py-2">{order.spent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
