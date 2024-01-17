"use client";

import { createSlice } from "@reduxjs/toolkit";

export const destinationSlice = createSlice({
    name: "destination",
    initialState: {
        category: "",
    },
    reducers: {
        addToCatDest(state, action) {
            state.category = action.payload;
        },
    },
});

export const destinationAction = destinationSlice.actions;
