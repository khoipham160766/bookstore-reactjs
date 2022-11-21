import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { customerColumns } from "../table/columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUnlock, faLock } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const CustomerTable = ({listcustomer,loading,setListCustomer}) => {
    const edit_customer_tooltip = () => <span>Sửa thông tin</span>
    const status_customer_tooltip = () => <span>Trạng thái</span>
    //function
    const handleSetStatusCustomer = (id, nowstatus) => {
        const data = {
            'Tinh_Trang': (nowstatus === 1)?'0':'1'
        }
        axios.put(`http://localhost:8000/api/customer/${id}`, data);
        setListCustomer(listcustomer.map((customer)=>(
            (customer.id === id)?{...customer,'Tinh_Trang': (customer.Tinh_Trang === 0)?1:0}:customer
        ))
        )
    }
    const actionColumns = [
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_customer_tooltip}>
                        <Link to={`/admin/customers/edit/${params.row.id}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        {
            field: 'status', headerName: 'Tình trạng', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={status_customer_tooltip}>
                        <div className="icon-hidden-book" onClick={()=>handleSetStatusCustomer(params.row.id, params.row.Tinh_Trang)}>
                            <FontAwesomeIcon icon={(params.row.Tinh_Trang === 1)?faUnlock:faLock} />
                        </div>
                    </Tooltip>
                )
            }
        }
    ]
    return(
        <Fragment>
            <div style={{ width: '1236px' }}>
                <DataGrid
                    rows={listcustomer}
                    columns={customerColumns.concat(actionColumns)}
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

export default CustomerTable;