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
    Information: IProductInformation;
    Inventory: IProductInventory;
    Organize: IProductOrganize;
    Variant: IProductVariant[];
    Pricing: IProductPricing;

    Id?: number;

    [key: string]: any;
}

export interface IProductTableView {
    Id: number;
    Name: string;
    Category: string;
    Quantity: number;
    SKU: string;
}

export interface IProductInformation {
    Name: string;
    Description: string;
    SKU: string;
    Barcode: string;
}

export interface IProductVariant {
    Id?: number;
    TypeId: number;
    Value: number;
}

export interface IProductOrganize {
    VendorId: number;
    VendorName?: string;

    CategoryId: number;
    Collection: string;
    StatusId: number;
    TagId: number;
}

export interface IProductPricing {
    BasePrice: number;
    DiscountPrice: number;
}

export interface IProductInventory {
    Quantity: number;
    Id?: number;
}

export interface IProductSavePayload {
    Id?: number;
    Name: string;
    SKU: string;
    Price: number;
    Quantity: number;
    Description: string;

    ProductInventoryId?: number;
    CategoryId?: number;
    StatusId: number;
    FileIds: number[];
}