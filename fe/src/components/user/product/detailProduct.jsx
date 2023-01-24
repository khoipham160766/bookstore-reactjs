import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import SuggestProduct from "./suggestProduct";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { Empty } from "antd";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

const DetailProduct = () => {
    const navigate = useNavigate();
    const {idbook} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [detailBook,setDetailBook] = useState([]);
    const plus_quantity = () => {
        setQuantity(quantity + 1);
    }
    const minus_quantity = () => {
        setQuantity((quantity - 1) < 1?1:quantity-1);
    }
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
    //function
    const checkLogin = () => {
        if(!localStorage.getItem("accessToken")){
            navigate('/user/login')
        }
    }
    //axios
    useEffect(()=>{
        const getDetailBook = async() => {
            const response = await axios.get(`http://localhost:8000/api/detail/${idbook}`);
            setDetailBook([response.data.data]);
        }
        getDetailBook();
    },[idbook])
    return(
        <Fragment>
            {
                (!detailBook.length)?
                <div className="spin-position spin-position-detail-book"><Spinner animation="border" variant="danger" /></div>
                :
                detailBook.map((detail,index)=>(
                <div key={index}>
                    <div className="row mb-4">
                        {/* list images */}
                        {/* <div className="d-none d-lg-block col-lg-1">
                            <div className="image-vertical-scroller">
                                <div className="d-flex flex-column">
                                    <img className="rounded mb-2 ratio" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                    <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                                </div>
                            </div>
                        </div> */}
                        {/* main image */}
                        <div className="col-lg-5 main-image">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img className="border rounded ratio ratio-1x1" alt="" src={detail.TT_SP.Hinh_Anh}/>
                                </div>
                            </div>
                        </div>
                        {/* content product */}
                        <div className="col-lg-6 detail-content-product">
                            <div className="d-flex flex-column h-100">
                                <h2 className="mb-1">{detail.TT_SP.Ten_SP}</h2>
                                <dl className="row mt-3">
                                    <dd className="col-sm-3">Nhà xuất bản</dd>
                                    <dt className="col-sm-9 mb-2">{detail.TT_SP.NXB}</dt>
                                    <dd className="col-sm-3">Tác giả</dd>
                                    <dt className="col-sm-9 mb-2">{detail.TT_SP.Tac_Gia}</dt>
                                    <dd className="col-sm-3">Thể loại</dd>
                                    <dt className="col-sm-9 mb-2">{detail.TT_SP.Danh_Muc.Ten_DM}</dt>
                                </dl>
                                <div className="mt-3">
                                    <span className="price">63.000</span>
                                    <span className="old-price">99.000</span>
                                    <span className="sale-percent">-15%</span>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4 col-sm-3 mt-1">
                                        <span className="title-quantity">Số lượng</span>
                                    </div>
                                    <div className="col-8 col-sm-9">
                                        <div className="buttons_added">
                                            <input className="minus is-form" type="button" value="-" onClick={minus_quantity}/>
                                            <input aria-label="quantity" name="quantity" className="input-qty" type="text" value={quantity} onChange={Empty}/>
                                            <input className="plus is-form" type="button" value="+" onClick={plus_quantity}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 mb-4 mt-4">
                                    <div className="col">
                                        <button className="btn btn-outline-dark py-2 w-100 custom-add-cart" onClick={checkLogin}>
                                            <FontAwesomeIcon icon={faShoppingCart}/>
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-dark py-2 w-100 custom-buy-now">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row description">
                        <h2 className="title-description">Mô tả</h2>
                        <span dangerouslySetInnerHTML={{__html: detail.TT_SP.Mo_Ta}}>
                            {/* Cha mất khi cứu người trong một trận lũ. Thương mẹ vất vả một mình nuôi hai anh em ăn học, Hùng đã sớm biết lo toan việc nhà, chăm sóc em. Đột nhiên nạn dịch Covid tràn về, làm cuộc sống của ba mẹ con đã khó khăn càng khó khăn hơn.
                            Ba mẹ con học cách thích nghi với hoàn cảnh, học những kĩ năng tự bảo vệ mình và giúp đỡ,
                            thương yêu mọi người.
                            Bão lũ cũng đua nhau ập tới…
                            Trong những ngày hoang mang lo lắng cùng cực, bí mật gia đình được tiết lộ…
                            Nhưng sau tất cả là tình yêu và sự trưởng thành. Những người dưng ở một nhà, yêu nhau hơn ruột thịt.
    
                            Nhà văn NGUYỄN BÁ HÒA sinh năm 1955, quê quán Quảng Nam, là giảng viên Đại học đã nghỉ hưu. */}
                        </span>
                    </div>
                    <div className="row suggestion">
                        <h2 className="title-suggestion">Gợi ý sản phẩm cùng loại</h2>
                        <SuggestProduct breakpoints_data={config_screen_swiper} idcategory={detail.TT_SP.Danh_Muc.Ma_DM} idbook={detail.TT_SP.Ma_SP}/>
                    </div>
                </div>
                ))
            }
        </Fragment>
    )
}

export default DetailProduct;