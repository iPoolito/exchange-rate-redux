import { createSlice } from '@reduxjs/toolkit'


export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        amount: "12.00",
        currencyCode: "USD",
        data: { USD: 1.0 }
    },
    reducers: {
        setData: (state, action) => {
            console.log({ action })
            state.data = action.payload
        },
        changeCurrencyCode: (state, action) => {
            state.currencyCode = action.payload
        },

        amountCurrency: (state, action) => {
            state.amount = action.payload
        },

    },
})

export const { amountCurrency, changeCurrencyCode } = currencySlice.actions


export default currencySlice.reducer