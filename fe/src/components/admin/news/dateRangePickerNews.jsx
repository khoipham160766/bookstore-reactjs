import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerNews = ({setSearchNewsForm, searchNewsForm}) => {
    const handleSearchDateNews = (e) => {
        const {name, value} = e.target;
        setSearchNewsForm({...searchNewsForm, [name]: value});
    }
    return(
        <Fragment>
            <Box width="350px">
            <input type="date" onChange={handleSearchDateNews} name="Bat_Dau"/>
                <span>đến</span>
                <input type="date" onChange={handleSearchDateNews} name="Ket_Thuc"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerNews;