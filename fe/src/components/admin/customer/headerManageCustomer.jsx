import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangePickerCustomer from "./dateRangePickerCustomer";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageCustomer = () => {
    const [searchStatusUser, setSearchStatusUser] = useState('');

    const handleSearchStatusUser = (event) => {
        setSearchStatusUser(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-customer">
                {/* search input */}
                <div className="search-box customer-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Họ..."/>
                    </div>
                </div>
                <div className="search-box customer-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên..."/>
                    </div>
                </div>
                <div className="search-box customer-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="SĐT..."/>
                    </div>
                </div>
                <div className="search-box customer-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Gmail..."/>
                    </div>
                </div>
                <div className="search-customer">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchStatusUser}
                            label="searchCategory"
                            onChange={handleSearchStatusUser}
                            className="custom-select-customer"
                        >
                            <MenuItem value={10}>Bị khóa</MenuItem>
                            <MenuItem value={20}>Không bị khóa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerCustomer />
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

export default HeaderManageCustomer;