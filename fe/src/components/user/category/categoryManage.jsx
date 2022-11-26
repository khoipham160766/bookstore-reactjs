import React, { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWallet, faShoppingCart, faArrowRightFromBracket, faSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

const CategoryManage = () => {
    return(
        <Fragment>
            <h2 className="title-category-manage-page">Quản lý tài khoản</h2>
            <Accordion alwaysOpen className="category-manage">
                <Accordion.Item>
                    <Link to="/user/manage/account">
                        <h2 className="all-manage">
                            <FontAwesomeIcon icon={faUser} className="icon-manage icon-user"/>
                            Thông tin cá nhân
                        </h2>
                    </Link>
                </Accordion.Item>
                <Accordion.Item>
                    <Link to="/user/manage/cart">
                        <h2 className="all-manage">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon-manage icon-shopping"/>
                            Giỏ hàng
                        </h2>
                    </Link>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <FontAwesomeIcon icon={faWallet} className="icon-manage icon-wallet"/>
                        Đơn mua
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faSquare} className="square-all"/>
                                <Link to="/user/manage/order">Tất cả đơn mua</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSquare} className="square-waiting"/>
                                <Link>Đơn mua chờ xác nhận</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSquare} className="square-delivering"/>
                                <Link>Đơn mua đang giao</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSquare} className="square-complete"/>
                                <Link>Đơn mua đã giao</Link>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Link>
                        <h2 className="all-manage">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon-manage icon-bracket"/>
                            Đăng xuất
                        </h2>
                    </Link>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
}

export default CategoryManage;