import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import CardOverview from "../../../components/admin/overview/cardOverview";
import BestCustomer from "../../../components/admin/overview/bestCustomer";
import BestSellBook from "../../../components/admin/overview/bestSellBook";
import { Box, Grid } from "@mui/material";
import { Spin } from 'antd';
import axios from "axios";
import "./style.css";

const DashboardPage = () => {
    const [sumProduct, setSumProduct] = useState(<Spin />);
    const [sumCustomer, setSumCustomer] = useState(<Spin />);
    const [sumOrderComplete, setSumOrderComplete] = useState(<Spin />);
    const [sumNews, setSumNews] = useState(<Spin />);
    useEffect(()=>{
        // product
        const getSumProduct = async() => {
            const response = await axios.get("http://localhost:8000/api/count/product");
            setSumProduct(response.data.data);
        }
        getSumProduct();
        // customer
        const getSumCustomer = async() => {
            const response = await axios.get("http://localhost:8000/api/count/customer");
            setSumCustomer(response.data.data);
        }
        getSumCustomer();
        // order complete
        const getSumOrderComplete = async() => {
            const response = await axios.get("http://localhost:8000/api/count/ordercomplete");
            setSumOrderComplete(response.data.data);
        }
        getSumOrderComplete();
        // news
        const getSumNews = async() => {
            const response = await axios.get("http://localhost:8000/api/count/news");
            setSumNews(response.data.data);
        }
        getSumNews();
    },[])
    return(
        <Fragment>
            <Box className="page-dashboard">
                <HeaderContent subtitle="Dashboard" title="Blog OverView" />
            </Box>
            <Grid container spacing={1} >
                <CardOverview label="Sản phẩm" backgroundcolor="red" linebutton="line-red" sum={sumProduct} link="/admin/books"/>
                <CardOverview label="Khách hàng" sum={sumCustomer} backgroundcolor="violet" linebutton="line-violet" link="/admin/customers"/>
                <CardOverview label="Đơn hàng đã hoàn thành" sum={sumOrderComplete} backgroundcolor="green" linebutton="line-green" link="/admin/orders"/>
                <CardOverview label="Bài viết" sum={sumNews} backgroundcolor="yellow" linebutton="line-yellow" link="/admin/news"/>
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