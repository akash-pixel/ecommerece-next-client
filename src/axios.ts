import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
    }
});

export function setToken(token: string) {
    localStorage.setItem('token', 'Bearer ' + token);
}


export async function signIn(data: IUserLogin) {
    try {
        const result: any = await axiosInstance.post('/auth/login', data);
        setToken(result.data.access_token)
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function signUp(data: IUserRegister) {
    try {
        const result = await axiosInstance.post('/auth/register', data);
        if (result?.data?.access_token) {
            setToken(result.data.access_token)
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
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