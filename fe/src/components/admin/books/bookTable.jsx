import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { bookColumns } from "../table/columns";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const BookTable = ({listbook,loading,setListBook}) => {
    const navigate = useNavigate();
    const edit_book_tooltip = () => <span>Sửa thông tin</span>
    const status_book_tooltip = (status) => <span>{status}</span>
    // function
    const handleSetStatus = (id,nowstatus) => {
        const data = {
            'Tinh_Trang': (nowstatus === 1)?'0':'1',
        }
        axios.put(`http://localhost:8000/api/product/${id}`, data);
        setListBook(listbook.map((book)=>(
            (book.Ma_SP === id)?{...book,'Tinh_Trang': (book.Tinh_Trang === 0)?1:0}:book
        ))
        )
        
    }
    const actionColumns = [
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_book_tooltip}>
                        <Link to={`/admin/books/edit/${params.row.Ma_SP}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        {
            field: 'hide', headerName: 'Ẩn/Hiện', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={status_book_tooltip((params.row.Tinh_Trang === 1)?"Đang hiện":"Đang ẩn")}>
                        <div className="icon-hidden-book" onClick={()=>{handleSetStatus(params.row.Ma_SP, params.row.Tinh_Trang); navigate('/admin/books', { replace: true })}}>
                            <FontAwesomeIcon icon={(params.row.Tinh_Trang === 1)?faEye:faEyeSlash} />
                        </div>
                    </Tooltip>
                )
            }
        }
    ]
    return(
        <Fragment>
            <div style={{ width: '1236px' }}>
                <DataGrid
                    rows={listbook}
                    columns={bookColumns.concat(actionColumns)}
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

export default BookTable;