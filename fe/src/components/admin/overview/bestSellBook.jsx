import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const  BestSellBook = ()  =>{
  const date = new Date();
  const month = date.getMonth() + 1;
  const [listBestBook, setListBestBook] = useState([]);
  useEffect(()=>{
      const getListBestBook = async() => {
        const response = await axios.get("http://localhost:8000/api/bestbook");
        setListBestBook(response.data.data);
      }
      getListBestBook();
  },[])
  const columns = [
        { field: 'id', headerName: 'STT', width: 50, sortable: false },
        { field: 'TT_SP', headerName: 'Sách', width: 320, sortable: false,  valueGetter: (params) =>`${params.row.TT_SP.Ten_SP}` },
        { field: 'Tong_So_Luong', headerName: 'Số lượng',type: 'number', width: 130, sortable: false },
        { field: 'Ma_SP', headerName: 'Mã sách',type: 'number', width: 110, sortable: false },
      ];
      
  return (
    <div style={{ width: '612px', margin: 'auto' }} className="icon-table-best-sell-book">
        <h5 className="title-best-customer">
            <FontAwesomeIcon icon={faBook} className="best-sell-book"/>Sách bán chạy tháng {month}
        </h5>
        <DataGrid
            rows={listBestBook}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            className='table-best-customer'
            autoHeight={true}
            loading={!listBestBook.length}
        />
    </div>
  );
}

export default BestSellBook;