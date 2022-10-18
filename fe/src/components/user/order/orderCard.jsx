import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const OrderCard = props => {
    const data_status = props.status_order;
    return(
        <Fragment>
            <div class="product-order-card">
                <div class="top">
                    <i class="fa-solid fa-truck"></i>
                    <p>{data_status}</p>
                    <span>Cửa hàng TBook</span>
                </div>
                <div class="mid">
                    <div class="mid-product-card">
                        <Link>
                            <img src="../images/book-1.jpg" alt=""/>
                        </Link>
                        <div class="info-product-card">
                            <b>iphone 13 pro max</b>
                            <span>Phân loại hàng: màu trắng, 256GB</span>
                            <p>x1</p>
                        </div>
                        <div class="price-product-card">
                            <p class="price-sale">6.000</p>
                            <p class="price-basic">10.000</p>
                            <p class="price">28.390.000</p>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price-total">
                        <p>28.390.000</p>
                        <span>Tổng tiền:</span>
                        <FontAwesomeIcon icon={faMoneyBill}/>
                    </div>
                    <p class="bottom-style-p">Ngày đặt mua <span>17-07-2022</span></p>
                    <button class="bottom-style-button">Hủy đơn</button>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderCard;