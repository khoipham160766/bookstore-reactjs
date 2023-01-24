import React, { Fragment, useState, useEffect } from "react";
import FilterProduct from "../../../components/user/filter/filterProduct";
import SortProduct from "../../../components/user/filter/sortProduct";
import ListProduct from "../../../components/user/product/listProduct";
import axios from "axios";

const ProductsPage = () => {
    const [listBook, setListBook] = useState([]);
    const [checkCategory, setCheckCategory] = useState([]);
    const [checkPublisher, setCheckPublisher] = useState([]);
    const [inputPrice, setInputPrice] = useState({'minprice': '0', 'maxprice': '1000000'});
    //axios
    useEffect(()=>{
        const getListBook = async() => {
            const response = await axios.get("http://localhost:8000/api/allbook");
            setListBook(response.data.data);
        }
        getListBook();
    },[])
    console.log(3500 <= 10000000)
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center text-justify product-page">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterProduct
                            checkCategory={checkCategory}
                            setCheckCategory={setCheckCategory}
                            checkPublisher={checkPublisher}
                            setCheckPublisher={setCheckPublisher}
                            inputPrice={inputPrice}
                            setInputPrice={setInputPrice}
                        />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex flex-column h-100">
                            <SortProduct />
                            <ListProduct listbook={listBook} checkCategory={checkCategory} checkPublisher={checkPublisher} inputPrice={inputPrice}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;