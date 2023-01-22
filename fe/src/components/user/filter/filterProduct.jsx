import React, { Fragment, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const FilterProduct = ({checkCategory, setCheckCategory, checkPublisher, setCheckPublisher,inputPrice,setInputPrice}) =>  {
    //const navigate=useNavigate();
    const [listCategory, setListCategory] = useState([]);
    const [listPublisher, setListPublisher] = useState([]);
    //axios
    useEffect(()=>{
        const getListCategory = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setListCategory(response.data.data);
        }
        getListCategory();
        const getListPublisher = async() => {
            const response = await axios.get("http://localhost:8000/api/publisher");
            setListPublisher(response.data.data);
        }
        getListPublisher();
    },[])
    //function
    const handleCheckboxCategory = (e) => {
       (e.target.checked)?
       setCheckCategory([...checkCategory, e.target.value])
       :
       setCheckCategory(checkCategory.filter(item => item !== e.target.value))
    }
    const handleCheckboxPublisher = (e) => {
        (e.target.checked)?
        setCheckPublisher([...checkPublisher, e.target.value])
        :
        setCheckPublisher(checkPublisher.filter(item => item !== e.target.value))
     }
     const handleInputPriceMin = e =>{
        const {name,value} = e.target;
        (name === 'minprice' && value === '')?
        setInputPrice({...inputPrice,'minprice': '0'})
        :setInputPrice({...inputPrice,[name]: value});
        
     }
     const handleInputPriceMax = e =>{
        const {name,value} = e.target;
        (name === 'maxprice' && value === '')?
        setInputPrice({...inputPrice,'maxprice': '10000000'})
        :setInputPrice({...inputPrice,[name]: value});
        
     }
    return(
        <Fragment>
            <h3 className="title-filter-product">Lọc sản phẩm</h3>
            <div className="border rounded shadow-sm filter-product">
                <ul className="list-group list-group-flush rounded list-filter">
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Loại sách</h5>
                        <div className="d-flex flex-column">
                            {
                                listCategory.map((category,index)=>(
                                    <div className="form-check" key={index}>
                                        <input 
                                            className="form-check-input"
                                            type="checkbox"
                                            name="checkboxcategory"
                                            value={category.Ma_DM}
                                            onChange={handleCheckboxCategory}
                                        >
                                        </input>
                                        <label className="form-check-label">{category.Ten_DM}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Nhà xuất bản</h5>
                        <div className="d-flex flex-column">
                        {
                                listPublisher.map((publisher,index)=>(
                                    <div className="form-check" key={index}>
                                        <input
                                            className="form-check-input" 
                                            type="checkbox"
                                            name="checkboxpublisher"
                                            value={publisher.NXB}
                                            onChange={handleCheckboxPublisher}
                                        >
                                        </input>
                                        <label className="form-check-label">{publisher.NXB}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </li>
                    {/* <li className="list-group-item">
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
                    </li> */}
                    <li className="list-group-item">
                        <h5 className="mt-1 mb-1">Khoảng giá</h5>
                        <div className="d-grid d-block mb-3">
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Min" name="minprice" onChange={handleInputPriceMin}/>
                                <label htmlFor="floatingInput">Giá nhỏ nhất</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Max"  name="maxprice" onChange={handleInputPriceMax}/>
                                <label htmlFor="floatingInput">Giá lớn nhất</label>
                            </div>
                            {/* <button className="btn btn-dark btn-dark-custom">Tất cả sản phẩm</button> */}
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default FilterProduct;