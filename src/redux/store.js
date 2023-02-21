import { configureStore } from '@reduxjs/toolkit'
import currencySlice from './currencySlice'
import usersSlice from './usersSlice'



export default configureStore({
    reducer: {
        currency: currencySlice,
        users: usersSlice
    },
})