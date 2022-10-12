import React, { Fragment } from "react";
import "./style.css";
import SpecialRowProduct from "../../../components/user/product/specialRowProduct";
import NormalRowProduct from "../../../components/user/product/normalRowProduct";
import Slider from "../../../components/user/carousel";

const HomePage = () => {
    const config_screen_swiper = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    }
    return(
        <Fragment>
            <Slider/>
            <div className="container py-4 px-4 justify-content-center">
                <SpecialRowProduct breakpoints_data={config_screen_swiper} title_data="BÁN CHẠY"/>
                <SpecialRowProduct breakpoints_data={config_screen_swiper} title_data="MỚI RA MẮT"/>

                <div className="mini-adv">
                    <div className="mini-adv-left">
                        <img src="../../images/mini-banner/mini-2.png" alt=""/>
                    </div>
                    <div className="mini-adv-right">
                        <img src="../../images/mini-banner/mini-3.png" alt=""/>
                    </div>
                </div>

                <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="VĂN HỌC"/>
                <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="NGOẠI NGỮ"/>
                <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="TIỂU THUYẾT"/>
            </div>
        </Fragment>
    )
}

export default HomePage;