"use client"
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import { WebRef } from "./constant";
import { WebRefService } from "./common/web.ref.service";
import { IProductCreate } from "./app/admin/product/add/page";
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

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken()
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

// Product
export async function getProducts(): Promise<IProductResponse[] | null> {
    return executeFunction(axiosInstance.get("/product"));
}

export async function addProduct(data: IProductCreate): Promise<IProductResponse[] | null> {
    return executeFunction(axiosInstance.post("/product", data));
}

export async function getProductById(id: number): Promise<IProductResponse | null> {
    return executeFunction(axiosInstance.get(`/product/${id}`));
}

// Category
export async function getCategoryList(): Promise<ICategoryResponse[] | null> {
    return executeFunction(axiosInstance.get("/category"));
}

export async function addCategory(data: ICategory): Promise<ICategoryResponse[] | null> {
    return executeFunction(axiosInstance.post("/category", data));
}
export async function updateCategory(data: ICategory): Promise<ICategoryResponse[] | null> {
    return executeFunction(axiosInstance.post(`/category/${data.Id}`, data));
}

export async function getCategoryById(id: number): Promise<ICategoryResponse | null> {
    return executeFunction(axiosInstance.get(`/category/${id}`));
}

// Discount
export async function getDiscountList(): Promise<IDiscountResponse[] | null> {
    return executeFunction(axiosInstance.get("/discount"));
}

export async function addDiscount(data: any): Promise<IDiscountResponse[] | null> {
    return executeFunction(axiosInstance.post("/discount", data));
}

export async function updateDiscount(data: any): Promise<IDiscountResponse[] | null> {
    return executeFunction(axiosInstance.put(`/discount/${data.Id}`, data));
}

export async function getDiscountById(id: number): Promise<IDiscountResponse | null> {
    return executeFunction(axiosInstance.get(`/discount/${id}`));
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

export interface IProductResponse {
    Name: string,
    Description: string,
    SKU: string,
    Price: number,
    File: []
}

export interface ICategoryResponse {
    Id: number;
    Name: string;
    Description: string;
}

export interface IDiscountResponse {

}