import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerCategory = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-category"/>
                <span>đến</span>
                <input type="date" name="date-to-category"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerCategory;