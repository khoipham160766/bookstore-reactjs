import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import HandleModal from "../../../components/admin/handle/modal";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import axios from "axios";
import swal from 'sweetalert';

const EditCustomerPage = () => {
    const navigate= useNavigate();
    const defaultInfo = {
        'id': '',
        'Ten_KH': '',
        'Ho_KH': '',
        'Dia_Chi': '',
        'SDT': '',
        'Gioi_Tinh': '',
        'Tai_Khoan': '',
        'Mat_Khau': '',
        'Avatar': '',
        'Tinh_Trang': ''
    }
    const {idcustomer} = useParams();
    const [infoCustomer, setInfoCustomer] = useState(defaultInfo);
    const [showModalCancelEditCustomer, setShowModalCancelEditCustomer] = useState(false);
    // function
    const handleCloseModalEditCustomer = () => setShowModalCancelEditCustomer(false);
    const handleShowModalEditCustomer = () => setShowModalCancelEditCustomer(true);
    const handleInputCustomer = (e) => {
        const {name, value} = e.target;
        setInfoCustomer({...infoCustomer, [name]: value });
    }

    //CRUD
     const handleEditCustomer = async(datacustomer) => {
        const id = datacustomer.id;
        delete datacustomer.id;
        delete datacustomer.created_at;
        delete datacustomer.updated_at;
        delete datacustomer.Mat_Khau;
        delete datacustomer.Tinh_Trang;
        delete datacustomer.Avatar;
        const response = await axios.put(`http://localhost:8000/api/customer/${id}`, datacustomer);
        if(response.data.status === "success"){
            swal({
                title: "Sửa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/customers'));
        }
    }
    // axios
    useEffect(()=>{
        const getInfoCustomer = async() => {
            const response = await axios.get(`http://localhost:8000/api/customer/${idcustomer}`);
            setInfoCustomer(response.data.data);
        }
        getInfoCustomer();
    },[idcustomer])
    return(
        <Fragment>
            <ButtonReturn link="/admin/customers" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>{`Sửa thông tin khách hàng có mã ${idcustomer}`}</h3>
                </div>
                <div className="content-register">
                    <form>
                        <div className="user-details-register">
                            <div className="input-box-register">
                                <span className="details-register">Họ và tên lót</span>
                                <input type="text" value={infoCustomer.Ho_KH} placeholder="Họ và tên lót..." required onChange={handleInputCustomer} name="Ho_KH"/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Tên</span>
                                <input type="text" value={infoCustomer.Ten_KH} placeholder="Tên" required onChange={handleInputCustomer} name="Ten_KH"/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Tài khoản/Email</span>
                                <input type="text" value={infoCustomer.Tai_Khoan} placeholder="Email..." onChange={handleInputCustomer} disabled/>
                            </div>
                            {/* <div className="input-box-register">
                                <span className="details-register">Mật khẩu</span>
                                <input type="password" value={infoCustomer.Mat_Khau} placeholder="Email..." onChange={handleInputCustomer} disabled/>
                            </div> */}
                           <div className="input-box-register">
                                <span className="details-register">Số điện thoại</span>
                                <input type="text"  value={infoCustomer.SDT} placeholder="Nhập số điện thoại..." onChange={handleInputCustomer} required name="SDT"/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Địa chỉ</span>
                                <input type="text"  value={infoCustomer.Dia_Chi} placeholder="Địa chỉ..." required onChange={handleInputCustomer} name="Dia_Chi"/>
                            </div>
                        </div>
                    
                        <div className="gender-details-register">
                            <input type="radio" name="Gioi_Tinh" value="Nam" id="dot-1-register" checked={(infoCustomer.Gioi_Tinh === "Nam")?true:false} onChange={handleInputCustomer}/>
                            <input type="radio" name="Gioi_Tinh" value="Nữ" id="dot-2-register"checked={(infoCustomer.Gioi_Tinh === "Nữ")?true:false} onChange={handleInputCustomer}/>
                            <input type="radio" name="Gioi_Tinh" value="Khác" id="dot-3-register"checked={(infoCustomer.Gioi_Tinh === "Khác")?true:false} onChange={handleInputCustomer}/>
                            <span className="gender-title">Giới tính</span>
                            <div className="category-register">
                                <label htmlFor="dot-1-register">
                                    <span className="dot-register one-register"></span>
                                    <span className="gender-register">Nam</span>
                                </label>
                                <label htmlFor="dot-2-register">
                                    <span className="dot-register two-register"></span>
                                    <span className="gender-register">Nữ</span>
                                </label>
                                <label htmlFor="dot-3-register">
                                    <span className="dot-register three-register"></span>
                                    <span className="gender-register">Khác</span>
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="btn-cofirm-create-news">
                        <button className="btn-create" onClick={()=>handleEditCustomer(infoCustomer)}>Xác nhận sửa</button>
                        <button className="btn-cancel" onClick={handleShowModalEditCustomer}>Hủy</button>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditCustomer} 
                handleClose={handleCloseModalEditCustomer} 
                content="Xác nhận hủy sửa khách hàng"
                link="/admin/customers"
                title="Hủy sửa"
            />
        </Fragment>
    )
}

export default EditCustomerPage;