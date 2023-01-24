import React, { Fragment, useEffect, useState } from "react";
import EditProfile from "./editProfile";
import ChangePassword from "./changePassword";
import ChangeAvatar from "./changeAvatar";
import "./style.css";

const ProfileUser = () => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showChangeAvatar, setShowChangeAvatar] = useState(false);
    const [imgCrop, setImgCrop] = useState(false);
    const [storeImage, setStoreImage] = useState("");
    const [infoUser, setInfoUser] = useState({'Gioi_Tinh':'','Dia_Chi': '', 'Ho_KH': '', 'Ten_KH': '','SDT': '', 'email': ''});
 
    const onCrop = (view) => {
        setImgCrop(view)
    }
    const onClose = () =>{
        setImgCrop(null);
    }
    const saveImage = () => {
        setShowChangeAvatar(false);
        setStoreImage(imgCrop)
    }
   // const profileImageShow = storeImage.map(item => item.imgCrop);
    const handleCloseEditProfile = () => setShowEditProfile(false);
    const handleShowEditProfile = () => setShowEditProfile(true);

    const handleCloseChangePassword = () => setShowChangePassword(false);
    const handleShowChangePassword = () => setShowChangePassword(true);

    const handleCloseChangeAvatar = () => setShowChangeAvatar(false);
    const handleShowChangeAvatar = () => setShowChangeAvatar(true);
    //function
    const getInfoUser = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "bearer " + localStorage.getItem("accessToken") );

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8000/api/auth/me", requestOptions)
        .then(response => {
            console.log(response)
            if(localStorage.getItem("accessToken")){
             return response.json()
            }
            throw Error(response.status)
        })
        .then(result => {
            setInfoUser(result);
           // alert("Đã đăng nhập")
        })
        .catch(error => {
            console.log('error', error)
           // alert("Chưa đăng nhập")
        });
    }
    useEffect(()=>{
        getInfoUser();
    },[])
    console.log(infoUser)
    return(
        <Fragment>
            <div className="row profile-user-page">
                <div className="col-lg-4">
                    <div className="profile-avatar">
                        <img className="style-avatar" src={storeImage !== ""?storeImage:"../../images/avatar-nobody.jpg"} alt="avatar"/>
                        <span>{infoUser.email}</span>
                        <button className="change-avatar" onClick={handleShowChangeAvatar}>đổi ảnh</button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="d-flex flex-column h-100">
                        <div className="profile-user">
                            <h3>Thông tin cá nhân</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <td>{infoUser.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Họ tên</th>
                                        <td>{`${infoUser.Ho_KH} ${infoUser.Ten_KH}`} </td>
                                    </tr>
                                    <tr>
                                        <th>Số điện thoại</th>
                                        <td>{infoUser.SDT}</td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ</th>
                                        <td>{infoUser.Dia_Chi}</td>
                                    </tr>
                                    <tr>
                                        <th>Giới tính</th>
                                        <td>{infoUser.Gioi_Tinh}</td>
                                    </tr>
                                    <tr>
                                        <th>Mật khẩu</th>
                                        <td>***********</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="profile-user-button row">
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column h-100">
                                        <button onClick={handleShowEditProfile}>Thay đổi thông tin</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column h-100">
                                        <button onClick={handleShowChangePassword}>Thay đổi mật khẩu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfile edit_user = {showEditProfile} close_model = {handleCloseEditProfile}/>
            <ChangePassword edit_user = {showChangePassword} close_model = {handleCloseChangePassword}/>
            <ChangeAvatar edit_user = {showChangeAvatar} close_model = {handleCloseChangeAvatar} onCrop={onCrop} onClose={onClose} saveImage={saveImage}/>
        </Fragment>
    )
}

export default ProfileUser;