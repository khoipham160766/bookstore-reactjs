import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerCustomer = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-customer"/>
                <span>đến</span>
                <input type="date" name="date-to-customer"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerCustomer;