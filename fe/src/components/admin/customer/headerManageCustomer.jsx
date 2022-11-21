import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from '@mui/material/Select';
import "./style.css";

const HeaderManageCustomer = ({handleSearchInputCustomer, setSearchCustomerForm, handleSearchCustomerForm}) => {
    const [searchStatusUser, setSearchStatusUser] = useState('');

    const handleSearchStatusUser = (event) => {
        setSearchStatusUser(event.target.value);
        setSearchCustomerForm(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-customer">
                {/* search input */}
                <div className="search-box">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button className="btn btn-default custom-button-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        <input type="text" className="form-control input-search-customer" placeholder="Tên khách hàng ..." onChange={handleSearchInputCustomer}/>
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
                            <MenuItem value={2}>Tất cả</MenuItem>
                            <MenuItem value={0}>Bị khóa</MenuItem>
                            <MenuItem value={1}>Không bị khóa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-customer" onClick={handleSearchCustomerForm}>
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageCustomer;