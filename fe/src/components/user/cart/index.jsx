import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Cart = () => {
    return(
        <Fragment>
            <div className="cart-page">
                <h3 className="title-cart-page">Giỏ hàng</h3>
                {/* cart top */}
                <div className="cart-top">
                    <div className="cart-title">
                        <div className="title-product">
                            <p>Sản phẩm</p>
                        </div>
                        <div className="title-price">
                            <p>Đơn giá</p>
                        </div>
                        <div className="title-quantity">
                            <p>Số lượng</p>
                        </div>
                        <div className="title-total">
                            <p>Số tiền</p>
                        </div>
                        <div className="title-choose">
                            <p>Thao tác</p>
                        </div>
                    </div>
                </div>
                {/* cart mid */}
                <div className="cart-mid">
                    <div className="card-product-cart">
                        <div className="check">
                            <input type="checkbox"/>
                            <p>Sách văn loại</p>
                        </div>
                        <div className="cart-title">
                            <div className="title-product">
                                <img src="../images/book-1.jpg" alt=""/>
                                <p className="content-p">Sách Văn Học Thời Kỳ Trung Đại Đến Hiện Đại</p>
                                <p className="type">Loại: Sách</p>
                            </div>
                            <div className="title-price">
                                <p className="price" id="price-cart-1">99.0000</p>
                            </div>
                            <div className="title-quantity">
                                <div class="buttons_added mt-button">
                                    <input className="minus is-form quantity-style" type="button" value="-"/>
                                    <input aria-label="quantity" name="quantity" className="input-qty quantity-input" max="5" min="1" id="quantity-1" type="text" value="1" />
                                    <input className="plus is-form quantity-style" type="button" value="+"/>
                                </div>
                            </div>
                            <div className="title-total">
                                <p className="total" id="title-total-1">99.000</p>
                            </div>
                            <div className="title-choose">
                                <Link className="delete">Xóa</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cart bottom */}
                <div class="cart-bottom">
                    <p class="total-product">Số sản phẩm đã chọn: 0</p>
                    <button class="buy-now" type="submit">Mua hàng</button>
                    <p class="total-price">Tổng thanh toán: <span>0</span></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;