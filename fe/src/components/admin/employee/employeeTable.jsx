import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUnlock, faLock } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { employeeColumns } from "../table/columns";
import { Link } from "react-router-dom";
import axios  from "axios";
import "./style.css";

const EmployeeTable = ({listemployee,loading, setListEmployee}) => {
    const edit_employee_tooltip = () => <span>Sửa thông tin</span>
    const status_employee_tooltip = () => <span>Trạng thái</span>
    // function
    const handleSetStatusEmployee = (id, nowstatus) => {
        const data = {
            'Tinh_Trang': (nowstatus === 1)?'0':'1'
        }
        axios.put(`http://localhost:8000/api/employee/${id}`, data);
        setListEmployee(listemployee.map((employee)=>(
            (employee.id === id)?{...employee,'Tinh_Trang': (employee.Tinh_Trang === 0)?1:0}:employee
        ))
        )
    }
    const actionColumns = [
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_employee_tooltip}>
                        <Link to={`/admin/employees/edit/${params.row.id}`} className="icon-edit-book">
                            <div >
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
        },
        {
            field: 'status', headerName: 'Tình trạng', width: 90, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={status_employee_tooltip}>
                        <div className="icon-hidden-book" onClick={()=>handleSetStatusEmployee(params.row.id, params.row.Tinh_Trang)}>
                            <FontAwesomeIcon icon={(params.row.Tinh_Trang === 1)?faUnlock:faLock} />
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
                    rows={listemployee}
                    columns={employeeColumns.concat(actionColumns)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    loading={loading}
                    getRowId={row => row.id}
                    autoHeight={true}
                    className="table-mui-grid"
                />
            </div>
        </Fragment>
    )
}

export default EmployeeTable;