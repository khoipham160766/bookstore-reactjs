import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const RegisterPage = () => {
    return(
        <Fragment>
            <div className="container-register px-5">
                <div>
                    <Link to="/home"><img src="./images/logo-login.png" alt="" className="style-img-form-register"/></Link>
                </div>
                <div className="title-register">Đăng ký</div>
                <div className="content-register">
                    <form action="#">
                        <div className="user-details-register">
                            <div className="input-box-register">
                                <span className="details-register">Họ tên</span>
                                <input type="text" placeholder="Nhập họ tên..." required/>
                            </div>
                            {/* <div className="input-box-register">
                                <span className="details-register">Username</span>
                                <input type="text" placeholder="Enter your username" required/>
                            </div> */}
                            <div className="input-box-register">
                                <span className="details-register">Email</span>
                                <input type="text" placeholder="Nhập email..." required/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Số điện thoại</span>
                                <input type="text" placeholder="Nhập số điện thoại..." required/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Mật khẩu</span>
                                <input type="text" placeholder="Nhập mật khẩu..." required/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Xác nhận lại mật khẩu</span>
                                <input type="text" placeholder="Nhập lại mật khẩu..." required/>
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
                        <div className="button-register">
                            <input type="submit" value="Đăng ký"/>
                        </div>
                        <div>
                            <p className="style-p-form-register">Nếu bạn đã có tài khoản. Chọn <Link to="/login">đăng nhập</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage;