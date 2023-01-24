import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

const CardNews = ({news}) => {
    return(
        <Fragment>
            <div className="card mb-3 blog-content-card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={news.Hinh_Chinh} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{news.Tieu_De}</h5>
                            <p className="card-text mini-content-news"  dangerouslySetInnerHTML={{__html: news.Noi_Dung}}></p>
                            <p className="card-text">
                                <small className="text-muted style-text-muted">
                                    <FontAwesomeIcon icon={faCalendarDays}/>
                                    {news.Ngay_Dang}
                                </small>
                            </p>
                            <Link to={`/user/news/detail/${news.Ma_TT}`} className="style-button-blog">XEM TIẾP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardNews;
