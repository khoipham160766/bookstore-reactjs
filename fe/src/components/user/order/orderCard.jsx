import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const OrderCard = props => {
    const data_status = props.status_order;
    return(
        <Fragment>
            <div className="product-order-card">
                <div className="top">
                    <i className="fa-solid fa-truck"></i>
                    <p>{data_status}</p>
                    <span>Cửa hàng TBook</span>
                </div>
                <div className="mid">
                    <div className="mid-product-card">
                        <Link>
                            <img src="https://res.cloudinary.com/dgkrtexdv/image/upload/v1669137951/imagesbookstore/antjn9pywl62hmg0eaee.jpg" alt=""/>
                        </Link>
                        <div className="info-product-card">
                            <b>Tiếng Anh Cho Người Mới Bắt Đầu</b>
                            <span>Phân loại: Sách Tiếng Anh</span>
                            <p>x1</p>
                        </div>
                        <div className="price-product-card">
                            <p className="price-sale">65.000</p>
                            <p className="price-basic">75.000</p>
                            {/* <p className="price">28.390.000</p> */}
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="price-total">
                        <p>65.000</p>
                        <span>Tổng tiền:</span>
                        <FontAwesomeIcon icon={faMoneyBill}/>
                    </div>
                    <p className="bottom-style-p">Ngày đặt mua <span>17-07-2022</span></p>
                    <button className="bottom-style-button">Hủy đơn</button>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderCard;