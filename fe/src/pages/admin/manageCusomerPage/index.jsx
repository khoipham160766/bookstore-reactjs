import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCustomer from "../../../components/admin/customer/headerManageCustomer";
import CustomerTable from "../../../components/admin/customer/customerTable";
import { Box } from "@mui/material";
import axios from "axios";
import "./style.css";

const ManageCustomerPage = () => {
    const [listCustomer, setListCustomer] = useState([]);
    const [searchListCustomer, setSearchListCustomer] = useState([]);
    const [checkSearchListCustomer, setCheckSearchListCustomer] = useState(false);
    const [searchCustomerForm, setSearchCustomerForm] = useState('');
    //function
    const handleSearchInputCustomer = (e) =>{
        const arrCustomer = [];
        listCustomer.map( customer =>(
            ((customer.Ho_KH.toUpperCase()).includes(e.target.value.toUpperCase()) 
            || (customer.Ten_KH.toUpperCase()).includes(e.target.value.toUpperCase()) )
            ?arrCustomer.push(customer)
            :null
        ))
        setSearchListCustomer(arrCustomer);
        setCheckSearchListCustomer(true);
    }
    const handleSearchCustomerForm = () => {
        const arrCustomer = [];
        if(searchCustomerForm === 2 || searchCustomerForm === ''){
            listCustomer.map( customer =>(
                arrCustomer.push(customer)
            ))
        }else{
            (listCustomer).map( customer =>(
                (customer.Tinh_Trang===searchCustomerForm)?arrCustomer.push(customer):null
            ))
        }
        setSearchListCustomer(arrCustomer);
        setCheckSearchListCustomer(true);
    }
    // axios
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
                <HeaderManageCustomer handleSearchInputCustomer={handleSearchInputCustomer} setSearchCustomerForm={setSearchCustomerForm} handleSearchCustomerForm={handleSearchCustomerForm}/>
                <CustomerTable listcustomer={(!checkSearchListCustomer)?listCustomer:searchListCustomer} loading={!listCustomer.length} setListCustomer={setListCustomer} />
            </Box>
        </Fragment>
    )
}

export default ManageCustomerPage;