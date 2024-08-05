import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './slices/ticketSlice'

export const store = configureStore({
    reducer: { ticketSlice },
})