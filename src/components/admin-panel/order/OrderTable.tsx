import React from 'react';

const orders = [
    {
        id: 1,
        order: '1001',
        date: '2024-05-18',
        customer: 'John Doe',
        payment: '$120.00',
        status: 'Completed',
        method: 'Credit Card',
    },
    {
        id: 2,
        order: '1002',
        date: '2024-05-17',
        customer: 'Jane Smith',
        payment: '$75.50',
        status: 'Pending',
        method: 'PayPal',
    },
    // Add more orders as needed
];

const OrderTable = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Orders</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Add Order
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ORDER</th>
                            <th className="py-2 px-4 border-b">DATE</th>
                            <th className="py-2 px-4 border-b">CUSTOMER</th>
                            <th className="py-2 px-4 border-b">PAYMENT</th>
                            <th className="py-2 px-4 border-b">STATUS</th>
                            <th className="py-2 px-4 border-b">METHOD</th>
                            <th className="py-2 px-4 border-b">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b text-center">{order.order}</td>
                                <td className="py-2 px-4 border-b text-center">{order.date}</td>
                                <td className="py-2 px-4 border-b text-center">{order.customer}</td>
                                <td className="py-2 px-4 border-b text-center">{order.payment}</td>
                                <td className="py-2 px-4 border-b text-center">{order.status}</td>
                                <td className="py-2 px-4 border-b text-center">{order.method}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <button className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900 ml-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
