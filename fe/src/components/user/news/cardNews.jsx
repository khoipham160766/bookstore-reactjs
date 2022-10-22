import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

const CardNews = () => {
    return(
        <Fragment>
            <div className="card mb-3 blog-content-card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src="../../images/book-1.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Khuyến Mãi 50% Tri Ân</h5>
                            <p className="card-text mini-content-news">Khuyến mãi 50% cho mọi khách hàng đến với chúng tôi</p>
                            <p className="card-text">
                                <small className="text-muted style-text-muted">
                                    <FontAwesomeIcon icon={faCalendarDays}/>
                                    15-10-2022
                                </small>
                            </p>
                            <Link to="/user/news/detail" className="style-button-blog">XEM TIẾP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardNews;
