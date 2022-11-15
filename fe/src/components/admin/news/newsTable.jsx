import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { newsColumns } from "../table/columns";
import "./style.css";

const NewsTable = ({listnews,loading}) => {
    const edit_news_tooltip = () => <span>Sửa thông tin</span>
    const delete_news_tooltip = () => <span>Xóa</span>
    const actionColumns = [
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
    return(
        <Fragment>
            <div style={{ width: '1236px' }}>
                <DataGrid
                    rows={listnews}
                    columns={newsColumns.concat(actionColumns)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    getRowId={row => row.id}
                    autoHeight={true}
                    loading={loading}
                />
            </div>
        </Fragment>
    )
}

export default NewsTable;