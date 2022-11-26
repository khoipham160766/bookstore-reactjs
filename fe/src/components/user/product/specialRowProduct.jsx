import React, { Fragment } from "react";
import ProductCard from "./productCard";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Spin } from 'antd';
import "./style.css";

const SpecialRowProduct = ({title_data, breakpoints_data, listbook}) => {
    return(
        <Fragment>
            <section className="featured best-sale">
                <h1 className="heading"><span>{title_data}</span></h1>
                <Swiper
                    modules={[Navigation, A11y]}
                    breakpoints={breakpoints_data}
                    navigation
                    pagination={{ clickable: true }}
                    className="style-swiper"
                >
                    {
                        (listbook.length)?
                        listbook.map((book, index) =>(
                            <SwiperSlide key={index}>
                                <ProductCard databook={book}/>
                            </SwiperSlide>
                        ))
                        :<Spin />
                    }
                </Swiper>
            </section>
        </Fragment>
    )
}

export default SpecialRowProduct;