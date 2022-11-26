import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import HandleModal from "../../../components/admin/handle/modal";
import axios from "axios";
import swal from 'sweetalert';

const EditCategoryPage = () => {
    const navigate= useNavigate();
    const {idcategory} = useParams();
    const [infoCategory, setInfoCategory] = useState({'Ten_DM': ''});
    const [showModalCancelEditCategory, setShowModalCancelEditCategory] = useState(false);
    // function
    const handleCloseModalEditCategory = () => setShowModalCancelEditCategory(false);
    const handleShowModalEditCategory = () => setShowModalCancelEditCategory(true);
    const handleInputCategory = (e) => {
        const {name, value} = e.target;
        setInfoCategory({...infoCategory, [name]: value });
    }
    // CRUD
    const handleEditCategory = async(datacategory) => {
        const id = datacategory.Ma_DM;
        delete datacategory.id;
        delete datacategory.created_at;
        delete datacategory.updated_at;
        const response = await axios.put(`http://localhost:8000/api/category/${id}`, datacategory);
        if(response.data.status === "success"){
            swal({
                title: "Sửa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/categories'));
        }
    }
    // axios
    useEffect(()=>{
        const getInfoCategory = async() => {
            const response = await axios.get(`http://localhost:8000/api/category/${idcategory}`);
            setInfoCategory(response.data.data)
        }
        getInfoCategory();
    },[idcategory])
    return(
        <Fragment>
             <ButtonReturn link="/admin/categories" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Sửa thông tin loại sản phẩm</h3>
                </div>
                <div className="content-add">
                    <div className="info-add">
                        <div className="input-box-info custom-info-add-category">
                            <span className="details-info">Tên danh mục</span>
                            <input type="text" value={infoCategory.Ten_DM} placeholder="Tên loại..." onChange={handleInputCategory} required name="Ten_DM"/>
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={()=>handleEditCategory(infoCategory)}>Xác nhận sửa</button>
                            <button className="btn-cancel" onClick={handleShowModalEditCategory}>Hủy</button>
                        </div>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditCategory} 
                handleClose={handleCloseModalEditCategory} 
                content="Xác nhận hủy sửa danh mục"
                link="/admin/categories"
                title="Hủy sửa"
            />
        </Fragment>
    )
}

export default EditCategoryPage;