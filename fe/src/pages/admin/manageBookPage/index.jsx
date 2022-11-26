import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import HeaderContent from "../../../components/admin/headercontent";
import BookTable from "../../../components/admin/books/bookTable";
import HeaderManageBook from "../../../components/admin/books/headerManageBook";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import "./style.css";

const ManageBookPage = () => {
    const moment = extendMoment(Moment);
    const [listBook, setListBook] = useState([]);
    const [searchListBook, setSearchListBook] = useState([]);
    const [checkSearchList, setCheckSearchList] = useState(false);
    const [searchBookForm, setSearchBookForm] = useState({'Danh_Muc': '', 'Bat_Dau': '', 'Ket_Thuc': ''});
    //function
    const handleSearchBookName = (e) => {
        const arrBook = [];
        listBook.map( book =>(
            ((book.Ten_SP.toUpperCase()).includes(e.target.value.toUpperCase()))?arrBook.push(book):null
        ))
        setSearchListBook(arrBook);
        setCheckSearchList(true);
    }
    const handleSearchBookForm = () => {
        const arrBook = [];
        const arrBook_2 = [];
        const start = new Date((searchBookForm.Bat_Dau === '')?'1000-01-01':searchBookForm.Bat_Dau);
        const end = new Date((searchBookForm.Ket_Thuc === '')?'3000-01-01':searchBookForm.Ket_Thuc);
        const range  = moment().range(start, end);
        if(searchBookForm.Danh_Muc === 0 || searchBookForm.Danh_Muc === ''){
            listBook.map( book =>(
                arrBook.push(book)
            ))
        } else {
            listBook.map( book =>(
                (book.Danh_Muc.Ma_DM===searchBookForm.Danh_Muc)?arrBook.push(book):null
            ))
        }
        setSearchListBook(arrBook);
        arrBook.map( book =>(
            // (range.contains(new Date(book.created_at)))?arrBook.push(book):null
           (range.contains(new Date(book.created_at)))?arrBook_2.push(book):null
        ))
        setSearchListBook(arrBook_2);
        setCheckSearchList(true);
    }
    // useEffect
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
                <HeaderContent subtitle="Manage Book" title="Blog OverView" />
                <HeaderManageBook handleSearchBookName={handleSearchBookName} setSearchBookForm={setSearchBookForm} searchBookForm={searchBookForm} handleSearchBookForm={handleSearchBookForm}/>
                <BookTable listbook={(!checkSearchList)?listBook:searchListBook} loading={!listBook.length} setListBook={setListBook} />
            </Box>
        </Fragment>
    )
}

export default ManageBookPage;