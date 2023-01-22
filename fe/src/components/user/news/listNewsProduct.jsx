import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import CardNews from "./cardNews";
import "./style.css";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const ListNewsProduct = () => {
    const {id} = useParams();
    const [listNews, setListNews] = useState([]);
    //axios
    useEffect(()=>{
        const getListNews = async() => {
            const response = await axios.get(`http://localhost:8000/api/newsproduct/${id}`);
            setListNews(response.data.data);
        }
        getListNews();
    },[id])
    return(
        <Fragment>
            <h2 className="title-news-page">Tin tức sản phẩm</h2>
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

export default ListNewsProduct;