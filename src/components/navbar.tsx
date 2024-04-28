"use client"

import { useAppSelector } from "@/store/store";

export default function Navbar() {

    const authState = useAppSelector((state) => state.auth.authState);
    const username = useAppSelector((state) => state.user.Username);
    return (
        <div>
            Navbar
            <div>
                You are now {authState ? "Logged  In" : "Logged Out"}
                {username ? "\n" + username : ""}
            </div>
        </div>
    )
}