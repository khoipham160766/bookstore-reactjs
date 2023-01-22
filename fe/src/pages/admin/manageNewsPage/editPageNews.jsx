import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import JoditEditor from 'jodit-react';
import { useParams } from "react-router-dom";
import "./style.css";
import HandleModal from "../../../components/admin/handle/modal";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const EditPageNews = () => {
    const navigate= useNavigate();
    const defaultInfoNews = {
        'Tieu_De': '',
        'Loai_Tin_Tuc': '',
        'Ma_DM': {
            'id': '',
        },
        'Noi_Dung': '',
        'Hinh_Chinh': ''
    }
    const {idnews} = useParams();
    const editor = useRef(null);
    const [infoNews, setInfoNews] = useState(defaultInfoNews);
    const [showModalCancelEditNews, setShowModalCancelEditNews] = useState(false);
    const [imageBook, setImageBook] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    // function
    const handleCloseModalEditNews = () => setShowModalCancelEditNews(false);
    const handleShowModalEditNews = () => setShowModalCancelEditNews(true);
    useEffect(()=>{
        const getInfoNews = async() => {
            const response = await axios.get(`http://localhost:8000/api/news/${idnews}`);
            setInfoNews(response.data.data);
        }
        getInfoNews();
    },[idnews])
    useEffect(()=>{
        setImageBook(infoNews.Hinh_Chinh);
    },[infoNews])
    //get data
    const handleInputChangeNews = (e) => {
        const {value, name} = e.target;
        setInfoNews({...infoNews,[name]: value, 
                    'Ma_NV': 1,});
    } 
    console.log(infoNews)
    const handleUploadImageBook = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImageBook(reader.result);
               // console.log(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        setInfoNews({...infoNews, 'Hinh_Chinh': e.target.files[0].name })
        setImageUpload(e.target.files[0]);
    }
    // CRUD
    const axiosEditNews = async(datanews) => {
        const id = datanews.Ma_TT;
        delete datanews.id;
        delete datanews.created_at;
        delete datanews.updated_at;
        const response = await axios.put(`http://localhost:8000/api/news/${id}`, datanews);
        if(response.data.status === "success"){
            swal({
                title: "Sửa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/news'));
        }
    }
    const handleEditNews = (datanews) => {
        const data = new FormData();
        data.append("file",imageUpload);
        data.append("upload_preset","imagesbookstore");
        fetch("https://api.cloudinary.com/v1_1/dgkrtexdv/image/upload",{
            method: "post",
            body: data,
        })
        .then((res)=>res.json())
        .then((data)=>{
             datanews.Hinh_Chinh = data.secure_url;
            axiosEditNews(datanews);
          
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <Fragment>
            <ButtonReturn link="/admin/news" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Sửa bài viết có mã {idnews}</h3>
                </div>
                <div className="content-register">
                    <div className="user-details-register">
                        <div className="input-box-register input-create-page-news-title">
                            <span className="details-register">Tiêu đề bài viết</span>
                            <input type="text" value={infoNews.Tieu_De} placeholder="Nhập tiêu đề..." required onChange={handleInputChangeNews} name="Tieu_De"/>
                        </div>
                        <div className="input-box-register">
                            <span className="details-register">Loại</span>
                            <select className="form-select" value={infoNews.Loai_Tin_Tuc} aria-label="Default select example" onChange={handleInputChangeNews} name="Loai_Tin_Tuc">
                                <option value="Khuyến Mãi">Khuyến Mãi</option>
                                <option value="Tin Tức Sản phẩm">Tin Tức Sản phẩm</option>
                            </select>
                        </div>
                        {/* <div className="input-box-register">
                            <span className="details-register">Danh mục</span>
                            <select className="form-select" value={infoNews.Ma_DM.Ma_DM} aria-label="Default select example" onChange={handleInputChangeNews} name="Ma_DM">
                                {
                                    selectType.map((option, index)=> (
                                        <option value={option.id} key={index}>{option.Ten_DM}</option>
                                    ))
                                }
                            </select>
                        </div> */}
                        <div className="input-box-register input-create-page-news-description">
                            <span className="details-register">Nội dung</span>
                            <JoditEditor
                                ref={editor}
                                tabIndex={1}
                                value={infoNews.Noi_Dung}
                                onChange={newContent => {setInfoNews({...infoNews, 'Noi_Dung': newContent})}}
                            />
                        </div>
                        <div className="input-box-info image-product">
                            <span className="details-info">Hình ảnh</span>
                            <div className="upload-image">
                                <button type="button" className="btn-warning">
                                    <FontAwesomeIcon icon={faUpload} />
                                    Chọn ảnh
                                    <input type="file" onChange={handleUploadImageBook}/>
                                </button>
                            </div>
                            <div className="image-upload">
                                <img src={imageBook} alt=""/>
                            </div>
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={()=>handleEditNews(infoNews)}>Xác nhận sửa</button>
                            <button className="btn-cancel" onClick={handleShowModalEditNews}>Hủy</button>
                        </div>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditNews} 
                handleClose={handleCloseModalEditNews} 
                content="Xác nhận hủy sửa bài viết"
                link="/admin/news"
                title="Hủy sửa"
            />
        </Fragment>
    )
}

export default EditPageNews;