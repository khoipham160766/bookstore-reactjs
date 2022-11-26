import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChangePassword = props => {
    const [statusPassword1, setStatusPassword1] = useState("password");
    const [iconEye1,setIconEye1] = useState(faEye);
    const [statusPassword2, setStatusPassword2] = useState("password");
    const [iconEye2,setIconEye2] = useState(faEye);
    const [statusPassword3, setStatusPassword3] = useState("password");
    const [iconEye3,setIconEye3] = useState(faEye);
    
    const handleIconEye1 = () => {
        setStatusPassword1(statusPassword1 === "password"?"text":"password");
        setIconEye1(iconEye1 === faEye?faEyeSlash:faEye);
    }
    const handleIconEye2 = () => {
        setStatusPassword2(statusPassword2 === "password"?"text":"password");
        setIconEye2(iconEye2 === faEye?faEyeSlash:faEye);
    }
    const handleIconEye3 = () => {
        setStatusPassword3(statusPassword3 === "password"?"text":"password");
        setIconEye3(iconEye3 === faEye?faEyeSlash:faEye);
    }

    return(
        <Fragment>
            <Modal show={props.edit_user} onHide={props.close_model} className="form-manage-change-password">
                <Modal.Header closeButton>
                    <Modal.Title className="style-title-edit-profile">Thay đổi mật khẩu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-register form-change-password">
                        <div className="content-register">
                            <form action="#">
                                <div className="user-details-register">
                                    <div className="input-box-register">
                                        <span className="details-register">Mật khẩu cũ</span>
                                        <input type={statusPassword1} placeholder="Nhập họ tên..." required/>
                                        <FontAwesomeIcon icon={iconEye1} onClick={handleIconEye1}/>
                                    </div>
                                    <div className="input-box-register">
                                        <span className="details-register">Mật khẩu mới</span>
                                        <input type={statusPassword2} placeholder="Nhập email..." required/>
                                        <FontAwesomeIcon icon={iconEye2} onClick={handleIconEye2}/>
                                    </div>
                                    <div className="input-box-register">
                                        <span className="details-register">Nhập lại mật khẩu mới</span>
                                        <input type={statusPassword3} placeholder="Nhập số điện thoại..." required/>
                                        <FontAwesomeIcon icon={iconEye3} onClick={handleIconEye3}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.close_model}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={props.close_model}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default ChangePassword;