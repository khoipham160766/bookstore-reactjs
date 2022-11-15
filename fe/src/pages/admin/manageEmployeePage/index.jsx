import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import EmployeeTable from "../../../components/admin/employee/employeeTable";
import HeaderManageEmployee from "../../../components/admin/employee/headerManageEmployee";
import { Box } from "@mui/material";
import axios from "axios";
import "./style.css";

const ManageEmployeePage = () => {
    const [listEmployee, setListEmployee] = useState([]);
    useEffect(()=>{
        const getListEmployee = async() => {
            const response = await axios.get("http://localhost:8000/api/employee");
            setListEmployee(response.data.data);
        }
        getListEmployee();
    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Employee" title="Blog OverView" />
                <HeaderManageEmployee />
                <EmployeeTable listemployee={listEmployee} loading={!listEmployee.length}/>
            </Box>
        </Fragment>
    )
}

export default ManageEmployeePage;