import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser , faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Navigation = () => {
    const logined = [
        {
            title: "Thông tin cá nhân",
            linked: "/user/manage/account"
        },
        {
            title: "Giỏ hàng",
            linked: "/user/manage/cart",
        },
        {
            title: "Đơn hàng",
            linked: "/user/manage/order",
        },
        {
            title: "Đăng xuất",
            linked: "",
        }
    ];
    const notLogin = [
        {
            title: "Đăng nhập",
            linked: "/user/login",
        },
        {
            title: "Đăng ký",
            linked: "/user/register",
        }
    ]

    const [openedDrawer, setOpenedDrawer] = useState(false)
    const [openLog, setOpenLog] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [stateMenu, setStateMenu] = useState(false);
    const [userCategory, setUserCategory] = useState([]);
    //function
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
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        alert("Đăng xuất thành công");
    }
    //axios
    useEffect(()=>{
        const getUserCategory = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setUserCategory(response.data.data);
        }
        getUserCategory();
    },[])
    return(
        <header className="custom-header fixed-top">
            <nav className="color-navbar navbar navbar-expand-lg navbar-light fixed">
                <div className="container-fluid">
                    {/* logo */}
                    <Link className="navbar-brand" to="/user/home" >
                        <img src="../../../images/logo.png" alt="logo" className="w-logo"/>
                    </Link>
                    {/* category  */}
                    <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
                        <ul className="navbar-nav me-auto mb-lg-0 custom-menu-nav">
                            <li className="nav-item div-search-tl-mb">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" aria-label="Search"/>
                                    <button className="btn btn-outline-dark" type="submit">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/user/home" className="nav-link" replace >
                                    TRANG CHỦ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/recommend" className="nav-link" replace >
                                    GIỚI THIỆU
                                </Link>
                            </li>
                            <li className="nav-item main-menu-product">
                                <div className="log-mb-tl">
                                    <Link to="/user/book" className="nav-link nav-link-custom" replace >
                                        SẢN PHẨM
                                    </Link>
                                    <FontAwesomeIcon icon={faChevronDown} className="carret-down" onClick={changeStateMenu}/>
                                </div>
                               
                                <ul className={"div-sub-category " + (stateMenu ? 'openMenu' : '')}>
                                    {
                                        userCategory.map((category,index)=> (
                                            <li key={index}>
                                                <Link to={`/user/book/${category.Ten_DM}`}>{category.Ten_DM}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/news" className="nav-link" replace>
                                    TIN TỨC
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/contact" className="nav-link" replace >
                                    LIÊN HỆ
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/user/manage/account" className="nav-link" replace >
                                    QUẢN LÝ
                                </Link>
                            </li> */}
                           
                        </ul>
                        <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline cart-border">
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
                                        {
                                            (!localStorage.getItem("accessToken"))?
                                            notLogin.map((item,index)=>(
                                                <li key={index}><Link to={item.linked}>{item.title}</Link></li>
                                            )):
                                            logined.map((item,index)=>(
                                                <li key={index} onClick={
                                                    (item.title === "Đăng xuất")?handleLogout:""
                                                }><Link to={item.linked}>{item.title}</Link></li>
                                            ))
                                        }
                                        
                                    </ul>
                                {/* </div> */}
                            </li>
                            <li className="nav-item div-log-tl-mb">
                                <Link to="/user/login">ĐĂNG NHẬP</Link>
                            </li>
                            <li className="nav-item div-log-tl-mb">
                                <Link to="/user/register">ĐĂNG KÝ</Link>
                            </li>
                            <li className="nav-item div-log-tl-mb">
                                <button>Đăng xuất</button>
                            </li>
                        </ul>
                    </div>
    
                    <div className="d-inline-block d-lg-none">
                        <button type="button" className="btn btn-outline-dark cart-border">
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