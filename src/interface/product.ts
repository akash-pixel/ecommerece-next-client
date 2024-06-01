export interface IProductResponse {
    Quantity: number;

    Category: string;

    Id: number;
    Name: string,
    Description: string,
    SKU: string,
    Price: number,
    File: []
}

export interface IProduct {

    Id: string;

    [key: string]: any;
}


export interface IProductCreate {

    [key: string]: any;
}

export interface IProductTableView {
    Id: number;
    Name: string;
    Category: string;
    Quantity: number;
    SKU: string;
}