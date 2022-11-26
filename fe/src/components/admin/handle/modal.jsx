import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import "./style.css";

const HandleModal = ({show, handleClose, content,link,title}) => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <Modal show={show} onHide={handleClose} className="handle-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="btn-close-modal">
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={()=>navigate(link)} className="btn-cancel-modal">
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default HandleModal;