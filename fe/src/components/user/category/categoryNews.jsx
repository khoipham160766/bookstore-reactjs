import React, { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import "./style.css";

const CategoryNew = () => {
    return(
        <Fragment>
            <h2 className="title-category-news-page">Danh mục</h2>
            <Accordion alwaysOpen className="category-news">
                <Accordion.Item>
                    <Link><h2 className="all-news">Tất cả</h2></Link>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Khuyến mãi</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><Link>Tất Cả</Link></li>
                            <li><Link>Sách Văn Học</Link></li>
                            <li><Link>Sách Tiếng Anh</Link></li>
                            <li><Link>Tiểu Thuyết</Link></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tin tức sản phẩm</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><Link>Tất Cả</Link></li>
                            <li><Link>Sách Văn Học</Link></li>
                            <li><Link>Sách Tiếng Anh</Link></li>
                            <li><Link>Tiểu Thuyết</Link></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Fragment>
    )
}

export default CategoryNew;