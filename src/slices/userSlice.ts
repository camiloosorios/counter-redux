import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
    name : string,
    age : number
}

export interface UserState {
    users : User[]
}

const initialState : UserState = {
    users : []
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        addUser : (state, action : PayloadAction<User>) => {
            state.users.push(action.payload)
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;