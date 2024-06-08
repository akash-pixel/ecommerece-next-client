"use client";

import React, { useEffect, useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { IUserState } from "@/redux/slice/user.slice";
import "./styles.css"

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
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link href="/" passHref>
                        E-Commerce
                    </Link>
                </div>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Products, Brands, Category"
                        className="navbar-search-input"
                    />
                </div>
                <div className="navbar-icons">
                    <div className="navbar-user">
                        <FaUserCircle size={24} />
                        <span>
                            {clientUsername ? clientUsername : "G"}
                        </span>
                    </div>
                    <FaShoppingCart size={24} />
                    <div className="navbar-menu">
                        <FaEllipsisV size={24} onClick={toggleMenu} className="cursor-pointer" />
                        {menuOpen && (
                            <div className="navbar-dropdown" onClick={() => toggleMenu()}>
                                <Link href="/wishlist" passHref className="navbar-dropdown-item">
                                    Wishlist
                                </Link>
                                <Link href={(user.IsAdmin && "/admin") + "/orders"} passHref className="navbar-dropdown-item">
                                    Orders
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="navbar-toggle">
                    <FaBars size={24} onClick={toggleNav} />
                </div>
            </div>
            {isOpen && (
                <div className="navbar-mobile">
                    <div className="navbar-mobile-container">
                        <input
                            type="text"
                            placeholder="Products, Brands, Category"
                            className="navbar-mobile-search"
                        />
                        <div className="navbar-mobile-user">
                            <FaUserCircle size={24} />
                            <span>
                                {clientUsername ? clientUsername : "1"}
                            </span>
                        </div>
                        <nav className="navbar-mobile-nav">
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
