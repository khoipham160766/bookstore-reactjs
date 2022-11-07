import React, { Fragment } from "react";
import { Box } from "@mui/material";
import "./style.css";

const SearchDateRangePickerEmployee = () => {
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="date-from-employee"/>
                <span>đến</span>
                <input type="date" name="date-to-employee"/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerEmployee;