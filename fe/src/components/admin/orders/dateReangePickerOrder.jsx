import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerOrder = ({handleSearchOrderInputForm}) => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" onChange={handleSearchOrderInputForm} name="Bat_Dau"/>
                <span>đến</span>
                <input type="date" onChange={handleSearchOrderInputForm} name="Ket_Thuc"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerOrder;