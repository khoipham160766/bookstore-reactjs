import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { categoryColumns } from "../table/columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const CategoryTable = ({listcategory,loading}) => {  
    const edit_category_tooltip = () => <span>Sửa thông tin</span>
    const actionColumns = [
        { 
            field: 'edit', headerName: 'Sửa', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_category_tooltip}>
                        <Link to={`/admin/categories/edit/${params.row.Ma_DM}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        }
    ]    
    return(
        <Fragment>
            <div style={{width: '1236px' }}>
                <DataGrid
                    rows={listcategory}
                    columns={categoryColumns.concat(actionColumns)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    getRowId={row => row.id}
                    autoHeight={true}
                    loading={loading}
                    className="table-mui-grid"
                />
            </div>
        </Fragment>
    )
}

export default CategoryTable;