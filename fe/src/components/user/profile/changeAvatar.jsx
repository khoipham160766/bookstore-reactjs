import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Avatar from 'react-avatar-edit';


const ChangeAvatar = props => {
    return(
        <Fragment>
            <Modal show={props.edit_user} onHide={props.close_model} className="form-manage-change-avatar">
                <Modal.Header closeButton>
                    <Modal.Title className="style-title-edit-profile">Thay đổi ảnh đại diện</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Avatar
                        width={466}
                        height={300}
                        onClose={props.onClose}
                        onCrop={props.onCrop}
                        margin={"auto"}
                        className="abc"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.close_model}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={props.saveImage}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default ChangeAvatar;