import React, { Fragment } from "react";
import CardNews from "./cardNews";
import "./style.css";

const ListNews = () => {
    return(
        <Fragment>
            <h2 className="title-news-page">Tin tức</h2>
            <CardNews/>
            <CardNews/>
            <CardNews/>
            <CardNews/>
            <div className="d-flex align-items-center">
                <button className="load-more-news">
                    Xem thêm
                </button>
            </div>
        </Fragment>
    )
}

export default ListNews;