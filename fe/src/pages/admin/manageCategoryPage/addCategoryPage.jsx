import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import HandleModal from "../../../components/admin/handle/modal";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import "./style.css";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const AddCategoryPage = () => {
    const navigate= useNavigate();
    const [infoCategory, setInfoCategory] = useState({});
    const [showModalCancelAddCategory, setShowModalCancelAddCategory] = useState(false);
    // function
    const handleCloseModalAddCategory = () => setShowModalCancelAddCategory(false);
    const handleShowModalAddCategory = () => setShowModalCancelAddCategory(true);
    const handleInputCategory = (e) => {
        const {name, value} = e.target;
        setInfoCategory({...infoCategory, [name]: value });
    }
    const handleAddCategory = async(datacategory) => {
        const response = await axios.post("http://localhost:8000/api/category", datacategory);
        if(response.data.status === "success"){
            swal({
                title: "Thêm thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/categories'));
        }
    }
    return(
        <Fragment>
            <ButtonReturn link="/admin/categories" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Thêm thể loại mới</h3>
                </div>
                <div className="content-add">
                    <div className="info-add">
                        <div className="input-box-info custom-info-add-category">
                            <span className="details-info">Tên danh mục</span>
                            <input type="text" placeholder="Nhập tên sản phẩm..." onChange={handleInputCategory} required name="Ten_DM"/>
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={()=>handleAddCategory(infoCategory)}>Thêm</button>
                            <button className="btn-cancel" onClick={handleShowModalAddCategory}>Hủy</button>
                        </div>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelAddCategory} 
                handleClose={handleCloseModalAddCategory} 
                content="Xác nhận hủy thêm danh mục"
                link="/admin/categories"
                title="Hủy thêm"
            />
        </Fragment>
    )
}

export default AddCategoryPage;