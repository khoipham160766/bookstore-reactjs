import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import "./style.css";

const DetailOrderPage = () => {
    const defaultInfoOrder = {
        'Trang_Thai': '',
        'Ma_KH': {
            'Ho_KH': '',
            'Ten_KH': ''
        },
        'Dia_Chi': '',
        'SDT': '',
        'Tong_Tien': '',
        'Thanh_Tien': '',
    }
    const defaultDetail = {
        'So_Luong': '',
        'Thong_Tin_San_Pham': {
            'Ten_SP': '',
            'Don_Gia': '',
            'Danh_Muc': {
                'Ten_DM': ''
            },
            'Hinh_Anh': '',
        }
    }
    const {idorder} = useParams();
    const [infoOrder, setInfoOrder] = useState(defaultInfoOrder);
    const [detailOrder, setDetailOrder] = useState([defaultDetail]);

    // axios
    useEffect(()=>{
        const getInfoOrder = async() => {
            const response = await axios.get(`http://localhost:8000/api/order/${idorder}`);
            setInfoOrder(response.data.data);
        }
        getInfoOrder();
        const getDetailOrder = async() => {
            const response = await axios.get(`http://localhost:8000/api/orderdetail/${idorder}`);
            setDetailOrder(response.data.data);
        }
        getDetailOrder();
    },[idorder])
    return(
        <Fragment>
            <ButtonReturn link="/admin/orders" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Chi tiết hóa đơn {idorder}</h3>
                </div>
                <div className="container py-4 px-4 justify-content-center manage-page">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="title-detail-order-info">
                                <h5>Thông tin nhận hàng</h5>
                            </div>
                            <div className="detail-order-info">
                                <p className="status">Trạng thái đơn hàng: {infoOrder.Trang_Thai}</p>
                                <p className="name">{`${infoOrder.Ma_KH.Ho_KH} ${infoOrder.Ma_KH.Ten_KH}`}</p>
                                <p className="phone-no">{infoOrder.SDT}</p>
                                <p className="address">{infoOrder.Dia_Chi}</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="d-flex flex-column h-100">
                                <div className="title-detail-order-product">
                                    <h5>Sản phẩm</h5>
                                </div>
                                <div className="detail-order-product-table">
                                    <table>
                                        <tbody>
                                            {
                                                detailOrder.map((detail,index) => (
                                                    <tr key={index}>
                                                        <td className="img-product">
                                                            <img src={detail.Thong_Tin_San_Pham.Hinh_Anh} alt=""/>
                                                        </td>
                                                        <td className="info-product">
                                                            <p className="name">{detail.Thong_Tin_San_Pham.Ten_SP}</p>
                                                            <p className="type">Loại: <span>{detail.Thong_Tin_San_Pham.Danh_Muc.Ten_DM}</span></p>
                                                            <p className="quantity">Số lượng: {detail.So_Luong}</p>
                                                        </td>
                                                        <td className="price-product">
                                                            <p className="price">{detail.Thong_Tin_San_Pham.Don_Gia.replace('.','') * detail.So_Luong}</p>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-order-info-payment">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="title-detail-order-payment">Tổng tiền hàng:</td>
                                    <td className="price-detail">
                                     {infoOrder.Tong_Tien}đ
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title-detail-order-payment">Giảm giá:</td>
                                    <td className="price-detail">0đ</td>
                                </tr>
                                <tr>
                                    <td className="title-detail-order-payment">Thành tiền:</td>
                                    <td className="price-sum">{infoOrder.Thanh_Tien}đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Box>
        </Fragment>
    )
}

export default DetailOrderPage;