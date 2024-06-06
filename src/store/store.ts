import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
    reducer : {
        counter : counterSlice,
        users : userSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = ReturnType<typeof store.dispatch>;