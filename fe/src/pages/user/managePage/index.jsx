import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import CategoryManage from "../../../components/user/category/categoryManage";
import "./style.css";

const LayoutManageUser = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center manage-page">
                <div className="row">
                    <div className="col-lg-3">
                        <CategoryManage />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex flex-column h-100">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LayoutManageUser;