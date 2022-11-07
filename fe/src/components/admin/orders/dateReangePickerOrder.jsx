import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerOrder = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-order"/>
                <span>đến</span>
                <input type="date" name="date-to-order"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerOrder;