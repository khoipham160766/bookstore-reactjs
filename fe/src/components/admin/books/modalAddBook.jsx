import React, { Fragment } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ModalAddBook = props => {

    return(
        <Fragment>
            <Modal show={props.showModalAddBook} onHide={props.handleCloseModalAddBook} className="custom-modal-add">
                <Modal.Header closeButton>
                    <Modal.Title className="title-add">Thêm Sách Mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-add">
                        <form action="#">
                            <div className="info-add">
                                <div className="input-box-info">
                                    <span className="details-info">Tên SP</span>
                                    <input type="text" placeholder="Nhập tên sản phẩm..." required onFocus/>
                                </div>
                                <div className="input-box-info">
                                    <span className="details-info">NXB</span>
                                    <input type="text" placeholder="Nhập nhà xuất bản..." required/>
                                </div>
                                <div className="input-box-info">
                                    <span className="details-info">Tác giả</span>
                                    <input type="text" placeholder="Nhập tên tác giả..." required/>
                                </div>
                                <div className="input-box-info">
                                    <span className="details-info">Đơn giá</span>
                                    <input type="text" placeholder="Nhập đơn giá..." required/>
                                </div>
                                <div className="input-box-info">
                                    <span className="details-info">Số lượng</span>
                                    <input type="text" value="0" required disabled/>
                                </div>
                                <div className="input-box-info">
                                    <span className="details-info">Danh mục</span>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Sách Văn Học</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="input-box-info area-description">
                                    <span className="details-info">Mô tả</span>
                                    <textarea rows="5" className="input-area"></textarea>
                                </div>
                                <div className="input-box-info image-product">
                                    <span className="details-info">Hình ảnh</span>
                                    <div className="upload-image">
                                        <button type="button" className="btn-warning">
                                            <FontAwesomeIcon icon={faUpload} />
                                            Chọn ảnh
                                            <input type="file" onChange={props.handleUploadImageBook}/>
                                        </button>
                                    </div>
                                    <div className="image-upload">
                                        <img src={props.imageBook} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="button-destroy-add" onClick={props.handleCloseModalAddBook}>
                        Hủy
                    </Button>
                    <Button variant="primary" className="button-cofirm-add" onClick={props.handleCloseModelAddBook}>
                        Thêm
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default ModalAddBook;