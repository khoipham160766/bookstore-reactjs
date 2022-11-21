import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchDateRangerPickerBook from "./dateRangePickerBook";
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const HeaderManageBook = ({handleSearchBookName, setSearchBookForm, searchBookForm, handleSearchBookForm}) => {
    // search book theo category
    const [searchCategory, setSearchCategory] = useState('');
    const [selectCategorySearchBook, setSelectCategorySearchBook] = useState([]);
    // function
    const handleSearchCategory = (event) => {
        setSearchCategory(event.target.value);
        setSearchBookForm({...searchBookForm, 'Danh_Muc': event.target.value});
    };
    //
    useEffect(()=>{
        const getSelectCategorySearchBook = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setSelectCategorySearchBook(response.data.data);
        }
        getSelectCategorySearchBook();
    },[])
    return(
        <Fragment>
            <div className="header-manage-book">
                {/* search input */}
                <div className="search-box">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button className="btn btn-default custom-button-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Tên sách ..." onChange={handleSearchBookName} />
                    </div>
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
                             <MenuItem value={0}>Tất cả</MenuItem>
                            {
                                selectCategorySearchBook.map((category,index)=>(
                                    <MenuItem value={category.id} key={index}>{category.Ten_DM}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangerPickerBook setSearchBookForm={setSearchBookForm} searchBookForm={searchBookForm} />
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-book" onClick={handleSearchBookForm}>
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