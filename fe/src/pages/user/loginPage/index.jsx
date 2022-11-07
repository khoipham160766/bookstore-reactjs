import React, { Fragment } from "react";
import './style.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <Fragment>
            <section className="Form my-4 mx-5">
                <div className="container">
                    <div className="row style-row">
                        <div className="col-lg-5 style-div-img">
                            <img src="../images/banner-login.png" className="img-fluid style-img" alt="" />
                        </div>
                        <div className="col-lg-7 px-5 pt-5">
                            <div>
                                <img src="../images/logo-login.png" className="style-img-form-login" alt="" />
                                <h4 className="style-h4">Đăng nhập bằng tài khoản của bạn</h4>
                            </div>
                            <div>
                                <form className="col-lg-8 style-form-login">
                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            <input type="email" placeholder="Email..." className="form-control my-3 p-4 pt-3 pb-3"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            <input type="password" placeholder="*******" className="form-control my-3 p-4 pt-3 pb-3"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            <button type="button" className="btn1 mt-3 mb-5">ĐĂNG NHẬP</button>
                                        </div>
                                    </div>
                                    <Link to="/user/forgotpassword">Quên mật khẩu ?</Link>
                                    <p>Bạn chưa có tài khoản ? Chọn <Link to="/user/register">đăng ký</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default LoginPage;