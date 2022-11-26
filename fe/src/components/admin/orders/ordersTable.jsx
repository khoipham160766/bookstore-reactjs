import React, { Fragment, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { orderColumns } from "../table/columns";
import { Tooltip } from "antd";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderTable = ({listorder,loading}) => {
    const detail_order_tooltip = () => <span>Chi tiết</span>
    const delete_order_tooltip = () => <span>Xóa</span>
    const save_order_tooltip = () => <span>Lưu</span>
    const [statusOrder,setStatusOrder] = useState({'Trang_Thai': ''});
    //function
    const handleStatusOrder = (e) => {
        const {name, value} = e.target;
        setStatusOrder({...statusOrder,[name]: value})
    }
    const handleSaveStatus = (id) => {
        if(statusOrder.Trang_Thai === ''){
            console.log("chưa cập nhật trạng thái");
        }else{
            axios.put(`http://localhost:8000/api/order/${id}`, statusOrder);
            setStatusOrder({...statusOrder, 'Trang_Thai': ''});
        }
    }
    //action columns
    const actionColumns = [
        { 
            field: 'Trang_Thai', 
            headerName: 'Trạng thái', 
            width:180,
            renderCell: (params) => {
                return(
                    <div className="columns-status-order">
                        <select 
                            name="Trang_Thai" 
                            className={
                                (params.row.Trang_Thai === "Chờ xác nhận")?"status-order-wait":
                                (params.row.Trang_Thai === "Chuẩn bị hàng")?"status-order-prepare":
                                (params.row.Trang_Thai === "Đang giao hàng")?"status-order-delivering":
                                (params.row.Trang_Thai === "Giao thành công")?"status-order-complete":
                                (params.row.Trang_Thai === "Bị hủy")?"status-order-cancel":""
                            }
                            defaultValue={params.row.Trang_Thai}
                            // onChange={handleStatusOrder}
                             onClick={handleStatusOrder}
                        >
                            <option value="Chờ xác nhận" >Chờ xác nhận</option>
                            <option value="Chuẩn bị hàng">Chuẩn bị hàng</option>
                            <option value="Đang giao hàng">Đang giao hàng</option>
                            <option value="Giao thành công">Giao thành công</option>
                            <option value="Bị hủy">Bị hủy</option>
                        </select>
                    </div>
                )
            },
        },
        {
            field: 'detail', headerName: 'Chi tiết', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={detail_order_tooltip}>
                        <Link to={`/admin/orders/detail/${params.row.Ma_DH}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faInfoCircle}/>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        {
            field: 'delete', headerName: 'Xóa', width: 50, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={delete_order_tooltip}>
                        <div className="icon-hidden-book">
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </Tooltip>
                )
            }
        },
        {
            field: 'save', headerName: 'Lưu', width: 50, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={save_order_tooltip}>
                        <div className="icon-hidden-book" onClick={()=>handleSaveStatus(params.row.id)}>
                            <FontAwesomeIcon icon={faFloppyDisk}/>
                        </div>
                    </Tooltip>
                )
            }
        }
      ];
    return(
        <Fragment>
            <div style={{width: '1236px' }}>
                <DataGrid
                    rows={listorder}
                    columns={orderColumns.concat(actionColumns)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    autoHeight={true}
                    loading={loading}
                    getRowId={row => row.id}
                    className="table-mui-grid"
                />
            </div>
        </Fragment>
    )
}

export default OrderTable;