import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./productCard";
import Spinner from 'react-bootstrap/Spinner';
import "./style.css";

const ListProduct = ({listbook,checkCategory,checkPublisher,inputPrice}) => {
    const [noOfElement, setNoOfElement] = useState(8);
    const [notLoaded, setNotLoaded] = useState(0);
    const [listBook,setListBook] = useState(listbook);
    const [searchListBook, setSearchListBook] = useState(listbook);
    const [slice, setSlice] = useState([]);
    // slice product
   // const slice = listBook.slice(0, noOfElement);
    // see more product
    const loadMore = () => {
        setNoOfElement(noOfElement + 4);
        setNotLoaded((notLoaded - 4) < 0 ? 0 : notLoaded - 4);
    }
    //useEffect
    useEffect(()=>{
        setNotLoaded((listbook.length - 8) < 0?0:listbook.length - 8)
        setListBook(listbook);
        setSearchListBook(listbook);
        setSlice(listbook.slice(0, 8))
    },[listbook])
    useEffect(()=>{
        const arr_1 = [];
        const arr_2 = [];
        const arr_3 = [];
        //category
        (!checkCategory.length)?
        listBook.map(book => (
            arr_1.push(book)
        ))
        :
        checkCategory.map(category => (
            listBook.map(book => (
               (`${book.TT_SP.Danh_Muc.Ma_DM}` === category)?arr_1.push(book):null
            ))
        ));
       (!checkPublisher.length)?
        arr_1.map(book => (
            arr_2.push(book)
        ))
        :
        checkPublisher.map(publisher => (
            arr_1.map(book => (
                (`${book.TT_SP.NXB}` === publisher)?arr_2.push(book):null
            ))
        ));
        arr_2.map(book=>(
            (Number((book.TT_SP.Don_Gia).replace('.','')) >= Number(inputPrice.minprice) && 
            Number((book.TT_SP.Don_Gia).replace('.','')) <= Number(inputPrice.maxprice) )
            ?arr_3.push(book):null
        ));
        setSearchListBook(arr_3);
        setNotLoaded((arr_3.length - 8) < 0?0:arr_3.length - 8); 
        setSlice(arr_3.slice(0, 8));
        setNoOfElement(8);
    },[listBook,checkCategory,checkPublisher,inputPrice])
    useEffect(()=>{
        setSlice(searchListBook.slice(0, noOfElement));
    },[searchListBook,noOfElement])
    console.log(inputPrice);
    return(
        <Fragment>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-3 mb-4 flex-shrink-0 row-cols-xl-4">
                {
                    (slice.length)?
                    slice.map((book, index)=>(
                        <div className="col" key={index}>
                            <ProductCard databook={book}/>
                        </div>
                    ))
                    : <div className="spin-position spin-position-product"><Spinner animation="border" variant="danger" /></div>
                 
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
