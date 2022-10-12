import React, { Fragment } from "react";
import FilterProduct from "../../../components/user/filter/filterProduct";
import SortProduct from "../../../components/user/filter/sortProduct";
import ListProduct from "../../../components/user/product/listProduct";

const ProductsPage = () => {
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
                            <ListProduct />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;