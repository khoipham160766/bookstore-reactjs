import React, { Fragment } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { employeeColumns } from "../table/columns";
import "./style.css";

const EmployeeTable = ({listemployee,loading}) => {
    const edit_employee_tooltip = () => <span>Sửa thông tin</span>
    const status_employee_tooltip = () => <span>Trạng thái</span>
    const actionColumns = [
        {
            field: 'edit', headerName: 'Sửa', width: 70, sortable: false,
            renderCell: (params) => {
                return(
                    <Tooltip placement="bottom" title={edit_employee_tooltip}>
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
                    <Tooltip placement="bottom" title={status_employee_tooltip}>
                        <div className="icon-hidden-book">
                            <FontAwesomeIcon icon={faUnlock} />
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
                />
            </div>
        </Fragment>
    )
}

export default EmployeeTable;