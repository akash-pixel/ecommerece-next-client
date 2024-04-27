
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setToken, signUp } from "@/axios";
import { ROLE } from "@/constant";


export default function Register() {
    const router = useRouter();
    const [user, setUser] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Username: "",
        Password: "",
        ConfirmPassword: ""
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (user.Password !== user.ConfirmPassword) {
            return;
        }
        const result = await signUp(user);
        router.push("/");
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={user.FirstName}
                    onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
                    placeholder="firstName"
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={user.LastName}
                    onChange={(e) => setUser({ ...user, LastName: e.target.value })}
                    placeholder="lastName"
                />

                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="text"
                    value={user.PhoneNumber}
                    onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
                    placeholder="email"
                />

                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={user.Username}
                    onChange={(e) => setUser({ ...user, Username: e.target.value })}
                    placeholder="username"
                />

                <label htmlFor="password">Password</label>
                <input
                    name="Password"
                    type="password"
                    value={user.Password}
                    onChange={(e) => setUser({ ...user, Password: e.target.value })}
                    placeholder="password"
                />

                <label htmlFor="password">Confirm Password</label>
                <input
                    name="CofirmPassword"
                    type="password"
                    value={user.ConfirmPassword}
                    onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
                    placeholder="password"
                />
                {user.Password !== user.ConfirmPassword && <p>Oops! It seems like your password and confirmation password don't match. Please make sure they're identical before proceeding.</p>}

                <button type="submit">Sign Up</button>
                <Link href="/auth/login">Visit login page</Link>
            </form>
        </div>
    )

}