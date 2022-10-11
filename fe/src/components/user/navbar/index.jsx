import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser , faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
    const [openedDrawer, setOpenedDrawer] = useState(false)
    const [openLog, setOpenLog] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [stateMenu, setStateMenu] = useState(false);

    const toggleDrawer = () => {
      setOpenedDrawer(!openedDrawer);
    }
    const setStateLog = () => {
        setOpenLog(!openLog);
    }
    const setStateSearchBox = () => {
        setOpenSearchBox(!openSearchBox);
    }
    const changeStateMenu = () => {
        setStateMenu(!stateMenu);
    }
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    {/* logo */}
                    <Link className="navbar-brand" to="/" >
                        <img src="../../images/logo.png" alt="logo" className="w-logo"/>
                    </Link>
                    {/* category  */}
                    <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item div-search-tl-mb">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" aria-label="Search"/>
                                    <button class="btn btn-outline-dark" type="submit">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" replace >
                                    TRANG CHỦ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/recommend" className="nav-link" replace >
                                    GIỚI THIỆU
                                </Link>
                            </li>
                            <li className="nav-item main-menu-product">
                                <div className="log-mb-tl">
                                    <Link to="/product" className="nav-link nav-link-custom" replace >
                                        SẢN PHẨM
                                    </Link>
                                    <FontAwesomeIcon icon={faChevronDown} className="carret-down" onClick={changeStateMenu}/>
                                </div>
                               
                                <ul className={"div-sub-category " + (stateMenu ? 'openMenu' : '')}>
                                    <li><Link to="/">SÁCH TIẾNG ANH</Link></li>
                                    <li><Link to="/">SÁCH VĂN HỌC</Link></li>
                                    <li><Link to="/">TIỂU THUYẾT</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" replace>
                                    TIN TỨC
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" replace >
                                    LIÊN HỆ
                                </Link>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="ms-3 badge rounded-pill bg-dark">0</span>
                        </button>
                        {/* custom log */}
                        <ul className="navbar-nav mb-2 mb-lg-0 custom-log">
                            <li className="search-click">
                                <FontAwesomeIcon icon={faSearch} onClick={setStateSearchBox}/>
                                <form action="" className={"div-search-form"+ (openSearchBox ? '.div-search-form-active': '')}>
                                    <input type="text"/>
                                </form>
                            </li>
                            <li className="nav-item div-log-dt" onClick={setStateLog}>
                                <FontAwesomeIcon icon={faUser} />
                                {/* <div className={"div-log " + (openLog ? 'active-div-log': '')}> */}
                                    <ul className={"div-log " + (openLog ? 'active-div-log': '')}>
                                        <li><Link to="/login">Đăng nhập</Link></li>
                                        <li><Link to="/register">Đăng ký</Link></li>
                                    </ul>
                                {/* </div> */}
                            </li>
                            <li className="nav-item div-log-tl-mb">
                                <Link to="/login">ĐĂNG NHẬP</Link>
                            </li>
                            <li className="nav-item div-log-tl-mb">
                                <Link to="/register">ĐĂNG KÝ</Link>
                            </li>
                        </ul>
                    </div>
    
                    <div className="d-inline-block d-lg-none">
                        <button type="button" className="btn btn-outline-dark">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="ms-3 badge rounded-pill bg-dark">0</span>
                        </button>
                        <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
      </header>
    )
}

export default Navigation;