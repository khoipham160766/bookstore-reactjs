import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import CategoryNews from "../../../components/user/category/categoryNews";

const NewsPage = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center news-page">
                <div className="row">
                    <div className="col-lg-3">
                        <CategoryNews />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex flex-column h-100">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsPage;