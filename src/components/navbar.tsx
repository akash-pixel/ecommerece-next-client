"use client"

import { useAppSelector } from "@/store/store";

export default function Navbar() {

    const username = useAppSelector((state) => state.user.Username);
    return (
        <div>
            Navbar
            <div>
                {username ? "\n" + username : ""}
            </div>
        </div>
    )
}