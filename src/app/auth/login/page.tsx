"use client"
import React, { useState } from 'react';
import { signIn } from '../../../axios';
import router from 'next/router';
import Link from 'next/link';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await signIn({
            Username: username,
            Password: password
        })
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <Link href="/auth/register">Visit Register page</Link>
        </form>
    );
};

export default Login;
