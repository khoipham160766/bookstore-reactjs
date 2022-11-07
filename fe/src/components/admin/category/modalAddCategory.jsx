import React, { Fragment } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import "./style.css";

const ModalAddCategory = props => {

    return(
        <Fragment>
            <Modal show={props.showModalAddCategory} onHide={props.handleCloseModalAddCategory} className="custom-modal-add">
                <Modal.Header closeButton>
                    <Modal.Title className="title-add">Thêm Danh Mục Mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-add">
                        <form action="#">
                            <div className="info-add">
                                <div className="input-box-info custom-info-add-category">
                                    <span className="details-info">Tên danh mục</span>
                                    <input type="text" placeholder="Nhập tên sản phẩm..." required onFocus/>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="button-destroy-add" onClick={props.handleCloseModalAddCategory}>
                        Hủy
                    </Button>
                    <Button variant="primary" className="button-cofirm-add" onClick={props.handleCloseModelAddCategory}>
                        Thêm
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default ModalAddCategory;