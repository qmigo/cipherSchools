import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    name: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.userId = action.payload.userId,
            state.name = action.payload.name
        },
        clearUser: (state)=>{
            state.userId = null,
            state.name = null
        }
    }
})

export const {setUser, clearUser} = userSlice.actions

export default userSlice.reducer