import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditProfile = props => {
    return(
        <Fragment>
            <Modal show={props.edit_user} onHide={props.close_model} className="form-manage-edit-user">
                <Modal.Header closeButton>
                    <Modal.Title className="style-title-edit-profile">Thay đổi thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-register modal-edit-profile">
                        <div className="content-register">
                            <form action="#">
                                <div className="user-details-register">
                                    <div className="input-box-register">
                                        <span className="details-register">Họ và tên lót</span>
                                        <input type="text" placeholder="Nhập họ tên..." required/>
                                    </div>
                                    <div className="input-box-register">
                                        <span className="details-register">Tên</span>
                                        <input type="text" placeholder="Nhập email..." required/>
                                    </div>
                                    <div className="input-box-register">
                                        <span className="details-register">Số điện thoại</span>
                                        <input type="text" placeholder="Nhập số điện thoại..." required/>
                                    </div>
                                    <div className="input-box-register">
                                        <span className="details-register">Địa chỉ</span>
                                        <input type="text" placeholder="Nhập mật khẩu..." required/>
                                    </div>
                                </div>
                                <div className="gender-details-register">
                                    <input type="radio" name="gender" id="dot-1-register"/>
                                    <input type="radio" name="gender" id="dot-2-register"/>
                                    <input type="radio" name="gender" id="dot-3-register"/>
                                    <span class="gender-title">Giới tính</span>
                                    <div className="category-register">
                                        <label for="dot-1-register">
                                            <span className="dot-register one-register"></span>
                                            <span className="gender-register">Nam</span>
                                        </label>
                                        <label for="dot-2-register">
                                            <span className="dot-register two-register"></span>
                                            <span className="gender-register">Nữ</span>
                                        </label>
                                        <label for="dot-3-register">
                                            <span className="dot-register three-register"></span>
                                            <span className="gender-register">Khác</span>
                                        </label>
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

export default EditProfile;