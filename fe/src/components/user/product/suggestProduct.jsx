import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./productCard";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";
import axios from "axios";

const SuggestProduct = props => {
    const [listSuggest, setListSuggset] = useState([]);
    //axios
    useEffect(()=>{
        const getListSuggest = async() => {
            const response = await axios.get(`http://localhost:8000/api/searchbookincategory/${props.idcategory}`);
            setListSuggset(response.data.data);
        }
        getListSuggest();
    },[props.idcategory])
    return(
        <Fragment>
            <section className="featured best-sale">
                <Swiper
                    modules={[Navigation, A11y]}
                    breakpoints={props.breakpoints_data}
                    navigation
                    pagination={{ clickable: true }}
                    className="style-swiper"
                >
                    {
                        listSuggest.map((book, index)=>(
                            (book.TT_SP.Ma_SP === props.idbook)?
                            <div key={index}></div>
                            :
                            <SwiperSlide key={index}>
                                <ProductCard databook={book}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </Fragment>
    )
}

export default SuggestProduct;