import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import "./style.css";

const DetailFeedbackPage = () => {
    const defaultInfoFeedback = {
        'Ma_KH': {
            'Ho_KH': '',
            'Ten_KH': ''
        },
        'Email': '',
        'Noi_Dung': '',
        'created_at': ''
    }
    const {idfeedback} = useParams();
    const [infoFeecback, setInfoFeedback] = useState(defaultInfoFeedback);
    // axios
    useEffect(()=>{
        const getInfoFeedback = async() => {
            const response = await axios.get(`http://localhost:8000/api/feedback/${idfeedback}`);
            setInfoFeedback(response.data.data);
        }
        getInfoFeedback();
    },[idfeedback])
    return(
        <Fragment>
             <ButtonReturn link="/admin/feedback" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Chi tiết phản hồi có mã {idfeedback}</h3>
                </div>
                <div className="table-detail-feedback">
                    <table>
                        <tbody>
                            <tr>
                                <th>Tên người phản hồi</th>
                                <td>{`${infoFeecback.Ma_KH.Ho_KH} ${infoFeecback.Ma_KH.Ten_KH}`}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{infoFeecback.Email}</td>
                            </tr>
                            <tr>
                                <th>Ngày gửi</th>
                                <td>{infoFeecback.created_at}</td>
                            </tr>
                            <tr>
                                <th>Nội dung</th>
                                <td>{infoFeecback.Noi_Dung}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Box>
        </Fragment>
    )
}

export default DetailFeedbackPage;