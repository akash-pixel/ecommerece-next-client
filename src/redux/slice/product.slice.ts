import { IProductCreate, IProductInformation, IProductInventory, IProductOrganize, IProductPricing, IProductResponse, IProductVariant } from "@/interface/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IProductCreate = {
    Information: {
        Name: "",
        Description: "",
        SKU: "",
        Barcode: ""
    },
    Inventory: {
        Quantity: 0
    },
    Organize: {
        VendorId: 0,
        CategoryId: 0,
        Collection: "",
        StatusId: 0,
        TagId: 0
    },
    Variant: [],
    Pricing: {
        BasePrice: 0,
        DiscountPrice: 0
    }
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProductState: (state, action: PayloadAction<any>) => {
            state.Id = action.payload.Id;
            state.Information.Name = action.payload.Name;
            state.Information.Description = action.payload.Description;
            state.Information.SKU = action.payload.SKU;

            state.Pricing.BasePrice = action.payload.Price;

            state.Inventory = action.payload.ProductInventoryId;
            return;
        },
        updateProductInformation: (state, action: PayloadAction<IProductInformation>) => {
            state.Information = action.payload;
            return;
        },
        updateProductInventory: (state, action: PayloadAction<IProductInventory>) => {
            state.Inventory = action.payload;
            return;
        },
        updateProductVariant: (state, action: PayloadAction<IProductVariant[]>) => {
            state.Variant = action.payload;
            return;
        },
        updateProductPricing: (state, action: PayloadAction<IProductPricing>) => {
            state.Pricing = action.payload;
            return;
        },
        updateProductOrganize: (state, action: PayloadAction<IProductOrganize>) => {
            state.Organize = action.payload;
            return;
        },
        resetProduct: (state, action) => {
            return initialState;
        }
    }
});


export const { setProductState, updateProductInformation, updateProductPricing,
    updateProductVariant, updateProductInventory, updateProductOrganize, resetProduct
} = productSlice.actions;

export const productReducer = productSlice.reducer;