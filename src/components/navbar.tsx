"use client";


import "../app/globals.css";
import React, { useEffect, useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { IUserState } from "@/redux/slice/user.slice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [clientUsername, setClientUsername] = useState("");

    const user = useAppSelector((state: { user: IUserState }) => state.user);

    useEffect(() => {
        setClientUsername(user.Username);
    }, [user.Username]);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-blue-500 z-10 h-16">
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
                        className="border rounded-full px-3 py-2 w-1/2 text-gray-700"
                    />
                </div>
                <div className="hidden md:flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-2">
                        <FaUserCircle size={24} />
                        <span>
                            {clientUsername ? clientUsername : "G"}
                        </span>
                    </div>
                    <FaShoppingCart size={24} />
                    <div className="relative">
                        <FaEllipsisV size={24} onClick={toggleMenu} className="cursor-pointer" />
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg" onClick={() => toggleMenu()}>
                                <Link href="/wishlist" passHref className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Wishlist
                                </Link>
                                <Link href={(user.IsAdmin && "/admin") + "/orders"} passHref className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Orders
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
                            className="border rounded-full px-3 py-2 w-full mb-2 text-gray-700"
                        />
                        <div className="flex items-center space-x-2 mb-2">
                            <FaUserCircle size={24} />
                            <span>
                                {clientUsername ? clientUsername : "1"}
                            </span>
                        </div>
                        <nav className="flex flex-col space-y-2">
                            <a href="/">Home</a>
                            <a href="/shop">Shop</a>
                            <a href="/contact">Contact</a>
                            <a href="/wishlist">Wishlist</a>
                            <a href="/orders">Orders</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
