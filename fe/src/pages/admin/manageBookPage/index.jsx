import { Box } from "@mui/material";
import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import BookTable from "../../../components/admin/books/bookTable";
import HeaderManageBook from "../../../components/admin/books/headerManageBook";
import "./style.css";

const ManageBookPage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Book" title="Blog OverView" />
                <HeaderManageBook/>
                <BookTable />
            </Box>
        </Fragment>
    )
}

export default ManageBookPage;