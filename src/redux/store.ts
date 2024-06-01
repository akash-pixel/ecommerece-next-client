"use client"

import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice";
import { userReducer } from "./slice/user.slice";
import { productReducer } from "./slice/product.slice";

export const store = configureStore({

    reducer: {
        auth: authReducer,
        user: userReducer,
        product: productReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),

    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


