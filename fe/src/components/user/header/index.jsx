import React, { Fragment } from "react";
import { faPhoneVolume,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import "./style.css"

const Header = () => {
    const Title_Tooltip = (title) => <span>{title}</span>;
    return(
        <Fragment>
            <div className="header w-full bg-black">
                <ul className="text-white float-left header-left">
                    <li><FontAwesomeIcon icon={faPhoneVolume} /><p>0794.667.091</p></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /><p>obstore@gmail.com</p></li>
                </ul>
                <div className="header-right">
                    <ul className="text-white float-right">
                        <li className="twitter">
                            <Tooltip placement="bottom" title={Title_Tooltip("Twitter")}>
                                <p><FontAwesomeIcon icon={faTwitter} /></p>
                            </Tooltip>
                        </li>
                        <li className="insta">
                            <Tooltip placement="bottom" title={Title_Tooltip("Instagram")}>
                                <p><FontAwesomeIcon icon={faInstagram} /></p>
                            </Tooltip>
                        </li>
                        <li className="facebook">
                            <Tooltip placement="bottom" title={Title_Tooltip("Facebook")}>
                                <p><FontAwesomeIcon icon={faFacebook}/></p>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;