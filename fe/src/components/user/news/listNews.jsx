import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import CardNews from "./cardNews";
import Spinner from 'react-bootstrap/Spinner';
import "./style.css";

const ListNews = () => {
    const [listNews, setListNews] = useState([]);
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
            <h2 className="title-news-page">Tin tức</h2>
            {
                (!listNews.length)?
                <div className="spin-position spin-position-product"><Spinner animation="border" variant="danger" /></div>
                :
                listNews.map((news,index)=> (
                    <CardNews key={index} news={news}/>
                ))
            }
            {/* <div className="d-flex align-items-center">
                <button className="load-more-news">
                    Xem thêm
                </button>
            </div> */}
        </Fragment>
    )
}

export default ListNews;