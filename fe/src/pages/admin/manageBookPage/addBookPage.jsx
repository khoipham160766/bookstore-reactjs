import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import axios from "axios";
import { handleAddBook } from "../../../components/admin/handle/handle";
import "./style.css";

const AddBookPage = () => {
    const [selectModalAddBook, setSelectModalAddBook] = useState([]);
    const [infoBook, setInfoBook] = useState({'Hinh_Anh': 'avt','So_Luong': 0, 'Giam_Gia': 0, 'Tinh_Trang': 1, 'Danh_Muc': 1});
    const [imageBook, setImageBook] = useState("");
    // axios
    useEffect(()=>{
        const getSelectModalAddBook = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setSelectModalAddBook(response.data.data);
        }
        getSelectModalAddBook();
    },[]);
    // function
    const handleInputChangeBook = e => {
        const {name, value} = e.target;
        setInfoBook({...infoBook, [name]: value});
        
    }
    const handleUploadImageBook = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImageBook(reader.result);
               // console.log(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        setInfoBook({...infoBook, 'Hinh_Anh': e.target.files[0].name })
    }
    return(
        <Fragment>
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Thêm sách mới</h3>
                </div>
                <div className="content-add">
                    <div className="info-add">
                        <div className="input-box-info">
                            <span className="details-info">Tên SP</span>
                            <input type="text" placeholder="Nhập tên sản phẩm..." required onChange={handleInputChangeBook} name="Ten_SP"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">NXB</span>
                            <input type="text" placeholder="Nhập nhà xuất bản..." required onChange={handleInputChangeBook} name="NXB"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">Tác giả</span>
                            <input type="text" placeholder="Nhập tên tác giả..." required onChange={handleInputChangeBook} name="Tac_Gia"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">Đơn giá</span>
                            <input type="text" placeholder="Nhập đơn giá..." required  onChange={handleInputChangeBook} name="Don_Gia"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">Số lượng</span>
                            <input type="text" value="0" required disabled/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">Danh mục</span>
                            <select className="form-select" aria-label="Default select example" onChange={handleInputChangeBook} name="Danh_Muc" >
                                {
                                    selectModalAddBook.map((option,index)=>(
                                        <option value={option.id} key={index}>{option.Ten_DM}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="input-box-info area-description">
                            <span className="details-info">Mô tả</span>
                            <textarea rows="5" className="input-area" required onChange={handleInputChangeBook} name="Mo_Ta"></textarea>
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
                            <button className="btn-create" onClick={()=>{handleAddBook(infoBook)}}>Thêm</button>
                            <button className="btn-cancel">Hủy</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Fragment>
    )
}

export default AddBookPage;