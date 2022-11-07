import React, { Fragment } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCategory from "../../../components/admin/category/headerManageCategory";
import CategoryTable from "../../../components/admin/category/categoryTable";
import "./style.css";
import { Box } from "@mui/material";

const ManageCategoryPage = () => {
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Category" title="Blog OverView" />
                <HeaderManageCategory />
                <CategoryTable />
            </Box>
        </Fragment>
    )
}

export default ManageCategoryPage;