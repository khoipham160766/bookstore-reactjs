import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import HeaderContent from "../../../components/admin/headercontent";
import BookTable from "../../../components/admin/books/bookTable";
import HeaderManageBook from "../../../components/admin/books/headerManageBook";
import "./style.css";

const ManageBookPage = () => {
    const [listBook, setListBook] = useState([]);
    const [searchListBook, setSearchListBook] = useState([]);
    //function
    const handleSearchBook = (e) => {
        console.log(e.target.value);
    }
    useEffect(()=>{
        const getListBook = async() => {
            const response = await axios.get("http://localhost:8000/api/product");
            setListBook(response.data.data);
        }
        getListBook();
    },[])
    return(
        <Fragment>
            <Box>
                <HeaderContent subtitle="Manage Book" title="Blog OverView" handleSearchBook={handleSearchBook} />
                <HeaderManageBook/>
                <BookTable listbook={listBook} loading={!listBook.length}/>
            </Box>
        </Fragment>
    )
}

export default ManageBookPage;