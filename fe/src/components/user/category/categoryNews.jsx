import React, { Fragment} from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import "./style.css";

const CategoryNews = () => {

    return(
        <Fragment>
            <h2 className="title-category-news-page">Danh mục</h2>
            <Accordion alwaysOpen className="category-news">
                <Accordion.Item>
                    <Link to="/user/news"><h2 className="all-news">Tất cả</h2></Link>
                </Accordion.Item>
                <Accordion.Item>
                    <Link to="/user/news/promotion/0"><h2 className="all-news">Khuyến mãi</h2></Link>
                </Accordion.Item>
                <Accordion.Item>
                    <Link to="/user/news/product/0"><h2 className="all-news">Tin tức sản phẩm</h2></Link>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
}

export default CategoryNews;