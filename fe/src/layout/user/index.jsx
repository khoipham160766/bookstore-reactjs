import React, { Fragment } from "react";
// import Header from "../../components/user/header";
import Navigation from "../../components/user/navbar";
import Footer from "../../components/user/footer";
import { Outlet } from "react-router-dom";
import "./style.css";

const LayoutUser = () => {
    return(
        <Fragment>
            {/* <Header /> */}
            <Navigation />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
}

export default LayoutUser;