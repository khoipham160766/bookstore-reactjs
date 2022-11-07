import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerNews = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-news"/>
                <span>đến</span>
                <input type="date" name="date-to-news"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerNews;