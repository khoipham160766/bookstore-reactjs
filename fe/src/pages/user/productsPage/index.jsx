import React, { Fragment, useState, useEffect } from "react";
import FilterProduct from "../../../components/user/filter/filterProduct";
import SortProduct from "../../../components/user/filter/sortProduct";
import ListProduct from "../../../components/user/product/listProduct";
import axios from "axios";

const ProductsPage = () => {
    const [listBook, setListBook] = useState([]);
    //axios
    useEffect(()=>{
        const getListBook = async() => {
            const response = await axios.get("http://localhost:8000/api/allbook");
            setListBook(response.data.data);
        }
        getListBook();
    },[])

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

export default ProductsPage;