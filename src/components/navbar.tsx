"use client"

import { useAppSelector } from "@/store/store";
import "../app/globals.css"

export default function Navbar() {

    const username = useAppSelector((state) => state.user.Username);
    return (
        <div className="navbar">
            <div>
                <a >
                    Logo
                </a>
            </div>
            <div>
                <h1>
                    Urban Nest
                </h1>
            </div>
            <div className="user-cart">
                <a href="#" className="cart-icon">Cart</a>
                <a href="#" className="user">
                    Guest
                    {/* {username ? "\n" + username : ""} */}
                </a>
            </div>
        </div>
    )
}