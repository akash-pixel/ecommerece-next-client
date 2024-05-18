"use client"

import "../../globals.css"
import React, { useState } from 'react';
import { signIn } from '../../../axios';
import Link from 'next/link';
import { useAppDispatch } from '@/store/store';
import { setAuthState } from '@/store/auth.slice';
import { setUserState } from '@/store/user.slice';
import { useRouter } from 'next/navigation'



// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useAppDispatch();
//     const router = useRouter()

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         const result = await signIn({
//             Username: username,
//             Password: password
//         })

//         if (!result) return;

//         dispatch(setAuthState(true))
//         dispatch(setUserState(result));

//         router.push("/")
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username:</label>
//             <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//             <Link href="/auth/register">Visit Register page</Link>
//         </form>
//     );
// };

// export default Login;


const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-gray-500 font-medium mb-6 text-left">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Login;