import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import SpecialRowProduct from "../../../components/user/product/specialRowProduct";
import NormalRowProduct from "../../../components/user/product/normalRowProduct";
import Slider from "../../../components/user/carousel";
import axios from "axios";

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
    const [listBookSeller, setListBookSeller] = useState([]);
    const [listBookNew, setListBookNew] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    //axios
    useEffect(()=>{
        const getListBookSeller = async() => {
            const response = await axios.get("http://localhost:8000/api/bestbookindexuser");
            setListBookSeller(response.data.data);
        }
        getListBookSeller();
        const getListBookNew = async() => {
            const response = await axios.get("http://localhost:8000/api/newbookindexuser");
            setListBookNew(response.data.data);
        }
        getListBookNew();
        const getListCategory = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setListCategory(response.data.data);
        }
        getListCategory();
    },[])
    return(
        <Fragment>
            <Slider/>
            <div className="container py-4 px-4 justify-content-center">
                <SpecialRowProduct breakpoints_data={config_screen_swiper} title_data="BÁN CHẠY" listbook={listBookSeller}/>
                <SpecialRowProduct breakpoints_data={config_screen_swiper} title_data="MỚI RA MẮT" listbook={listBookNew}/>

                <div className="mini-adv">
                    <div className="mini-adv-left">
                        <img src="../../images/mini-banner/mini-2.png" alt=""/>
                    </div>
                    <div className="mini-adv-right">
                        <img src="../../images/mini-banner/mini-3.png" alt=""/>
                    </div>
                </div>
                {
                    listCategory.map((category,index)=>(
                        <NormalRowProduct breakpoints_data={config_screen_swiper} title_data={category.Ten_DM} key={index} idcategory={category.id} namecategory={category.Ten_DM}/>
                    ))
                }
                {/* <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="VĂN HỌC"/>
                <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="NGOẠI NGỮ"/>
                <NormalRowProduct breakpoints_data={config_screen_swiper} title_data="TIỂU THUYẾT"/> */}
            </div>
        </Fragment>
    )
}

export default HomePage;