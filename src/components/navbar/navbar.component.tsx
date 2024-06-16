"use client";

import React, { useEffect, useState } from 'react';
import './style.css';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IUserState } from '@/redux/slice/user.slice';
import { useAppSelector } from '@/redux/hooks';

const Navbar = () => {
    const user = useAppSelector((state: { user: IUserState }) => state.user);

    const [navItems, setNavItems] = useState([
        { title: "Home", link: "/", ForAdmin: false },
        { title: "Shop", link: "/shop", ForAdmin: false },
        { title: "About", link: "/about", ForAdmin: false },
        { title: "Contact", link: "/contact", ForAdmin: false },
    ]);

    const adminNavItems = [
        { title: "Product", link: "/admin/product", ForAdmin: true },
        { title: "Order", link: "/admin/order", ForAdmin: true }
    ];

    useEffect(() => {
        if (user.IsAdmin) {
            setNavItems([...navItems, ...adminNavItems]);
        }
    }, [user]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img
                        src="https://i.pinimg.com/236x/eb/10/3a/eb103a58c53f7c1d9e2c80d692e4771a.jpg"
                        alt="Furniro"
                        className="logo"
                    />
                    <span className="brand-name">Furniro</span>
                </div>
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.title}>
                            <a href={item.link} className="nav-link">{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="nav-icons">
                    <FaUser className="nav-icon" />
                    <FaSearch className="nav-icon" />
                    <FaHeart className="nav-icon" />
                    <FaShoppingCart className="nav-icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
