import React, { Fragment, useState } from "react";
import ProductCard from "./productCard";
import data from "./datatest";
import "./style.css";

const ListProduct = () => {
    const [noOfElement, setNoOfElement] = useState(4);
    const [notLoaded, setNotLoaded] = useState(data.cardData.length - 4);

    // slice product
    const slice = data.cardData.slice(0, noOfElement);
    // see more product
    const loadMore = () => {
        setNoOfElement(noOfElement + 4);
        setNotLoaded((notLoaded - noOfElement) < 0 ? 0 : notLoaded - noOfElement);
    }
    return(
        <Fragment>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-3 mb-4 flex-shrink-0 row-cols-xl-4">
                {
                    slice.map((card, index)=>{
                        return(
                            <div className="col">
                                <ProductCard />
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center">
                <button onClick={loadMore} className="load-more">
                    Xem thêm {`(${notLoaded})`}
                </button>
            </div>
        </Fragment>
    )
}

export default ListProduct;
