import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageNews from "../../../components/admin/news/headerManageNews";
import NewsTable from "../../../components/admin/news/newsTable";
import axios from "axios";
import "./style.css";

const ManageNewsPage = () => {
    const [listNews, setListNews] = useState([]);
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
                <HeaderManageNews />
                <NewsTable listnews={listNews}  loading={!listNews.length}/>
            </Box>
        </Fragment>
    )
}

export default ManageNewsPage;