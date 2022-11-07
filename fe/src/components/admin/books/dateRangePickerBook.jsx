import React, { Fragment } from "react";
import "./style.css";
import { Box } from "@mui/material";

const SearchDateRangePickerBook = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-book"/>
                <span>đến</span>
                <input type="date" name="date-to-book"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerBook;