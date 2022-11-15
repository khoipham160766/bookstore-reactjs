import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCategory from "../../../components/admin/category/headerManageCategory";
import CategoryTable from "../../../components/admin/category/categoryTable";
import "./style.css";
import { Box } from "@mui/material";
import axios from "axios";

const ManageCategoryPage = () => {
    const [listCategory, setListCategory] = useState([]);
    useEffect(()=>{
        const getListCategory = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setListCategory(response.data.data);
        }
        getListCategory();
    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Category" title="Blog OverView" />
                <HeaderManageCategory />
                <CategoryTable listcategory={listCategory} loading={!listCategory.length} />
            </Box>
        </Fragment>
    )
}

export default ManageCategoryPage;