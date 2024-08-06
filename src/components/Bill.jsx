import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ticketSlice from '../redux/slices/ticketSlice';

const Bill = ({ arrTable, setValue }) => {
    const { tongTien } = useSelector((state) => state.ticketSlice);
    const dispatch = useDispatch;
    // console.log(arrTable);
    const deleteSeat = (_soGhe) => {
        var newArrTable = [...arrTable];
        const index = newArrTable.findIndex((item, index) => item.soGhe == _soGhe)
        if (index != -1) {
            newArrTable.splice(index, 1)
            console.log(newArrTable);
            setValue(newArrTable);
        } else {
            alert("có lỗi xảy ra vui lòng thử lại")
        }
    }

    function tinhTien() {
        var newArrTable = [...arrTable];
        let t = 0;
        newArrTable.map((item, index) => {
            t += item.gia;
        })
        return t;
    }

    return (
        <div className='list-item'>
            <h1 className='mb-3 text-white'>Danh sách ghế bạn chọn</h1>
            <ul>
                <li className='text-white'>
                    <button className='ghe gheDuocChon cursor-text align-middle mr-3'></button>
                    Ghế được chọn
                </li>
                <li className='text-white'>
                    <button className='ghe gheDangChon cursor-text align-middle mr-3'></button>
                    Ghế đang chọn
                </li>
                <li className='text-white'>
                    <button className='ghe bg-white align-middle mr-3'></button>
                    Ghế chưa đặt
                </li>
            </ul>
            <div>
                <table className='text-center'>
                    <tbody>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                        {
                            arrTable.map((item, index) => {
                                let { soGhe, gia } = item;
                                let tongTien = 0;
                                tongTien += gia;
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{soGhe}</td>
                                            <td>{gia.toLocaleString("vi", {
                                                style: "currency",
                                                currency: "VND",
                                            })}</td>
                                            <td className='text-center'><button className='py-1 px-4 bg-white text-black rounded-full hover:bg-black hover:text-red-600 duration-500 my-1' onClick={() => { deleteSeat(soGhe) }}>x</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                        <tr>
                            <td>Tổng Tiền</td>
                            <td colSpan={2}>{tinhTien().toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                            })}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Bill