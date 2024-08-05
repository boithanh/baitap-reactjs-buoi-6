import React from 'react'
import pageNotFoundAnimation from './../../assets/animation/pageNotFoundAnimation.json'
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <Lottie animationData={pageNotFoundAnimation} loop={true} style={{ width: 600, height: 600 }} />
            <h2 className='mb-3'>Trang bạn đang tìm kiếm không có, vui lòng quay về trang chủ</h2>
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="bg-red-600 text-white py-2 px-5 rounded-lg hover:animate-pulse"
            >
                Bấm vào để về trang chủ
            </button>
        </div>
    )
}

export default PageNotFound