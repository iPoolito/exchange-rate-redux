import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getExchangeRates } from '../api'

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];
export const fetchData = createAsyncThunk(
    'currency/fetchData', async (currency) => {
        const response = await getExchangeRates(currency, supportedCurrencies)
        return response
    }
)


export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        amount: "12.00",
        currencyCode: "USD",
        data: { USD: 1.0 }
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        changeCurrencyCode: (state, action) => {
            state.currencyCode = action.payload
        },

        amountCurrency: (state, action) => {
            state.amount = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const { amountCurrency, changeCurrencyCode } = currencySlice.actions


export default currencySlice.reducer