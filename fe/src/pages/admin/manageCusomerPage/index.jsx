import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCustomer from "../../../components/admin/customer/headerManageCustomer";
import CustomerTable from "../../../components/admin/customer/customerTable";
import { Box } from "@mui/material";
import axios from "axios";
import "./style.css";

const ManageCustomerPage = () => {
    const [listCustomer, setListCustomer] = useState([]);
    useEffect(()=>{
        const getListCustomer = async() => {
            const response = await axios.get("http://localhost:8000/api/customer");
            setListCustomer(response.data.data);
        }
        getListCustomer();
    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Customer" title="Blog OverView" />
                <HeaderManageCustomer />
                <CustomerTable listcustomer={listCustomer} loading={!listCustomer.length} />
            </Box>
        </Fragment>
    )
}

export default ManageCustomerPage;