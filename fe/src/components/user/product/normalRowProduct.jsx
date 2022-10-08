import React, { Fragment } from "react";
import ProductCard from "./productCard";
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";

const NormalRowProduct = props => {
    return(
        <Fragment>
            <section className="featured best-sale">
                <div className="section-head">
                    <h1 className="heading-normal"><span>{props.title_data}</span></h1>
                    <Link className="see-more">Xem thêm</Link>
                </div>
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    breakpoints={props.breakpoints_data}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="style-swiper"
                >
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard/>
                    </SwiperSlide>
                </Swiper>
            </section>
        </Fragment>
    )
}

export default NormalRowProduct;