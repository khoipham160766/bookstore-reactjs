import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import HandleModal from "../../../components/admin/handle/modal";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import axios from "axios";
import swal from 'sweetalert';

const EditEmployeePage = () => {
    const navigate= useNavigate();
    const defaultInfo = {
        'id': '',
        'Ten_NV': '',
        'Ho_NV': '',
        'Dia_Chi': '',
        'SDT': '',
        'Gioi_Tinh': '',
        'Tai_Khoan': '',
        'Mat_Khau': '',
        'Avatar': '',
        'Quyen': {
            'id': '',
        },
        'Tinh_Trang': ''
    }
    const {idemployee} = useParams();
    const [infoEmployee, setInfoEmployee] = useState(defaultInfo);
    const [selectPermission, setSelectPermission] = useState([]);
    const [showModalCancelEditEmployee, setShowModalCancelEditEmployee] = useState(false);
    // function
    const handleCloseModalEditEmployee = () => setShowModalCancelEditEmployee(false);
    const handleShowModalEditEmployee = () => setShowModalCancelEditEmployee(true);
    const handleInputEmployee = (e) => {
        const {name, value} = e.target;
        setInfoEmployee({...infoEmployee, [name]: value });
    }
    // CRUD
    const handleEditEmployee = async(dataemployee) => {
        dataemployee = {...dataemployee, 'Quyen': (!(dataemployee.Quyen.id)?dataemployee.Quyen:dataemployee.Quyen.id)};
        const id = dataemployee.id;
        delete dataemployee.id;
        delete dataemployee.created_at;
        delete dataemployee.updated_at;
        delete dataemployee.Mat_Khau;
        delete dataemployee.Tinh_Trang;
        const response = await axios.put(`http://localhost:8000/api/employee/${id}`, dataemployee);
        if(response.data.status === "success"){
            swal({
                title: "Sửa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/employees'));
        }
    }
    // axios
    useEffect(()=>{
        const getInfoEmployee = async() => {
            const response = await axios.get(`http://localhost:8000/api/employee/${idemployee}`);
            setInfoEmployee(response.data.data);
        }
        getInfoEmployee();
        const getSelectPermission = async() => {
            const response = await axios.get("http://localhost:8000/api/permission");
            setSelectPermission(response.data.data);
        }
        getSelectPermission();
    },[idemployee])
    return(
        <Fragment>
            <ButtonReturn link="/admin/employees" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>{`Sửa thông tin nhân viên có mã ${idemployee}`}</h3>
                </div>
                <div className=" content-add">
                    <form>
                        <div className="info-add">
                            <div className="input-box-info">
                                <span className="details-info">Họ và tên lót</span>
                                <input type="text" value={infoEmployee.Ho_NV} placeholder="Họ và tên lót..." required onChange={handleInputEmployee} name="Ho_NV"/>
                            </div>
                            <div className="input-box-info">
                                <span className="details-info">Tên</span>
                                <input type="text" value={infoEmployee.Ten_NV} placeholder="Tên" required onChange={handleInputEmployee} name="Ten_NV"/>
                            </div>
                            <div className="input-box-info">
                                <span className="details-info">Tài khoản/Email</span>
                                <input type="text" value={infoEmployee.Tai_Khoan} placeholder="Email..." onChange={handleInputEmployee} disabled/>
                            </div>
                            {/* <div className="input-box-register">
                                <span className="details-register">Mật khẩu</span>
                                <input type="password" value={infoCustomer.Mat_Khau} placeholder="Email..." onChange={handleInputCustomer} disabled/>
                            </div> */}
                           <div className="input-box-info">
                                <span className="details-info">Số điện thoại</span>
                                <input type="text"  value={infoEmployee.SDT} placeholder="Nhập số điện thoại..." onChange={handleInputEmployee} required name="SDT"/>
                            </div>
                            <div className="input-box-info">
                                <span className="details-info">Địa chỉ</span>
                                <input type="text"  value={infoEmployee.Dia_Chi} placeholder="Địa chỉ..." required onChange={handleInputEmployee} name="Dia_Chi"/>
                            </div>
                            <div className="input-box-info">
                                <span className="details-info">Quyền</span>
                                <select className="form-select" value={infoEmployee.Quyen.id} onChange={handleInputEmployee} name="Quyen" >
                                    {
                                        selectPermission.map((option,index)=>(
                                            <option value={option.id} key={index}>{option.Ten_Quyen}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="gender-details-register">
                            <input type="radio" name="Gioi_Tinh" value="Nam" id="dot-1-register" checked={(infoEmployee.Gioi_Tinh === "Nam")?true:false} onChange={handleInputEmployee}/>
                            <input type="radio" name="Gioi_Tinh" value="Nữ" id="dot-2-register"checked={(infoEmployee.Gioi_Tinh === "Nữ")?true:false} onChange={handleInputEmployee}/>
                            <input type="radio" name="Gioi_Tinh" value="Khác" id="dot-3-register"checked={(infoEmployee.Gioi_Tinh === "Khác")?true:false} onChange={handleInputEmployee}/>
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
                        <button className="btn-create" onClick={()=> handleEditEmployee(infoEmployee)} >Xác nhận sửa</button>
                        <button className="btn-cancel" onClick={handleShowModalEditEmployee}>Hủy</button>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditEmployee} 
                handleClose={handleCloseModalEditEmployee} 
                content="Xác nhận hủy sửa nhân viên"
                link="/admin/employees"
                title="Hủy sửa"
            />
        </Fragment>
    )
}

export default EditEmployeePage;