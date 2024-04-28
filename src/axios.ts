"use client"
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import { WebRef } from "./constant";
import { WebRefService } from "./common/web.ref.service";
dotenv.config();

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(WebRef.TOKEN)
    }
});

export function setToken(token: string) {
    localStorage.setItem(WebRef.TOKEN, 'Bearer ' + token);
}

async function executeFunction<T>(cb: Promise<AxiosResponse<T>>): Promise<T | null> {

    return cb.then((res) => res.data).catch((error) => {
        if (error.response) {
            console.log("Data: ", error.response.data);
            console.log("Status: ", error.response.status);
            console.log("Error: ", error.response.headers);
        }
        else if (error.request) {
            console.log("Request Error: ", error.request);
        }
        else {
            console.log('Error', error.message);
        }
        console.log("Config: ", error.config);
        return null;
    });
}

export async function signIn(data: IUserLogin) {
    const result = await executeFunction<IAuthResponse>(axiosInstance.post('/auth/login', data));
    if (result?.access_token) {
        setToken(result.access_token)
        WebRefService.set(WebRef.USER_IDENTITY, { ...result, access_token: undefined });
    }
    return result;
}

export async function signUp(data: IUserRegister) {
    const result = await executeFunction<IAuthResponse>(axiosInstance.post('/auth/register', data));
    if (result?.access_token) {
        setToken(result.access_token);
        WebRefService.set(WebRef.USER_IDENTITY, { ...result, access_token: undefined });
    }
    return result;
}

export async function getProfile(): Promise<IAuthResponse | null> {
    return executeFunction(axiosInstance.get("/auth/profile"));
}


////////////////////////////////////////////////////////////////////////
//                         Interface
////////////////////////////////////////////////////////////////////////

export interface IUserRegister {
    FirstName: string,
    LastName: string,
    PhoneNumber: string,
    Username: string,
    Password: string,
}

export interface IUserLogin {
    Username: string,
    Password: string,
}

export interface IAuthResponse {
    FirstName: string,
    LastName: string,
    Username: string,
    PhoneNumber: string,
    IsAdmin: boolean,
    access_token: string
}