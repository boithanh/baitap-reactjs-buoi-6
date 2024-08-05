import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    soGhe: "",
    gia: 0,
    daDat: false,
    tongTien: 0,
    huy: "",

}

const ticketSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        datVe: (state, action) => {
            const { soGhe, gia, huy } = action.payload;
            state.soGhe = soGhe;
            state.gia = gia
            state.tongTien += gia;
            state.huy = huy;
        },
    }
});

export const { datVe, trangThaiGhe } = ticketSlice.actions

export default ticketSlice.reducer