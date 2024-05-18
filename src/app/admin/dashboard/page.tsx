

import SalesOverview from "@/components/admin-panel/dashboard/SalesOverview";
import "../../globals.css"
import TopProducts from "@/components/admin-panel/dashboard/TopProduct";
import RecentOrders from "@/components/admin-panel/dashboard/RecentOrders";


const Header = () => {
    return (
        <header className="header">
            <h1>Ecommerce Dashboard</h1>
            {/* Add navigation links or user menu here */}
        </header>
    );
};

const CustomerInsights = ({ customerData = {} }) => {
    return (
        <div className="section">
            <h2>Customer Insights</h2>
            <p>Placeholder for customer insights chart (requires library like Chart.js or Recharts)</p>
        </div>
    );
};


// import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                            Products
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                            Orders
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                            Customers
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                            Reports
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

// export default Sidebar;



const Dashboard = ({ salesData = {}, productsData = [{}], customerData = {}, ordersData = [{}] }) => {


    return (
        <div className="flex flex-col h-screen">

            <h2>Dashboard</h2>

        </div>
    );

}

export default Dashboard;
