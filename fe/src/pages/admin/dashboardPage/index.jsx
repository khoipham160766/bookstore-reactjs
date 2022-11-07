import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import CardOverview from "../../../components/admin/overview/cardOverview";
import BestCustomer from "../../../components/admin/overview/bestCustomer";
import BestSellBook from "../../../components/admin/overview/bestSellBook";
import { Box, Grid } from "@mui/material";
import "./style.css";

const DashboardPage = () => {
    return(
        <Fragment>
            <Box className="page-dashboard">
                <HeaderContent subtitle="Dashboard" title="Blog OverView" />
            </Box>
            <Grid container spacing={1} >
                <CardOverview label="Sản phẩm" content="123" backgroundcolor="red" linebutton="line-red"/>
                <CardOverview label="Khách hàng" content="521" backgroundcolor="violet" linebutton="line-violet"/>
                <CardOverview label="Đơn hàng đã xử lý" content="157" backgroundcolor="green" linebutton="line-green"/>
                <CardOverview label="Bài viết" content="12" backgroundcolor="yellow" linebutton="line-yellow"/>
            </Grid>
            <Grid container spacing={1}>
                <Grid item md={6} sm={6} xs={6}>
                    <BestCustomer/>
                </Grid>
                <Grid item md={6} sm={6} xs={6} >
                    <BestSellBook/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default DashboardPage;