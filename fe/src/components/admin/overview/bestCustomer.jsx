import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from '@mui/x-data-grid';

const  BestCustomer = ()  =>{
    const columns = [
        { field: 'id', headerName: 'STT', width: 50, sortable: false },
        { field: 'firstName', headerName: 'Họ và tên', width: 220, sortable: false },
        { field: 'lastName', headerName: 'Tổng đơn hàng',type: 'number', width: 130, sortable: false },
        { field: 'age', headerName: 'Tổng tiền',type: 'number', width: 210, sortable: false },
      ];
      
      const rows = [
        { id: 1, lastName: 'Phạm Trần Khôi', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Chu Văn An', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lý Nhật Khánh', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Bùi Anh Khôi', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
  return (
    <div style={{ height: 578, width: '612px', margin: 'auto', marginBottom: '50px' }} className="icon-table-best-customer">
        <h5 className="title-best-customer">
            <FontAwesomeIcon icon={faCrown} className="crown-best-customer"/>Xếp hạng khách hàng tháng 11
        </h5>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            className='table-best-customer'
        />
    </div>
  );
}

export default BestCustomer;