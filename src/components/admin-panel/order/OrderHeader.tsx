import React from 'react';
import { FaMoneyBillWave, FaCheckCircle, FaUndo, FaTimesCircle } from 'react-icons/fa';

const HeaderBar = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-around items-center">
            <div className="flex items-center justify-around">
                <div className="mr-8 text-center">
                    <div className="text-2xl font-semibold">56</div>
                    <div className="text-gray-600">Pending Payment</div>
                </div>
                <FaMoneyBillWave className="text-blue-500 text-2xl" />
            </div>
            <div className="flex items-center justify-around">
                <div className="h-10 border-r border-gray-300 mx-2"></div>
                <div className="mr-8 text-center">
                    <div className="text-2xl font-semibold">12,689</div>
                    <div className="text-gray-600">Completed</div>
                </div>
                <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
            <div className="flex items-center justify-around">
                <div className="h-10 border-r border-gray-300 mx-2"></div>
                <div className="mr-8 text-center">
                    <div className="text-2xl font-semibold">124</div>
                    <div className="text-gray-600">Refunded</div>
                </div>
                <FaUndo className="text-yellow-500 text-2xl" />
            </div>
            <div className="flex items-center justify-around">
                <div className="h-10 border-r border-gray-300 mx-2"></div>
                <div className="mr-8 text-center">
                    <div className="text-2xl font-semibold">32</div>
                    <div className="text-gray-600">Failed</div>
                </div>
                <FaTimesCircle className="text-red-500 text-2xl" />
            </div>
        </div>
    );
};

export default HeaderBar;
