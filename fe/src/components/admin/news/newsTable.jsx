import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { newsColumns } from "../table/columns";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./style.css";
import axios from "axios";

const NewsTable = ({listnews,loading}) => {
    const navigate= useNavigate();
    const edit_news_tooltip = () => <span>Sửa thông tin</span>
    const delete_news_tooltip = () => <span>Xóa</span>
    //CRUD
    const handleDeleteNews = async(id) => {
        const response = await axios.delete(`http://localhost:8000/api/news/${id}`);
        if(response.data.status === "success"){
            swal({
                title: "Xóa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/news'));
        }
    }
    const actionColumns = [
        { 
            field: '7', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_news_tooltip}>
                        <Link to={`/admin/news/edit/${params.row.Ma_TT}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        { 
            field: '8', headerName: 'Xóa', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={delete_news_tooltip}>
                        <div className="icon-hidden-book" onClick={()=>handleDeleteNews(params.row.Ma_TT)}>
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
                    className="table-mui-grid"
                />
            </div>
        </Fragment>
    )
}

export default NewsTable;