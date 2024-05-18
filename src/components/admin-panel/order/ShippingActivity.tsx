import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const activities = [
    { status: 'Order was placed', date: 'Tuesday 11:29 AM', description: 'Your order has been placed successfully', isCompleted: true },
    { status: 'Pick-up', date: 'Wednesday 11:29 AM', description: 'Pick-up scheduled with courier', isCompleted: true },
    { status: 'Dispatched', date: 'Thursday 11:29 AM', description: 'Item has been picked up by courier', isCompleted: true },
    { status: 'Package arrived', date: 'Saturday 15:20 AM', description: 'Package arrived at an Amazon facility, NY', isCompleted: true },
    { status: 'Dispatched for delivery', date: 'Today 14:12 PM', description: 'Package has left an Amazon facility, NY', isCompleted: true },
    { status: 'Delivery', date: 'Tomorrow', description: 'Package will be delivered by tomorrow', isCompleted: false },
];

export default function ShippingActivity() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Shipping activity</h2>
            <div>
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start mb-6">
                        <div className="mr-4">
                            {activity.isCompleted ? (
                                <FaCheckCircle className="text-purple-500" />
                            ) : (
                                <FaCircle className="text-gray-400" />
                            )}
                        </div>
                        <div>
                            <p className="font-medium">{activity.status}</p>
                            <p>{activity.description}</p>
                            <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
