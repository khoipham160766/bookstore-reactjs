import React, { Fragment } from "react";
import DetailProduct from "../../../components/user/product/detailProduct";

const DetailProductPage = () => {
    return(
        <Fragment>
            <div className="container py-4 px-4 justify-content-center text-justify detail-product-page">
                <DetailProduct />
            </div>
        </Fragment>
    )
}

export default DetailProductPage;