import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ButtonReturn = ({link}) => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className="btn-return-full">
                <p onClick={()=>navigate(link)}>
                    <FontAwesomeIcon className="icon-return" icon={faArrowLeftLong}/>
                    Quay lại
                </p>
            </div>
        </Fragment>
    )
}

export default ButtonReturn;