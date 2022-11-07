import { Box } from "@mui/material";
import React, { Fragment } from "react";
import OrderTable from "../../../components/admin/orders/ordersTable";
import HeaderManageOrder from "../../../components/admin/orders/headerManageOrder";
import "./style.css";

const ManageOrderPage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderManageOrder />
                <OrderTable />
            </Box>
        </Fragment>
    )
}

export default ManageOrderPage;