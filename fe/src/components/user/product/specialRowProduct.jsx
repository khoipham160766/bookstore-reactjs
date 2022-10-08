import React, { Fragment } from "react";
import ProductCard from "./productCard";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";

const SpecialRowProduct = props => {
    return(
        <Fragment>
            <section className="featured best-sale">
                <h1 className="heading"><span>{props.title_data}</span></h1>
                <Swiper
                    modules={[Navigation, A11y]}
                    breakpoints={props.breakpoints_data}
                    navigation
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

export default SpecialRowProduct;