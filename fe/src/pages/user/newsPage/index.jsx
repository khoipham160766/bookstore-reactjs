import React, { Fragment } from "react";
import CategoryNew from "../../../components/user/category/categoryNews";
import ListNews from "../../../components/user/news/listNews";

const NewsPage = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center news-page">
                <div className="row">
                    <div className="col-lg-3">
                        <CategoryNew />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex flex-column h-100">
                            <ListNews />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsPage;