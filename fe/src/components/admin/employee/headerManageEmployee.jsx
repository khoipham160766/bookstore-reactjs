import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangePickerEmployee from "./dataRangePickerEmployee";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageEmployee = () => {
    const [searchStatusEmployee, setSearchStatusEmployee] = useState('');

    const handleSearchStatusEmployee = (event) => {
        setSearchStatusEmployee(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-employee">
                {/* search input */}
                <div className="search-box employee-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Họ..."/>
                    </div>
                </div>
                <div className="search-box employee-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên..."/>
                    </div>
                </div>
                <div className="search-box employee-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="SĐT..."/>
                    </div>
                </div>
                <div className="search-box employee-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Gmail..."/>
                    </div>
                </div>
                <div className="search-employee">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchStatusEmployee}
                            label="searchCategory"
                            onChange={handleSearchStatusEmployee}
                            className="custom-select-employee"
                        >
                            <MenuItem value={10}>Bị khóa</MenuItem>
                            <MenuItem value={20}>Không bị khóa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerEmployee />
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-employee">
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageEmployee;