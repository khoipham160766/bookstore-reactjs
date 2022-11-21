import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangePickerOrder from "./dateReangePickerOrder";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageOrder = ({handleSearchIdOrder, handleSearchNameCustomer, setSearchOrderForm, searchOrderForm, handleSearchOrderForm}) => {
    const [searchStatusOrder, setSearchStatusOrder] = useState('');

    const handleSearchStatusOrder = (event) => {
        setSearchStatusOrder(event.target.value);
        setSearchOrderForm({...searchOrderForm, 'Trang_Thai': event.target.value})
    };
    const handleSearchOrderInputForm = (e) => {
        const {name,value} = e.target;
        setSearchOrderForm({...searchOrderForm, [name]: value})
    }
    return(
        <Fragment>
            <div className="header-manage-customer">
                {/* search input */}
                <div className="search-box order-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Mã hóa đơn..." onChange={handleSearchIdOrder}/>
                    </div>
                </div>
                <div className="search-box order-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên khách hàng..." onChange={handleSearchNameCustomer}/>
                    </div>
                </div>
                <div className="search-customer">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tình trạng</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchStatusOrder}
                            label="searchCategory"
                            onChange={handleSearchStatusOrder}
                            className="custom-select-customer"
                        >
                            <MenuItem value="Tất cả">Tất cả</MenuItem>
                            <MenuItem value="Chờ xác nhận">Chờ xác nhận</MenuItem>
                            <MenuItem value="Chuẩn bị hàng">Chuẩn bị hàng</MenuItem>
                            <MenuItem value="Đang giao">Đang giao</MenuItem>
                            <MenuItem value="Giao thành công">Giao thành công</MenuItem>
                            <MenuItem value="Bị hủy">Bị hủy</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerOrder handleSearchOrderInputForm={handleSearchOrderInputForm}/>
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-customer" onClick={handleSearchOrderForm}>
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageOrder;