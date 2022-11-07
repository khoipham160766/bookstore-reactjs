import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCustomer from "../../../components/admin/customer/headerManageCustomer";
import CustomerTable from "../../../components/admin/customer/customerTable";
import { Box } from "@mui/material";
import "./style.css";

const ManageCustomerPage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Customer" title="Blog OverView" />
                <HeaderManageCustomer />
                <CustomerTable />
            </Box>
        </Fragment>
    )
}

export default ManageCustomerPage;