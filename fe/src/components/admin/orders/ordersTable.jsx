import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { orderColumns } from "../table/columns";
import { Tooltip } from "antd";
import "./style.css";

const OrderTable = ({listorder,loading}) => {
    const detail_order_tooltip = () => <span>Chi tiết</span>
    const delete_order_tooltip = () => <span>Xóa</span>
    const save_order_tooltip = () => <span>Lưu</span>

      const actionColumns = [
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
                />
            </div>
        </Fragment>
    )
}

export default OrderTable;