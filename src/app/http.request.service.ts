import { axiosInstance, setToken } from "@/axios";
import { WebRefService } from "@/common/web.ref.service";
import { ICategory } from "@/components/category.add.edit.component";
import { WebRef } from "@/constant";
import { IProductResponse } from "@/interface/product";
import { AxiosResponse } from "axios";

export class HttpRequest {

    private static async executeFunction<T>(cb: Promise<AxiosResponse<T>>): Promise<T | null> {

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

    public static async signIn(data: IUserLogin) {
        const result = await this.executeFunction<IAuthResponse>(axiosInstance.post('/auth/login', data));
        if (result?.access_token) {
            setToken(result.access_token)
            WebRefService.set(WebRef.USER_IDENTITY, { ...result, access_token: undefined });
        }
        return result;
    }

    public static async signUp(data: IUserRegister) {
        const result = await this.executeFunction<IAuthResponse>(axiosInstance.post('/auth/register', data));
        if (result?.access_token) {
            setToken(result.access_token);
            WebRefService.set(WebRef.USER_IDENTITY, { ...result, access_token: undefined });
        }
        return result;
    }

    // Product
    public static async getProducts(): Promise<IProductResponse[] | null> {
        return this.executeFunction(axiosInstance.get("/product"));
    }

    public static async addProduct(data: any): Promise<IProductResponse[] | null> {
        return this.executeFunction(axiosInstance.post("/product", data));
    }

    public static async getProductById(id: number): Promise<IProductResponse | null> {
        return this.executeFunction(axiosInstance.get(`/product/${id}`));
    }

    // Category
    public static async getCategoryList(): Promise<ICategoryResponse[] | null> {
        return this.executeFunction(axiosInstance.get("/category"));
    }

    public static async addCategory(data: ICategory): Promise<ICategoryResponse[] | null> {
        return this.executeFunction(axiosInstance.post("/category", data));
    }
    public static async updateCategory(data: ICategory): Promise<ICategoryResponse[] | null> {
        return this.executeFunction(axiosInstance.post(`/category/${data.Id}`, data));
    }

    public static async getCategoryById(id: number): Promise<ICategoryResponse | null> {
        return this.executeFunction(axiosInstance.get(`/category/${id}`));
    }

    // Discount
    public static async getDiscountList(): Promise<IDiscountResponse[] | null> {
        return this.executeFunction(axiosInstance.get("/discount"));
    }

    public static async addDiscount(data: any): Promise<IDiscountResponse[] | null> {
        return this.executeFunction(axiosInstance.post("/discount", data));
    }

    public static async updateDiscount(data: any): Promise<IDiscountResponse[] | null> {
        return this.executeFunction(axiosInstance.put(`/discount/${data.Id}`, data));
    }

    public static async getDiscountById(id: number): Promise<IDiscountResponse | null> {
        return this.executeFunction(axiosInstance.get(`/discount/${id}`));
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

export interface IAuthResponse {
    FirstName: string,
    LastName: string,
    Username: string,
    PhoneNumber: string,
    IsAdmin: boolean,
    access_token: string
}

export interface ICategoryResponse {
    Id: number;
    Name: string;
    Description: string;
}

export interface IDiscountResponse {

}