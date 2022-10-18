import React, { Fragment } from "react";
import "./style.css";

const FilterProduct = () =>  {
    return(
        <Fragment>
            <h3 className="title-filter-product">Lọc sản phẩm</h3>
            <div className="border rounded shadow-sm filter-product">
                <ul className="list-group list-group-flush rounded list-filter">
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Loại sách</h5>
                        <div className="d-flex flex-column">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Nhà xuất bản</h5>
                        <div className="d-flex flex-column">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Tác giả</h5>
                        <div className="d-flex flex-column">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">Sách văn học</label>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Khoảng giá</h5>
                        <div className="d-grid d-block mb-3">
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Min" value="100000"/>
                                <label for="floatingInput">Giá nhỏ nhất</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Max" value="500000"/>
                                <label for="floatingInput">Giá lớn nhất</label>
                            </div>
                            <button className="btn btn-dark btn-dark-custom">LỌC</button>
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default FilterProduct;