import { IProductResponse } from "@/interface/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IProductResponse = {
    Id: 0,
    Name: "",
    Description: "",
    SKU: "",
    Price: 0,
    File: [],
    Quantity: 0,
    Category: ""
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProductState: (state, action: PayloadAction<IProductResponse>) => {
            return action.payload
        },
        // updateProductInformation: (state, action: PayloadAction<IProductResponse>) => {
        //     return state.ProductInformation = action.payload;
        // }
    }
});


export const { setProductState } = productSlice.actions;

export const productReducer = productSlice.reducer;