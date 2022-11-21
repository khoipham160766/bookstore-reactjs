import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./productCard";
import "./style.css";

const ListProduct = ({listbook}) => {
    const [noOfElement, setNoOfElement] = useState(8);
    const [notLoaded, setNotLoaded] = useState(0);
    // slice product
    const slice = listbook.slice(0, noOfElement);
    // see more product
    const loadMore = () => {
        setNoOfElement(noOfElement + 4);
        setNotLoaded((notLoaded - 4) < 0 ? 0 : notLoaded - 4);
    }
    useEffect(()=>{
        setNotLoaded((listbook.length - 8) < 0?0:listbook.length - 8)
    },[listbook])
    return(
        <Fragment>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-3 mb-4 flex-shrink-0 row-cols-xl-4">
                {
                    slice.map((book, index)=>{
                        return(
                            <div className="col" key={index}>
                                <ProductCard databook={book}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center">
                {
                    (notLoaded === 0)?"":
                    <button onClick={loadMore} className="load-more">
                        Xem thêm {`(${notLoaded})`}
                    </button>
                }
               
            </div>
        </Fragment>
    )
}

export default ListProduct;
