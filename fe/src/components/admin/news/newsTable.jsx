import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const NewsTable = () => {
    const edit_news_tooltip = () => <span>Sửa thông tin</span>
    const delete_news_tooltip = () => <span>Xóa</span>
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'lastName', headerName: 'Tiêu đề', width: 430},
        { field: '1', headerName: 'Loại', width: 170},
        { field: 'age', headerName: 'Danh mục', width: 235},
        { field: '4', headerName: 'Ngày đăng', width: 170, type: 'number'},
        { 
            field: '7', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_news_tooltip}>
                        <div className="icon-edit-book">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                    </Tooltip>
                )
            }
        },
        { 
            field: '8', headerName: 'Xóa', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={delete_news_tooltip}>
                        <div className="icon-hidden-book">
                        <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </Tooltip>
                )
            }
        }
      ];
      
      const rows = [
        { id: 1, lastName: '100.000', firstName: 'Jon', age: 100.000 },
        { id: 2, lastName: '200.000' , firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister c', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: '150.000', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

export default NewsTable;