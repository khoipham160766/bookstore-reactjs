import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import EmployeeTable from "../../../components/admin/employee/employeeTable";
import HeaderManageEmployee from "../../../components/admin/employee/headerManageEmployee";
import { Box } from "@mui/material";
import "./style.css";

const ManageEmployeePage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Employee" title="Blog OverView" />
                <HeaderManageEmployee />
                <EmployeeTable />
            </Box>
        </Fragment>
    )
}

export default ManageEmployeePage;