import React, { Fragment } from "react";
import OrderCard from "./orderCard";
import "./style.css";

const OrderList = () => {
    return(
        <Fragment>
            <div className="order-page">
                <h3 className="title-order-page">Đơn mua</h3>
                <OrderCard status_order="delivering"/>
                <OrderCard status_order="complete"/>
                <OrderCard status_order="waiting"/>
            </div>
        </Fragment>
    )
}

export default OrderList;