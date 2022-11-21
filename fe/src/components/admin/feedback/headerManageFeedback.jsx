import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchDateRangePickerFeedback from "./dateRangePickerFeedback";
import "./style.css"

const HeaderManageFeedback = ({handleSearchCustomerNameFeedback, setSearchFeedbackForm, searchFeedbackForm, handleSearchFeedbackForm}) => {
    return(
        <Fragment>
            <div className="header-manage-book">
                {/* search input */}
                <div className="search-box">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button className="btn btn-default custom-button-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Tên khách hàng ..." onChange={handleSearchCustomerNameFeedback} />
                    </div>
                </div>
                <div className="search-date">
                    <SearchDateRangePickerFeedback searchFeedbackForm={searchFeedbackForm} setSearchFeedbackForm={setSearchFeedbackForm} />
                </div>
                 {/* button search */}
                <div className="button-search-cofirm">
                    <button type="submit" className="button-cofirm-search-book" onClick={handleSearchFeedbackForm}>
                        Xác Nhận
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderManageFeedback;