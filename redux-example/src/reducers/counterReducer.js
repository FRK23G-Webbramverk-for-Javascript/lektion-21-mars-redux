import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action);
            return state + action.payload;
        }
    }
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;