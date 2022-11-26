import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./style.css"

const HeaderManageCategory = ({handleSearchCategoryName}) => {

    return(
        <Fragment>
            <div className="header-manage-category">
                {/* search input */}
                <div className="search-box">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button className="btn btn-default custom-button-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Tên danh mục ..." onChange={handleSearchCategoryName} />
                    </div>
                </div>
                {/* add category */}
                <div className="add-category">
                    <Link to="/admin/categories/add">
                        <Button className="button-add-category">
                            Thêm Danh Mục Mới
                        </Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageCategory;