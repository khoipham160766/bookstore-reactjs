import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const ProductCard = props => {
    return(
        <Fragment>
            <div className="card-product">
                <div className="sale-percent">
                    <span>25%</span>
                </div>
                <div className="image">
                    <img src="../../images/book-1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h2 className="product-name">
                        Sách văn học thời kì trung đại đến hiện đại
                    </h2>
                    <div className="product-price">
                        <span className="new-price">65.000</span>
                        <span className="old-price">90.000</span>
                    </div>
                    <div className="box-hover">
                        <Tooltip placement="bottom" title="Thêm giỏ hàng">
                            <button className="add-cart"><FontAwesomeIcon icon={faCartShopping}/></button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Chi tiết">
                            <Link className="product-detail"><FontAwesomeIcon icon={faSearch}/></Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard;