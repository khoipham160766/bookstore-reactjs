import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchDateRangePickerCategory from "./dateRangePickerCategory";
import Button from 'react-bootstrap/Button';
import ModalAddCategory from "./modalAddCategory";
import "./style.css"

const HeaderManageCategory = () => {
    const [showModalAddCategory, setShowModalAddCategory] = useState(false);

    const handleShowModalAddCategory = () => setShowModalAddCategory(true);
    const handleCloseModalAddCategory = () =>setShowModalAddCategory(false);

    return(
        <Fragment>
            <div className="header-manage-category">
                {/* search input */}
                <div className="search-box">
                    <form>
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default custom-button-search" type="submit">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                            </div>
                            <input type="text" className="form-control"/>
                        </div>
                    </form>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerCategory />
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-category">
                        Xác Nhận
                    </button>
                </div>
                {/* add category */}
                <div className="add-category">
                    <Button className="button-add-category" onClick={handleShowModalAddCategory}>
                        Thêm Danh Mục Mới
                    </Button>
                    <ModalAddCategory showModalAddCategory={showModalAddCategory} handleCloseModalAddCategory={handleCloseModalAddCategory} />
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageCategory;