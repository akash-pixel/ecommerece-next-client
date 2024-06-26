"use client"

import { WebRefService } from "@/common/web.ref.service";
import { WebRef } from "@/constant";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IUserState {
    Username: string;
    FirstName: string;
    LastName: string;
    IsAdmin: boolean;
    PhoneNumber?: string;
}



    let initialState: IUserState = {
        Username: "",
        FirstName: "",
        LastName: "",
        IsAdmin: false,
        PhoneNumber: "",
    }

    const persistantState = WebRefService.get(WebRef.USER_IDENTITY);

    if(persistantState){
        initialState = persistantState;
    }


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserState: (state, action: PayloadAction<IUserState>) => {
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.Username = action.payload.Username;
            state.PhoneNumber = action.payload.PhoneNumber;
            state.IsAdmin = action.payload.IsAdmin;

        },
    },
});

export const { setUserState } = userSlice.actions;
export const userReducer = userSlice.reducer;