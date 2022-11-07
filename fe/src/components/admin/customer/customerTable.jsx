import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const CustomerTable = () => {
    const edit_customer_tooltip = () => <span>Sửa thông tin</span>
    const status_customer_tooltip = () => <span>Trạng thái</span>

      const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'firstName', headerName: 'Họ và tên lót', width: 170},
        { field: 'lastName', headerName: 'Tên', width: 130},
        { field: 'gender', headerName: 'Giới tính', width: 130},
        { field: 'phoneNo', headerName: 'SĐT', width: 170, type: 'number'},
        { field: 'gmail', headerName: 'Gmail', width: 260},
        { field: 'createAt', headerName: 'Ngày tạo', width: 153, type: 'number'},
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_customer_tooltip}>
                        <div className="icon-edit-book">
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </div>
                    </Tooltip>
                )
            }
        },
        {
            field: 'status', headerName: 'Tình trạng', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={status_customer_tooltip}>
                        <div className="icon-hidden-book">
                            <FontAwesomeIcon icon={faUnlock} />
                        </div>
                    </Tooltip>
                )
            }
        }
      ];

      const rows = [
       { 
            id: 1, 
            firstName: 'Phạm Trần', 
            lastName: 'Khôi', 
            gender: 'Nam', 
            phoneNo: '0794667091', 
            gmail: 'khoipham160766@gmail.com', 
            createAt: '21-01-2022' 
        },
        { 
            id: 2, 
            firstName: 'Phạm Trần', 
            lastName: 'Khôi', 
            gender: 'Nam', 
            phoneNo: '0794667091', 
            gmail: 'khoipham160766@gmail.com', 
            createAt: '21-01-2022' 
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

export default CustomerTable;