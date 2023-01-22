import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const DetailNews = () => {
    const {idnews} = useParams();
    const [detailNews, setDetailNews] = useState([]);
    //axios
    useEffect(()=>{
        const getDetailNews = async() => {
            const response = await axios.get(`http://localhost:8000/api/news/${idnews}`)
            setDetailNews([response.data.data]);
        }
        getDetailNews();
    },[idnews])
    return(
        <Fragment>
            {
                (!detailNews.length)?
                <div className="spin-position spin-position-product"><Spinner animation="border" variant="danger" /></div>
                :
                detailNews.map((detail,index)=>(
                    <div className="detail-news" key={index}>
                        <h3>{detail.Tieu_De}</h3>
                        <div className="description-news" dangerouslySetInnerHTML={{__html: detail.Noi_Dung}}></div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default DetailNews;