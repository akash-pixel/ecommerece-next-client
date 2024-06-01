"use client"
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import { WebRef } from "./constant";
import { WebRefService } from "./common/web.ref.service";
import { ICategory } from "./components/category.add.edit.component";
dotenv.config();

function getAuthToken() {

    const isServer = typeof window === "undefined";
    if (isServer) {
        return;
    }

    const token = window.localStorage.getItem(WebRef.TOKEN);
    if (token) {
        return token;
    }

    return "";
}

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken()
    }
});

export function setToken(token: string) {
    localStorage.setItem(WebRef.TOKEN, 'Bearer ' + token);
}

