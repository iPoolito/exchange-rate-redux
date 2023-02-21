import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        name: "Pool Ortega",
        loggedIn: false
    },
    reducers: {

    },
})

export const { } = usersSlice.actions

export default usersSlice.reducer