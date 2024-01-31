import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: {},
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
       addUser: (state,action) => {
        state.auth = action.payload;
       }
    },
})
export const { addUser } = userSlice.actions;
export default userSlice.reducer;