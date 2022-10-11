import React, { Fragment } from "react";
import FilterProduct from "../../../components/user/filter/filterProduct";

const ProductsPage = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center text-justify product-page">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterProduct />
                    </div>
                    <div className="col-lg-9">
                        list
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;