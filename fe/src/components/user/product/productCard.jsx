import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const ProductCard = ({databook}) => {
    return(
        <Fragment>
            <div className="card-product">
                {
                    (databook.TT_SP.Giam_Gia !== 0)?
                    <div className="sale-percent">
                        <span>{databook.TT_SP.Giam_Gia}</span>
                    </div>
                    :
                    <div></div>
                }
               
                <Link to={`/user/detail/${databook.TT_SP.Ma_SP}`}>
                    <div className="image">
                        <img src={databook.TT_SP.Hinh_Anh} alt=""/>
                    </div>
                </Link>
                <div className="content">
                    <h2 className="product-name">
                        {databook.TT_SP.Ten_SP}
                    </h2>
                    <div className="product-price">
                        <span className="new-price">{databook.TT_SP.Don_Gia}</span>
                        <span className="old-price">{databook.TT_SP.Don_Gia}</span>
                    </div>
                    <div className="box-hover">
                        <Tooltip placement="bottom" title="Thêm giỏ hàng">
                            <button className="add-cart"><FontAwesomeIcon icon={faCartShopping}/></button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Chi tiết">
                            <Link to={`/user/detail/${databook.TT_SP.Ma_SP}`} className="product-detail"><FontAwesomeIcon icon={faSearch}/></Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard;