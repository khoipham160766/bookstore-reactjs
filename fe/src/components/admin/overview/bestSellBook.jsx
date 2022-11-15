import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from '@mui/x-data-grid';

const  BestSellBook = ()  =>{
    const columns = [
        { field: 'id', headerName: 'STT', width: 50, sortable: false },
        { field: 'fullName', headerName: 'Sách', width: 320, sortable: false },
        { field: 'lastName', headerName: 'Số lượng',type: 'number', width: 130, sortable: false },
        { field: 'age', headerName: 'Mã sách',type: 'number', width: 110, sortable: false },
      ];
      
      const rows = [
        { id: 1, lastName: 'Phạm Trần Khôi', fullName: 'Jon', age: 35 },
       
      ];
  return (
    <div style={{ width: '612px', margin: 'auto' }} className="icon-table-best-sell-book">
        <h5 className="title-best-customer">
            <FontAwesomeIcon icon={faBook} className="best-sell-book"/>Sách bán chạy
        </h5>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            className='table-best-customer'
            autoHeight={true}
        />
    </div>
  );
}

export default BestSellBook;