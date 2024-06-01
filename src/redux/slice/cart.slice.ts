import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { IProduct } from "@/interface/product";


const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((product: IProduct) => product.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item;
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id === id)
        }
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default cartSlice.reducer;