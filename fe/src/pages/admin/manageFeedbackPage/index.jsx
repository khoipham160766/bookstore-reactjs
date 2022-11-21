import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageFeedback from "../../../components/admin/feedback/headerManageFeedback";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import FeedbackTable from "../../../components/admin/feedback/feedbackTable";
import axios from "axios";
import "./style.css";

const ManageFeedBackPage = () => {
    const moment = extendMoment(Moment);
    const [listFeedback, setListFeedback] = useState([]);
    const [searchListFeedback, setSearchListFeedback] = useState([]);
    const [checkSearchListFeedback, setCheckSearchListFeedback] = useState(false);
    const [searchFeedbackForm, setSearchFeedbackForm] = useState({'Bat_Dau': '', 'Ket_Thuc': ''});
    //function
    const handleSearchCustomerNameFeedback = (e) => {
        const arrFeedback = [];
        listFeedback.map( feedback =>(
            ((feedback.Ma_KH.Ten_KH.toUpperCase()).includes(e.target.value.toUpperCase()) ||
            (feedback.Ma_KH.Ho_KH.toUpperCase()).includes(e.target.value.toUpperCase()))
            ?arrFeedback.push(feedback):null
        ))
        setSearchListFeedback(arrFeedback);
        setCheckSearchListFeedback(true);
    }
    const handleSearchFeedbackForm = () => {
        const arrFeedback = [];
        const start = new Date((searchFeedbackForm.Bat_Dau === '')?'1000-01-01':searchFeedbackForm.Bat_Dau);
        const end = new Date((searchFeedbackForm.Ket_Thuc === '')?'3000-01-01':searchFeedbackForm.Ket_Thuc);
        const range  = moment().range(start, end);
        listFeedback.map( feedback =>(
            // (range.contains(new Date(book.created_at)))?arrBook.push(book):null
           (range.contains(new Date(feedback.created_at)))?arrFeedback.push(feedback):null
        ))
        setSearchListFeedback(arrFeedback);
        setCheckSearchListFeedback(true);
    }
    //axios
    useEffect(()=>{
        const getListFeedback = async()  => {
            const response = await axios.get("http://localhost:8000/api/feedback");
            setListFeedback(response.data.data);
        }
        getListFeedback();

    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Feedback" title="Blog OverView" />
                <HeaderManageFeedback handleSearchCustomerNameFeedback={handleSearchCustomerNameFeedback} setSearchFeedbackForm={setSearchFeedbackForm} searchFeedbackForm={searchFeedbackForm} handleSearchFeedbackForm={handleSearchFeedbackForm} />
                <FeedbackTable listfeedback={(!checkSearchListFeedback)?listFeedback:searchListFeedback} loading={!listFeedback.length}/>
            </Box>
        </Fragment>
    )
}

export default ManageFeedBackPage;