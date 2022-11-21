import React, { Fragment, useEffect, useState } from "react";
import HeaderContent from "../../../components/admin/headercontent";
import HeaderManageCategory from "../../../components/admin/category/headerManageCategory";
import CategoryTable from "../../../components/admin/category/categoryTable";
import "./style.css";
import { Box } from "@mui/material";
import axios from "axios";

const ManageCategoryPage = () => {
    const [listCategory, setListCategory] = useState([]);
    const [searchListCategory, setSearchListCategory] = useState([]);
    const [checkSearchListCategory, setCheckSearchListCategory] = useState(false);
    // function
    const handleSearchCategoryName = (e) => {
        const arrCategory = [];
        listCategory.map( category =>(
            ((category.Ten_DM.toUpperCase()).includes(e.target.value.toUpperCase()))?arrCategory.push(category):null
        ))
        setSearchListCategory(arrCategory);
        setCheckSearchListCategory(true);
    }
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
                <HeaderManageCategory handleSearchCategoryName={handleSearchCategoryName} />
                <CategoryTable listcategory={(!checkSearchListCategory)?listCategory:searchListCategory} loading={!listCategory.length} />
            </Box>
        </Fragment>
    )
}

export default ManageCategoryPage;