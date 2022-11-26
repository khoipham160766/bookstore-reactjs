import React, { Fragment } from "react";
import "./style.css";
import { Box } from "@mui/material";

const SearchDateRangePickerFeedback = ({searchFeedbackForm, setSearchFeedbackForm}) => {
    const handleSearchDateFeedback = (e) => {
        const {name, value} = e.target;
        setSearchFeedbackForm({...searchFeedbackForm, [name]: value});
    }
    return(
        <Fragment>
            <Box width="350px">
                <input type="date" name="Bat_Dau" onChange={handleSearchDateFeedback}/>
                <span>đến</span>
                <input type="date" name="Ket_Thuc" onChange={handleSearchDateFeedback}/>
            </Box>
        </Fragment>
    )
}

export default SearchDateRangePickerFeedback;