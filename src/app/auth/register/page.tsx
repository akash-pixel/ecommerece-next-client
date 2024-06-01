
"use client";
import "../../globals.css"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { setUserState } from "@/store/user.slice";
import { signUp } from "@/axios";


// export default function Register() {
//     const router = useRouter();
//     const [user, setUser] = useState({
//         FirstName: "",
//         LastName: "",
//         PhoneNumber: "",
//         Username: "",
//         Password: "",
//         ConfirmPassword: ""
//     });
//     const dispatch = useAppDispatch();

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         if (user.Password !== user.ConfirmPassword) {
//             return;
//         }
//         const result = await signUp(user);

//         if (!result) { return }

//         dispatch(setUserState(result))

//         router.push("/");
//     };


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     value={user.FirstName}
//                     onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
//                     placeholder="firstName"
//                 />

//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     value={user.LastName}
//                     onChange={(e) => setUser({ ...user, LastName: e.target.value })}
//                     placeholder="lastName"
//                 />

//                 <label htmlFor="phone">Phone</label>
//                 <input
//                     id="phone"
//                     type="text"
//                     value={user.PhoneNumber}
//                     onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
//                     placeholder="email"
//                 />

//                 <label htmlFor="username">Username</label>
//                 <input
//                     id="username"
//                     type="text"
//                     value={user.Username}
//                     onChange={(e) => setUser({ ...user, Username: e.target.value })}
//                     placeholder="username"
//                 />

//                 <label htmlFor="password">Password</label>
//                 <input
//                     name="Password"
//                     type="password"
//                     value={user.Password}
//                     onChange={(e) => setUser({ ...user, Password: e.target.value })}
//                     placeholder="password"
//                 />

//                 <label htmlFor="password">Confirm Password</label>
//                 <input
//                     name="CofirmPassword"
//                     type="password"
//                     value={user.ConfirmPassword}
//                     onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
//                     placeholder="password"
//                 />
//                 {user.Password !== user.ConfirmPassword && <p>Oops! It seems like your password and confirmation password don't match. Please make sure they're identical before proceeding.</p>}

//                 <button type="submit">Sign Up</button>
//                 <Link href="/auth/login">Visit login page</Link>
//             </form>
//         </div>
//     )

// }


const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-gray-500 font-medium mb-6 text-left">
                    Create Account
                </h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="John"
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
                            placeholder="Doe"
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
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Retype Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
