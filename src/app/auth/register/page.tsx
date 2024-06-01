
"use client";

import "../../globals.css"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { HttpRequest } from "@/app/http.request.service";
import { setUserState } from "@/redux/slice/user.slice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";



const Register = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const router = useRouter();
    const [user, setUser] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Username: "",
        Password: "",
        ConfirmPassword: ""
    });

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (user.Password !== user.ConfirmPassword) {
            return;
        }
        const result = await HttpRequest.signUp(user);

        if (!result) { return; }

        dispatch(setUserState(result))

        router.push("/");
    };

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function toggleConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-gray-500 font-medium mb-6 text-left">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Firstname"
                            value={user.FirstName}
                            onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Last Name"
                            value={user.LastName}
                            onChange={(e) => setUser({ ...user, LastName: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700">
                            Phone Number (Optional)
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="123-456-7890"
                            value={user.PhoneNumber}
                            onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="johndoe123"
                            value={user.Username}
                            onChange={(e) => setUser({ ...user, Username: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <div className="flex items-center space-x-2 mt-1">

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="Enter Password"
                                value={user.Password}
                                onChange={(e) => setUser({ ...user, Password: e.target.value })}
                            />
                            <button
                                type="button" onClick={togglePassword} className="pl-2 lr-2" >
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="text-gray-700 w-1/4">
                            Confirm Password
                        </label>
                        <div className="flex items-center space-x-2 mt-1">

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="Retype Password"
                                value={user.ConfirmPassword}
                                onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
                            />
                            <button type="button" onClick={toggleConfirmPassword} className="pl-2 lr-2">
                                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Create Account
                    </button>
                    <span className="mt-2 text-sm">
                        <p>
                            Already have an account?
                            <Link href="/auth/login" className="text-blue-500 underline"> Sign in here</Link>
                        </p>

                    </span>
                </form>
            </div>
        </div>
    );
};

export default Register;
