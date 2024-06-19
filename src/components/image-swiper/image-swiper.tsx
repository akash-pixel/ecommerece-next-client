"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

const ImageSwiper = () => {
    const sliderContents = [
        {
            imageUrl: "https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=2048x2048&w=is&k=20&c=DZooWfrBRsQFlJyMWEAR2vpJX4yaTFEsTIDHVnYcnEc=",
            title: "01 — Bed Room",
            subtitile: "Inner Peace"
        },
        {
            imageUrl: "https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=2048x2048&w=is&k=20&c=DZooWfrBRsQFlJyMWEAR2vpJX4yaTFEsTIDHVnYcnEc=",
            title: "02 — Living Room",
            subtitile: "Cozy Corner"
        }
    ]



    return (
        <div className="image-swiper-container">
            <div className="content">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button>Explore More</button>
            </div>
            <Swiper
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"

            >
                {sliderContents.map(content => {
                    return (
                        <SwiperSlide>
                            <div className="slide-content">
                                <img className='slider-img' src={content.imageUrl} alt="Room 1" />
                                <div className="caption">
                                    <span>{content.title}</span>
                                    <h3>{content.subtitile}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })
                }
            </Swiper>
        </div>
    );
};

export default ImageSwiper;
