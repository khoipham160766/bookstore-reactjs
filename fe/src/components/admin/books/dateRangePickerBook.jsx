import React, { Fragment } from "react";
import "./style.css";
import { Box } from "@mui/material";

const SearchDateRangePickerBook = ({setSearchBookForm, searchBookForm}) => {
    const handleSearchDate = (e) => {
        const {name, value} = e.target;
        setSearchBookForm({...searchBookForm, [name]: value});
    }
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" onChange={handleSearchDate} name="Bat_Dau"/>
                <span>đến</span>
                <input type="date" onChange={handleSearchDate} name="Ket_Thuc"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerBook;