import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./productCard";
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";
import axios from "axios";

const NormalRowProduct = ({title_data, breakpoints_data, idcategory, namecategory}) => {
    const [listBook, setListBook] = useState([]);
    useEffect(()=>{
        console.log(idcategory)
        // console.log(idcategory);
        const getListBook = async() =>{
            const response = await axios.get(`http://localhost:8000/api/searchbookincategory/${idcategory}`);
            setListBook(response.data.data);
        }
        getListBook();
    },[idcategory])
    const slice = listBook.slice(0, 10);
    return(
        <Fragment>
            <section className="featured best-sale">
                <div className="section-head">
                    <h1 className="heading-normal"><span>{title_data}</span></h1>
                    <Link to={`/user/book/${namecategory}`}className="see-more">Xem thêm</Link>
                </div>
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    breakpoints={breakpoints_data}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    className="style-swiper"
                >
                     {
                        (slice.length)?
                        slice.map((book, index) =>(
                            <SwiperSlide key={index}>
                                <ProductCard databook={book}/>
                            </SwiperSlide>
                        ))
                        :<div className="spin-position">Chưa có sản phẩm</div>
                    }
                </Swiper>
            </section>
        </Fragment>
    )
}

export default NormalRowProduct;