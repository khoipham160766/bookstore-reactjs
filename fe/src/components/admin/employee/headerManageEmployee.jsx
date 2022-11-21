import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageEmployee = ({handleSearchInputEmployee, setSearchEmployeeForm, handleSearchEmployeeForm}) => {
    const [searchStatusEmployee, setSearchStatusEmployee] = useState('');

    const handleSearchStatusEmployee = (event) => {
        setSearchStatusEmployee(event.target.value);
        setSearchEmployeeForm(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-employee">
                {/* search input */}
                <div className="search-box">
                    <div className="input-group">
                        <div className="input-group-btn ">
                            <button className="btn btn-default custom-button-search div-icon-search-employee" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        <input type="text" className="form-control input-search-employee" placeholder="Tên nhân viên ..." onChange={handleSearchInputEmployee}/>
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
                            <MenuItem value={2}>Tất cả</MenuItem>
                            <MenuItem value={0}>Bị khóa</MenuItem>
                            <MenuItem value={1}>Không bị khóa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-employee" onClick={handleSearchEmployeeForm}>
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageEmployee;