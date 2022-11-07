import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const OrderTable = () => {
    const detail_order_tooltip = () => <span>Chi tiết</span>
    const delete_order_tooltip = () => <span>Xóa</span>
    const save_order_tooltip = () => <span>Lưu</span>

      const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'idOrder', headerName: 'Mã HĐ', width: 100},
        { field: 'idCustomer', headerName: 'Mã KH', width: 130},
        { field: 'address', headerName: 'Địa chỉ', width: 300},
        { field: 'status', headerName: 'Trạng thái', width:130},
        { field: 'total', headerName: 'Tổng tiền', width: 140, type: 'number'},
        { field: 'createAt', headerName: 'Ngày tạo', width: 120},
        {
            field: 'detail', headerName: 'Chi tiết', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={detail_order_tooltip}>
                        <div className="icon-edit-book">
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </div>
                    </Tooltip>
                )
            }
        },
        {
            field: 'delete', headerName: 'Xóa', width: 90, sortable: false,
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
            field: 'save', headerName: 'Lưu', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={save_order_tooltip}>
                        <div className="icon-hidden-book">
                            <FontAwesomeIcon icon={faFloppyDisk}/>
                        </div>
                    </Tooltip>
                )
            }
        }
      ];

      const rows = [
       { 
            id: 1, 
            idOrder: "HĐ1",
            idCustomer: "KH1",
            status: "Chưa xử lý",
            createAt: "06-11-2022",
            total: "21012001"
        },
        { 
            id: 2, 
            idOrder: "HĐ2",
            idCustomer: "KH1",
            status: "Chưa xử lý",
            createAt: "07-11-2022",
            total: "21012001"
        },
      ];
    return(
        <Fragment>
            <div style={{ height: 579, width: '1236px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                />
            </div>
        </Fragment>
    )
}

export default OrderTable;