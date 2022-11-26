import React, { Fragment } from "react";
import { faLocationDot, faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const ContactPage = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center text-justify contact">
                <h1>LIÊN HỆ</h1>
                <div className="gg-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.043012860291!2d106.68166589866694!3d10.759791811571533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c81c64183%3A0xd3109d7a7a8f753c!2zMjczIEFuIEQuIFbGsMahbmcsIFBoxrDhu51uZyAzLCBRdeG6rW4gNSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1665341347694!5m2!1svi!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>
                <div className="info-contact">
                    <div className="feedback">
                        <h3>Đóng góp ý kiến</h3>
                        <p>Nếu bạn có thắc mắc hoặc thông tin cần đóng góp cho chúng tôi, hãy gửi yêu cầu và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể</p>
                        <form action="contact/sendfeedback" method="post">
                            <div className="form-group style-form-group">
                                <input type="text" name="name"  className="form-control style-input" id="exampleFormControlInput1" placeholder="Tên của bạn"/>
                            </div>
                            <div className="form-group style-form-group">
                                <input type="email" name="email"  className="form-control" id="exampleFormControlInput1" placeholder="Email của bạn"/>
                            </div>
                            <div className="form-group style-form-group">
                                <textarea className="form-control" name="feedback" id="exampleFormControlTextarea1" rows="3" placeholder="Viết bản hồi"></textarea>
                            </div>
                            <button type="submit" className="btn-feedback">Gửi phản hồi</button>
                        </form>
                    </div>
                    <div className="contact">
                        <h3>Liên hệ</h3>
                        <h6>TBook</h6>
                        <p>Mang tri thức về đến ben bạn</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot}/>273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh</li>
                            <li><FontAwesomeIcon icon={faEnvelope}/>tbookstore@gmail.com</li>
                            <li><FontAwesomeIcon icon={faPhoneSquare}/>079.6060.900</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactPage;