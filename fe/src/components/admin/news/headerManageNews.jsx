import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchDateRangePickerNews from "./dateRangePickerNews";
import "./style.css"

const HeaderManageNews = ({handleSearchInputNews,setSearchNewsForm, searchNewsForm, handleSearchNewsForm}) => {

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
                            <input type="text" className="form-control" placeholder="Nhập tên bài viết..." onChange={handleSearchInputNews}/>
                        </div>
                    </form>
                </div>
                {/* search date */}
                <div className="search-date">
                    <SearchDateRangePickerNews setSearchNewsForm={setSearchNewsForm} searchNewsForm={searchNewsForm}/>
                </div>
                {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-category" onClick={handleSearchNewsForm}>
                        Xác Nhận
                    </button>
                </div>
                <div className="btn-create-news">
                    <Link to="create">Thêm Bài Viết Mới</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageNews;