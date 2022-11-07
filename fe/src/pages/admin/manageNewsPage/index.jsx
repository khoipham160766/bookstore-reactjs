import { Box } from "@mui/material";
import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageNews from "../../../components/admin/news/headerManageNews";
import NewsTable from "../../../components/admin/news/newsTable";
import "./style.css";

const ManageNewsPage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage News" title="Blog OverView"/>
                <HeaderManageNews />
                <NewsTable />
            </Box>
        </Fragment>
    )
}

export default ManageNewsPage;