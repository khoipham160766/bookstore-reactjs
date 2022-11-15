import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import OrderTable from "../../../components/admin/orders/ordersTable";
import HeaderManageOrder from "../../../components/admin/orders/headerManageOrder";
import axios from "axios";
import "./style.css";

const ManageOrderPage = () => {
    const [listOrder, setListOrder] = useState([]);
    useEffect(()=>{
        const getListOrder = async() => {
            const response = await axios.get("http://localhost:8000/api/order");
            setListOrder(response.data.data);
        }
        getListOrder();
    },[]);
    return(
        <Fragment>
            <Box>
                <HeaderManageOrder />
                <OrderTable listorder={listOrder} loading={!listOrder.length} />
            </Box>
        </Fragment>
    )
}

export default ManageOrderPage;