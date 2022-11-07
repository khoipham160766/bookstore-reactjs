import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangePickerOrder from "./dateReangePickerOrder";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageOrder = () => {
    const [searchStatusOrder, setSearchStatusOrder] = useState('');

    const handleSearchStatusOrder = (event) => {
        setSearchStatusOrder(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-customer">
                {/* search input */}
                <div className="search-box order-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Mã hóa đơn..."/>
                    </div>
                </div>
                <div className="search-box order-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Mã khách hàng..."/>
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
                            <MenuItem value={10}>Bị khóa</MenuItem>
                            <MenuItem value={20}>Không bị khóa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerOrder />
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-customer">
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageOrder;