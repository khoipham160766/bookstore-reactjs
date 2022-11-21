import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

const SortProduct = () => {
    const test = () => {
        console.log("abc");
    }
    return(
        <Fragment>
            <h3 className="title-sort-product">Sản phẩm</h3>
            <div className="row mb-3 sort-product">
                <div className="col-lg-3 d-none d-lg-block">
                    <select className="form-select" aria-label="sort" defaultValue="0" onChange={test}>
                        <option value="0">Tất cả</option>
                        <option value="1">Giá từ thấp đến cao</option>
                        <option value="2">Giá từ cao đến thấp</option>
                        <option value="3">Từ A-Z</option>
                        <option value="4">Từ Z-A</option>
                    </select>
                </div>
                <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Tìm kiếm ..." aria-label="search product"/>
                        <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SortProduct;