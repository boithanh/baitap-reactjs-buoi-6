import React from 'react'
import { useSelector } from 'react-redux'

const Bill = () => {
    const { soGhe, gia, tongTien, huy } = useSelector((state) => state.ticketSlice);
    console.log(tongTien);
    return (
        <div>
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
                        <tr>
                            <td>{soGhe}</td>
                            <td>{gia.toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                            })}</td>
                            <td className='text-center'><button className='py-2 px-4 bg-white text-black rounded-full hover:bg-black hover:text-red-600 duration-500' onClick={() => { alert("Tính năng đang được phát triển, Comming Soon ^^ ") }}>{huy}</button></td>
                        </tr>
                        <tr>
                            <td>Tổng Tiền</td>
                            <td colSpan={2}>{tongTien.toLocaleString("vi", {
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