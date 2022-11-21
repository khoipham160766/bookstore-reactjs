import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faInfoCircle  } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { feedbackColumns } from "../table/columns";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./style.css";
import axios from "axios";

const FeedbackTable = ({listfeedback,loading}) => {
    const navigate= useNavigate();
    // function
    const actionColumns = [
        {
            field: 'detail', headerName: 'Chi tiết', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title="Xem chi tiết">
                        <Link  to={`/admin/feedback/detail/${params.row.Ma_PH}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faInfoCircle}/>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        {
            field: 'delete', headerName: 'Xóa', width: 50, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title="Xóa">
                        <div className="icon-hidden-book" onClick={()=>handleDeleteFeedback(params.row.Ma_PH)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </Tooltip>
                )
            }
        }
    ]
    // CRUD
     const handleDeleteFeedback = async(id) => {
        const response = await axios.delete(`http://localhost:8000/api/feedback/${id}`);
        if(response.data.status === "success"){
            swal({
                title: "Xóa thành công",
                text: "Nhấn OK để xác nhận",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/feedback'));
        }
    }
    return(
        <Fragment>
            <div style={{ width: '1236px' }}>
                <DataGrid
                    rows={listfeedback}
                    columns={feedbackColumns.concat(actionColumns)}
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

export default FeedbackTable;