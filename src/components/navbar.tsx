"use client"

import { useAppSelector } from "@/store/store";
import "../app/globals.css"

// export default function Navbar() {

//     const username = useAppSelector((state) => state.user.Username);
//     return (
//         <div className="navbar">
//             <div>
//                 <a >
//                     Logo
//                 </a>
//             </div>
//             <div>
//                 <h1>
//                     Urban Nest
//                 </h1>
//             </div>
//             <div className="user-cart">
//                 <a href="#" className="cart-icon">Cart</a>
//                 <a href="#" className="user">
//                     Guest
//                     {/* {username ? "\n" + username : ""} */}
//                 </a>
//             </div>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaShoppingCart, FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md z-10 h-16">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between h-full">
                <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Link href="/" passHref>
                        E-Commerce
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
                    <input
                        type="text"
                        placeholder="Products, Brands, Category"
                        className="border rounded px-3 py-2 w-1/2 text-gray-700"
                    />
                </div>
                <div className="hidden md:flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-2">
                        <FaUserCircle size={24} />
                        <span>Username</span>
                    </div>
                    <FaShoppingCart size={24} />
                    <div className="relative">
                        <FaEllipsisV size={24} onClick={toggleMenu} className="cursor-pointer" />
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                <Link href="/wishlist" passHref>
                                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Wishlist</a>
                                </Link>
                                <Link href="/orders" passHref>
                                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Orders</a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:hidden text-white">
                    <FaBars size={24} onClick={toggleNav} />
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
                    <div className="px-4 py-2">
                        <input
                            type="text"
                            placeholder="Products, Brands, Category"
                            className="border rounded px-3 py-2 w-full mb-2 text-gray-700"
                        />
                        <div className="flex items-center space-x-2 mb-2">
                            <FaUserCircle size={24} />
                            <span>Username</span>
                        </div>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/">Home</Link>
                            <Link href="/shop">Shop</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/wishlist">Wishlist</Link>
                            <Link href="/orders">Orders</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
