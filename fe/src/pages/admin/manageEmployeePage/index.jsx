import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import EmployeeTable from "../../../components/admin/employee/employeeTable";
import HeaderManageEmployee from "../../../components/admin/employee/headerManageEmployee";
import { Box } from "@mui/material";
import axios from "axios";
import "./style.css";

const ManageEmployeePage = () => {
    const [listEmployee, setListEmployee] = useState([]);
    const [searchListEmployee, setSearchListEmployee] = useState([]);
    const [checkSearchListEmployee, setCheckSearchListEmployee] = useState(false);
    const [searchEmployeeForm, setSearchEmployeeForm] = useState('');
    //function
    const handleSearchInputEmployee = (e) =>{
        const arrEmployee = [];
        listEmployee.map( employee =>(
            ((employee.Ho_NV.toUpperCase()).includes(e.target.value.toUpperCase()) 
            || (employee.Ten_NV.toUpperCase()).includes(e.target.value.toUpperCase()) )
            ?arrEmployee.push(employee)
            :null
        ))
        setSearchListEmployee(arrEmployee);
        setCheckSearchListEmployee(true);
    }
    const handleSearchEmployeeForm = () => {
        const arrEmployee= [];
        if(searchEmployeeForm === 2 || searchEmployeeForm === ''){
            listEmployee.map( employee =>(
                arrEmployee.push(employee)
            ))
        }else{
            (listEmployee).map( employee =>(
                (employee.Tinh_Trang===searchEmployeeForm)?arrEmployee.push(employee):null
            ))
        }
        setSearchListEmployee(arrEmployee);
        setCheckSearchListEmployee(true);
    }
    //axios
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
                <HeaderManageEmployee handleSearchInputEmployee={handleSearchInputEmployee} setSearchEmployeeForm={setSearchEmployeeForm} handleSearchEmployeeForm={handleSearchEmployeeForm}/>
                <EmployeeTable listemployee={(!checkSearchListEmployee)?listEmployee:searchListEmployee} loading={!listEmployee.length} setListEmployee={setListEmployee}/>
            </Box>
        </Fragment>
    )
}

export default ManageEmployeePage;