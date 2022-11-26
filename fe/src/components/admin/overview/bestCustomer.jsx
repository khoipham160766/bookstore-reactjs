import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const  BestCustomer = ()  =>{
    const date = new Date();
    const month = date.getMonth() + 1;
    const [listBestCustomer, setListBestCustomer] = useState([]);
    useEffect(()=>{
        const getListBestCustomer = async() => {
          const response = await axios.get("http://localhost:8000/api/bestcustomer");
          setListBestCustomer(response.data.data);
        }
        getListBestCustomer();
    },[])
    const columns = [
        { field: 'id', headerName: 'STT', width: 50, sortable: false },
        { field: 'TT_KH', headerName: 'Họ và tên', width: 220, sortable: false, valueGetter: (params) => `${params.row.TT_KH.Ho_KH} ${params.row.TT_KH.Ten_KH}` },
        { field: 'So_Don_Hang', headerName: 'Tổng đơn hàng',type: 'number', width: 130, sortable: false },
        { field: 'Tong_Thanh_Tien', headerName: 'Tổng tiền (đ)',type: 'number', width: 210, sortable: false },
      ];
      
  return (
    <div style={{ width: '612px', margin: 'auto', marginBottom: '50px' }} className="icon-table-best-customer">
        <h5 className="title-best-customer">
            <FontAwesomeIcon icon={faCrown} className="crown-best-customer"/>Xếp hạng khách hàng tháng {month}
        </h5>
        <DataGrid
            rows={listBestCustomer}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            className='table-best-customer'
            autoHeight={true}
            loading={!listBestCustomer.length}
        />
    </div>
  );
}

export default BestCustomer;