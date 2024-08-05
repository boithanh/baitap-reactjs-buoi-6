import React, { useState } from 'react'
import './ticketmovie.scss'
import arrSeat from '../assets/data/danhSachGhe.json';
import Bill from './Bill';
import { useDispatch, useSelector } from 'react-redux';
import { datVe } from './../redux/slices/ticketSlice'

const TicketMovie = () => {
    const { soGhe, daDat } = useSelector((state) => state.ticketSlice);
    const dispatch = useDispatch();
    function renderCol() {
        return arrSeat.map((item, index) => {
            let { hang } = item
            if (hang) {
                return (
                    <p className="cot colNumber">{hang}</p>
                )

            }
        })
    }

    function renderRow() {
        return arrSeat.map((item, index) => {
            let { danhSachGhe } = item
            if (index === 0) {
                return danhSachGhe.map(ghe => (
                    <button key={ghe.soGhe} className="rowNumber cursor-text">
                        {ghe.soGhe}
                    </button>
                ));
            }
        })
    }

    function renderSeat() {
        return arrSeat.map((item, index) => {
            let { hang, danhSachGhe } = item;

            // Tạo một danh sách các phần tử JSX cho tất cả số ghế trong danhSachGhe
            if (hang) {
                return (

                    danhSachGhe.map(ghe => (
                        <button key={ghe.soGhe} className={`ghe text-black bg-white ${ghe.daDat && 'gheDuocChon'}`} onClick={() => {
                            dispatch(datVe({ soGhe: ghe.soGhe, gia: ghe.gia, huy: "X" }));
                        }}>
                            {ghe.soGhe}
                        </button>
                    ))

                );
            }
        });
    }

    return (
        <div className='bookingMovie'>
            <div className="container flex pt-16">
                <div className='w-8/12 text-center'>
                    <h1 className='mb-3'>Đặt vé xem phim</h1>
                    <div className="screen mx-auto mb-3"></div>
                    <div className='scren mx-auto mb-3'>{renderRow()}</div>

                    <div className='flex justify-start mb-3'>
                        <div className='w-1/12'> {renderCol()}</div>
                        <div className='w-11/12 -translate-x-10'>{renderSeat()}</div>
                    </div>
                </div>
                <div className='w-4/12'>
                    <Bill arrSeat={arrSeat} />
                </div>
            </div>
        </div>

    )
}

export default TicketMovie