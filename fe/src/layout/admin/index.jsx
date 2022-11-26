import { Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/admin/navbar";
import SideNav from "../../components/admin/sidenav";
import './style.css';

const LayoutAdmin = () => {
    const [mobileOpen, setMobileOpen] = useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleDrawerClose = () => {
        setMobileOpen(false);
    }
    return(
        <Fragment>
            <NavbarAdmin mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
            <SideNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} handleDrawerClose={handleDrawerClose}/>
            <Box className="main-wrapper">
                <Outlet/>
            </Box>
        </Fragment>
    )
}

export default LayoutAdmin;