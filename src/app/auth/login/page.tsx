"use client"

import "../../globals.css"
import React, { useState } from 'react';
import Link from 'next/link';
import { setAuthState } from '@/redux/slice/auth.slice';

import { useRouter } from 'next/navigation'
import { HttpRequest } from "@/app/http.request.service";
import { makeToast } from "@/common/helper";
import { TOAST_TYPE } from "@/constant";
import { setUserState } from "@/redux/slice/user.slice";
import { useAppDispatch } from "@/redux/hooks";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const router = useRouter()

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await HttpRequest.signIn({
            Username: username,
            Password: password
        })

        if (!result) {
            makeToast("Invalid username or password", TOAST_TYPE.ERROR)
            return;
        }

        dispatch(setAuthState(true))
        dispatch(setUserState(result));

        router.push("/")
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-gray-500 font-medium mb-6 text-left">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-gray-900"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="flex items-center space-x-2 mt-1">

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-gray-900"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button" onClick={togglePassword} className="pl-2 lr-2" >
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>

                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                    <span className="mt-2 text-sm">
                        <p>
                            Don't have an account?
                            <Link href="/auth/register" className="text-blue-500 underline"> Sign up and get started!</Link>
                        </p>

                    </span>
                </form>
            </div>
        </div>
    );
};


export default Login;