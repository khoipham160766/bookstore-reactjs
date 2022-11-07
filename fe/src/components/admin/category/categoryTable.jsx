import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import "./style.css";

const CategoryTable = () => {
    const edit_category_tooltip = () => <span>Sửa thông tin</span>
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'typeName', headerName: 'Tên danh mục', width: 810},
        { field: 'sum', headerName: 'Số lượng sản phẩm', width: 240, type: 'number'},
        { 
            field: '7', headerName: 'Sửa', width: 120, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_category_tooltip}>
                        <div className="icon-edit-book">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                    </Tooltip>
                )
            }
        }
      ];
      
      const rows = [
        { id: 1, typeName: 'Sách văn học', sum: '40' },
        { id: 2, typeName: 'Sách tiếng anh' , sum: '50' },
        { id: 3, typeName: 'Tiểu thuyết', sum: '50' },
       
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

export default CategoryTable;