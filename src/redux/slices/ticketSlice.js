import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hoTen: "Bành Bối Thạnh"

}

const ticketSlice = createSlice({
    name: "name",
    initialState,
    reducers: {}
});

export const { } = ticketSlice.actions

export default ticketSlice.reducer