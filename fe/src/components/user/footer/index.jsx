import React, { Fragment } from "react";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return(
        <Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6><img src="../images/logo-about.png" className="class-style-about" alt=""/></h6>
                            <p className="text-justify">
                                Sứ mệnh của chúng tôi là mang đến cho khách hàng những cuốn sách với nội dung hay và giá cả hợp lí
                                - với qui mô vừa nhỏ nhưng chúng tôi luôn mong sự ủng hộ của quí khách cùng với sự nổ lực với phương châm "Sách là bạn, 
                                khách hàng là thượng đế". Nhà sách sẽ ngày càng phát triển mạnh mẽ và ngày càng phát triển vững mạnh và đáp ứng nhu cầu 
                                đọc sách không chỉ từ những người yêu sách trong nước mà với cả bạn ở nước ngoài.
                            </p>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3">
                            <h6>Danh mục</h6>
                            <ul className="footer-links">
                                {/* Danh mục */}
                                <li><Link to="/">Sách Tiếng Anh</Link></li>
                                <li><Link to="/">Sách Văn Học</Link></li>
                                <li><Link to="/">Tiểu Thuyết</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3">
                            <h6>Liên kết</h6>
                            <ul className="footer-links">
                               {/* Dường dẫn khác của trang web */}
                                <li><Link to="/">Sản Phẩm</Link></li>
                                <li><Link to="/">Giới Thiệu</Link></li>
                                <li><Link to="/">Tin Tức</Link></li>
                                <li><Link to="/">Liên Hệ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Developed by team MNM</p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><Link className="facebook" to="/"><FontAwesomeIcon icon={faFacebook}/></Link></li>
                                <li><Link className="twitter" to="/"><FontAwesomeIcon icon={faTwitter}/></Link></li>
                                <li><Link className="dribbble" to="/"><FontAwesomeIcon icon={faInstagram}/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;