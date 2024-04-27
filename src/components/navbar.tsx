"use client"

import { useAppSelector } from "@/store/store";

export default function Navbar() {

    const authState = useAppSelector((state) => state.auth.authState);
    return (
        <div>
            Navbar
            <div>
                You are now {authState ? "Logged  In" : "Logged Out"}
            </div>
        </div>
    )
}