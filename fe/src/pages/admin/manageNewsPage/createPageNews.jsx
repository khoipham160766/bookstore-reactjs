import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { handleAddNews } from "../../../components/admin/handle/handle";
import JoditEditor from 'jodit-react';
import "./style.css";
import axios from "axios";

const CreatePageNews = () => {
    const today = new Date();
    const editor = useRef(null);
    const [infoNews, setInfoNews] = useState({'Loai_Tin_Tuc': 'Khuyến Mãi', 'Ma_DM': 1,'Hinh_Chinh': 'abc'});
    const [selectType, setSelectType] = useState([]);

    useEffect(()=>{
        const getSelectType = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setSelectType(response.data.data);
        }
        getSelectType();
    },[])
    //get data
    const handleInputChangeNews = (e) => {
        const timeNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const {value, name} = e.target;
        setInfoNews({...infoNews,[name]: value, 
                    'Ma_NV': 1,
                    'Ngay_Dang': timeNow});
    } 
    //console.log(infoNews);
    return(
        <Fragment>
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Thêm bài viết</h3>
                </div>
                <div className="content-register">
                    <div className="user-details-register">
                        <div className="input-box-register input-create-page-news-title">
                            <span className="details-register">Tiêu đề bài viết</span>
                            <input type="text" placeholder="Nhập tiêu đề..." required onChange={handleInputChangeNews} name="Tieu_De"/>
                        </div>
                        <div className="input-box-register">
                            <span className="details-register">Loại</span>
                            <select className="form-select" aria-label="Default select example" onChange={handleInputChangeNews} name="Loai_Tin_Tuc">
                                <option value="Khuyến Mãi">Khuyến Mãi</option>
                                <option value="Tin Tức Sản phẩm">Tin Tức Sản phẩm</option>
                            </select>
                        </div>
                        <div className="input-box-register">
                            <span className="details-register">Danh mục</span>
                            <select className="form-select" aria-label="Default select example" onChange={handleInputChangeNews} name="Ma_DM">
                                {
                                    selectType.map((option, index)=> (
                                        <option value={option.id} key={index}>{option.Ten_DM}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="input-box-register input-create-page-news-description">
                            <span className="details-register">Nội dung</span>
                            <JoditEditor
                                ref={editor}
                                tabIndex={1}
                                onChange={newContent => {setInfoNews({...infoNews, 'Noi_Dung': newContent})}}
                            />
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={() => {handleAddNews(infoNews)}}>Đăng bài viết</button>
                            <button className="btn-cancel">Hủy</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Fragment>
    )
}

export default CreatePageNews;