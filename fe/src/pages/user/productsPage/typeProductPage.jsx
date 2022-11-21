import React, { Fragment, useState, useEffect } from "react";
import FilterProduct from "../../../components/user/filter/filterProduct";
import SortProduct from "../../../components/user/filter/sortProduct";
import ListProduct from "../../../components/user/product/listProduct";
import { useParams } from "react-router-dom";
import axios from "axios";

const TypeProductsPage = () => {
    const {namecategory} = useParams();
    const [listBook, setListBook] = useState([]);
    //axios
    useEffect(()=>{
        console.log(namecategory)
        const getListBook = async(idcategory) =>{
            const response = await axios.get(`http://localhost:8000/api/searchbookincategory/${idcategory}`);
            setListBook(response.data.data);
        }
      //  getListBook();
        const findIdcategory = async() => {
            const response = await axios.get(`http://localhost:8000/api/category`);
            response.data.data.map(category => (
                 (category.Ten_DM === namecategory)?getListBook(category.Ma_DM):null
            ))
        }
        findIdcategory();
    },[namecategory])
    console.log(listBook);
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center text-justify product-page">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterProduct />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex flex-column h-100">
                            <SortProduct />
                            <ListProduct listbook={listBook}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TypeProductsPage;