import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageNews from "../../../components/admin/news/headerManageNews";
import NewsTable from "../../../components/admin/news/newsTable";
import axios from "axios";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import "./style.css";

const ManageNewsPage = () => {
    const moment = extendMoment(Moment);
    const [listNews, setListNews] = useState([]);
    const [searchListNews, setSearchListNews] = useState([]);
    const [checkSearchListNews, setCheckSearchListNews] = useState(false);
    const [searchNewsForm, setSearchNewsForm] = useState({'Bat_Dau': '','Ket_Thuc': ''});
    //function
    const handleSearchInputNews = (e) => {
        const arrNews = [];
        listNews.map( news =>(
            ((news.Tieu_De.toUpperCase()).includes(e.target.value.toUpperCase()) )
            ?arrNews.push(news)
            :null
        ))
        setSearchListNews(arrNews);
        setCheckSearchListNews(true);
    }
    const handleSearchNewsForm = () => {
        const start = new Date((searchNewsForm.Bat_Dau === '')?'1000-01-01':searchNewsForm.Bat_Dau);
        const end = new Date((searchNewsForm.Ket_Thuc === '')?'3000-01-01':searchNewsForm.Ket_Thuc);
        const range  = moment().range(start, end);
        const arrNews = [];
        listNews.map( news =>(
            // (range.contains(new Date(book.created_at)))?arrBook.push(book):null
           (range.contains(new Date(news.Ngay_Dang)))?arrNews.push(news):null
        ))
        setSearchListNews(arrNews);
        setCheckSearchListNews(true);
    }
    //axios
    useEffect(()=>{
        const getListNews = async() => {
            const response = await axios.get("http://localhost:8000/api/news");
            setListNews(response.data.data);
        }
        getListNews();
    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage News" title="Blog OverView"/>
                <HeaderManageNews handleSearchInputNews={handleSearchInputNews} setSearchNewsForm={setSearchNewsForm} searchNewsForm={searchNewsForm} handleSearchNewsForm={handleSearchNewsForm}/>
                <NewsTable listnews={(!checkSearchListNews)?listNews:searchListNews}  loading={!listNews.length}/>
            </Box>
        </Fragment>
    )
}

export default ManageNewsPage;