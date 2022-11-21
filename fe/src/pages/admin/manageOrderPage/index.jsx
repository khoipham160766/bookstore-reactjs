import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import OrderTable from "../../../components/admin/orders/ordersTable";
import HeaderManageOrder from "../../../components/admin/orders/headerManageOrder";
import axios from "axios";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import "./style.css";

const ManageOrderPage = () => {
    const moment = extendMoment(Moment);
    const [listOrder, setListOrder] = useState([]);
    const [searchListOrder, setSearchListOrder] = useState([]);
    const [checkSearchListOrder, setCheckSearchListOrder] = useState(false);
    const [searchOrderForm, setSearchOrderForm] = useState({'Trang_Thai': 'Tất cả', 'Bat_Dau': '', 'Ket_Thuc': ''})
    //function
    const handleSearchIdOrder = (e) => {
        const arrOrder = [];
        listOrder.map(order=> (
          ((`${order.Ma_DH}` === e.target.value))?arrOrder.push(order):null
        ))
        if(e.target.value === ''){
            listOrder.map(order=> (
                arrOrder.push(order)
            ))
        }
        setSearchListOrder(arrOrder);
        setCheckSearchListOrder(true);
    }
    const handleSearchNameCustomer = (e) => {
        const arrOrder = [];
        listOrder.map(order=> (
            ((order.Ma_KH.Ten_KH.toUpperCase()).includes(e.target.value.toUpperCase()) 
            || (order.Ma_KH.Ho_KH.toUpperCase()).includes(e.target.value.toUpperCase()))?arrOrder.push(order):null
        ))
        setSearchListOrder(arrOrder);
        setCheckSearchListOrder(true);
    }
    const handleSearchOrderForm = () => {
        const arrOrder_1 = [];
        const arrOrder_2 = [];
        const start = new Date((searchOrderForm.Bat_Dau === '')?'1000-01-01':searchOrderForm.Bat_Dau);
        const end = new Date((searchOrderForm.Ket_Thuc === '')?'3000-01-01':searchOrderForm.Ket_Thuc);
        const range  = moment().range(start, end);
       if(searchOrderForm.Trang_Thai === "Tất cả"){
            listOrder.map(order => (
                arrOrder_1.push(order)
            ))
        }else{
            listOrder.map(order => (
               (order.Trang_Thai === searchOrderForm.Trang_Thai)?arrOrder_1.push(order):null
            ))
        }
        arrOrder_1.map(order => (
            (range.contains(new Date(order.Ngay_Tao)))?arrOrder_2.push(order):null
        ))
        setSearchListOrder(arrOrder_2);
        setCheckSearchListOrder(true);
    }
    //axios
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
                <HeaderManageOrder handleSearchIdOrder={handleSearchIdOrder} handleSearchNameCustomer={handleSearchNameCustomer} setSearchOrderForm={setSearchOrderForm} searchOrderForm={searchOrderForm} handleSearchOrderForm={handleSearchOrderForm}/>
                <OrderTable listorder={(!checkSearchListOrder)?listOrder:searchListOrder} loading={!listOrder.length} />
            </Box>
        </Fragment>
    )
}

export default ManageOrderPage;