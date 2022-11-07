import React, { Fragment } from "react";
import { Box } from "@mui/material";
import InOutChart from "../../../components/admin/statisticals/inOutChart";
import BestSellerTypeChart from "../../../components/admin/statisticals/bestSellerTypeChart";
import NewCustomerChart from "../../../components/admin/statisticals/newCustomerChart";
import "./style.css";

const StatisticalPage = () => {
    return(
        <Fragment>
            <Box className="statistical-page">
                <div className="title-statistical-page">
                    <h3>Thống kê</h3>
                </div>
                <div className="in-out-chart">
                    <h3 className="title-in-out-chart">Doanh thu/ Nhập hàng (VNĐ)</h3>
                    <div className="chart">
                        <InOutChart />
                    </div>
                </div>
                <div className="best-seller-type-book-chart">
                    <h3 className="title-in-out-chart">Loại sách bán được</h3>
                    <div className="chart">
                        <BestSellerTypeChart />
                    </div>
                </div>
                <div className="new-customer-chart">
                    <h3 className="title-in-out-chart">Khách hàng mới</h3>
                    <div className="chart">
                        <NewCustomerChart />
                    </div>
                </div>
            </Box>
        </Fragment>
    )
}

export default StatisticalPage;