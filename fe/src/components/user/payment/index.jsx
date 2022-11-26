import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";

const PayMent = () => {
    const [showChangeAddress, setShowChangeAddress] = useState(false);

    const handleCloseChangeAddress = () => setShowChangeAddress(false);
    const handleShowChangeAddress = () => setShowChangeAddress(true);
    return(
        <Fragment>
            <h3 className="title-payment-page">Thanh toán</h3>
            <div className="main-buy">
                <div className="address">
                    <div className="line-top-address"></div>
                    <h3><i className="fa-solid fa-location-dot"></i>Địa Chỉ Nhận Hàng</h3>
                    <b className="name-buyer" id="name-buyer">Phạm Trần Khôi</b>
                    <b className="phone-buyer" id="phone-buyer">(079466791)</b>
                    <p className="address-buyer" id="address-buyer">56/6A, Khu Phố 7, Phường Tân Hưng Thuận, Quận 12, TP.HCM</p>
                    <p className="change-address" id="change-address" onClick={handleShowChangeAddress}>THAY ĐỔI</p>
                    <input type="hidden" id="info-order" value=""/>
                </div>
                <div className="products">
                    <div className="product-title">
                        <ul>
                            <li className="title-product">Sản phẩm</li>
                            <li className="price-title">Đơn giá</li>
                            <li className="quantity-title">Số lượng</li>
                            <li className="total-title">Thành tiền</li>
                        </ul>
                    </div>
                    <div className="content-buy">
                        <div className="content-product">
                            <img src="../images/book-1.jpg" alt=""/>
                            <label>Iphone 13 pro max</label>
                            <label className="type">Loại: màu bạc, 256GB</label>
                        </div>
                        <div className="price-content">
                            <p>29.000.000</p>
                        </div>
                        <div className="quantity-content">
                            <span>2</span>
                        </div>
                        <div className="total-content">
                            <p>58.000.000</p>
                        </div>
                    </div>
                    <div className="content-buy">
                        <div className="content-product">
                            <img src="../images/book-1.jpg" alt=""/>
                            <label>Iphone 13 pro max</label>
                            <label className="type">Loại: màu bạc, 256GB</label>
                        </div>
                        <div className="price-content">
                            <p>29.000.000</p>
                        </div>
                        <div className="quantity-content">
                            <span>2</span>
                        </div>
                        <div className="total-content">
                            <p>58.000.000</p>
                        </div>
                    </div>
                    <div className="note">
                        <label>Lưu ý:</label>
                        <input type="text" name="note"/>
                    </div>
                    <div className="total-price">
                        <p className="price">58.000.000</p>
                        <span className="label-price">Tổng số tiền (2 sản phẩm):</span>
                    </div>
                </div>
                <div className="payments">
                    <div className="method-pay">
                        <h3>Phương thức thanh toán</h3>
                        <input type="radio" name="pay" id="off" checked/><label for="off"></label>
                        <span>Thanh toán khi nhận hàng.</span>
                        <input type="radio" name="pay" id="on" disabled/><label for="on"></label>
                        <span>Thẻ tín dụng.</span>
                    </div>
                    <div className="buy">
                        <div className="price-buy">
                            <p>Tổng thanh toán: <span>58.000.000</span></p>
                        </div>
                        <div className="btn-buy">
                            <button>Đặt Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showChangeAddress} onHide={handleCloseChangeAddress}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseChangeAddress}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseChangeAddress}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default PayMent;