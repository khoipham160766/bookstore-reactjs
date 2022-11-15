import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangerPickerBook from "./dateRangePickerBook";
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./style.css";

const HeaderManageBook = props => {
    const [searchCategory, setSearchCategory] = useState('');
    // function
    const handleSearchCategory = (event) => {
        setSearchCategory(event.target.value);
    };
    return(
        <Fragment>
            <div className="header-manage-book">
                {/* search input */}
                <div className="search-box">
                    <form>
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default custom-button-search" type="submit">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                            </div>
                            <input type="text" className="form-control" placeholder="Tên sách ..." onChange={props.handleSearchBook}/>
                        </div>
                    </form>
                </div>
                {/* add book */}
                <div className="search-category">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchCategory}
                            label="searchCategory"
                            onChange={handleSearchCategory}
                            className="custom-select-category"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={40}>tất cả</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangerPickerBook />
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-book">
                        Xác Nhận
                    </button>
                </div>
                {/* add book */}
                <div className="add-book">
                    <Link to="/admin/books/add">
                        <Button className="button-add-book">
                            Thêm Sách Mới
                        </Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageBook;