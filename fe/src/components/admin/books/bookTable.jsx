import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const BookTable = () => {
    const edit_book_tooltip = () => <span>Sửa thông tin</span>
    const hidden_book_tooltip = () => <span>Trạng thái</span>
      
      const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'bookName', headerName: 'Tên sách', width: 330},
        { field: 'type', headerName: 'Loại', width: 200},
        { field: 'price', headerName: 'Đơn giá', width: 130, type: 'number'},
        { field: 'sale', headerName: 'Giảm giá', width: 100, type: 'number'},
        { field: 'quantity', headerName: 'Số lượng', width: 100, type: 'number'},
        { field: 'nxb', headerName: 'NXB', width: 153},
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_book_tooltip}>
                        <div className="icon-edit-book">
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </div>
                    </Tooltip>
                )
            }
        },
        {
            field: 'hide', headerName: 'Ẩn/Hiện', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={hidden_book_tooltip}>
                        <div className="icon-hidden-book">
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                    </Tooltip>
                )
            }
        }
      ];

      const rows = [
        { id: 1, bookName: '100.000', type: 'Sách Văn Học', price: 100.000, sale: 10, quantity: 50, NXB: "NXB Nhi Đồng" },
        { id: 2, bookName: '110.000', type: 'Sách Thiếu Nhi', price: 120.000, sale: 15, quantity: 57, NXB: "NXB Thanh Niên" },
       
      ];
    return(
        <Fragment>
            <div style={{ height: 579, width: '1236px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    key="1"
                />
            </div>
        </Fragment>
    )
}

export default BookTable;