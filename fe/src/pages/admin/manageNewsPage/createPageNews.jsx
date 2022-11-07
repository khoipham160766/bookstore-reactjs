import React, { Fragment, useRef, useState } from "react";
import { Box } from "@mui/material";
import JoditEditor from 'jodit-react';
import "./style.css";

const CreatePageNews = () => {

    const editor = useRef(null);
	const [content, setContent] = useState('');

    return(
        <Fragment>
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Thêm bài viết</h3>
                </div>
                <div className="content-register">
                    <form action="#">
                        <div className="user-details-register">
                            <div className="input-box-register input-create-page-news-title">
                                <span className="details-register">Tiêu đề bài viết</span>
                                <input type="text" placeholder="Nhập tiêu đề..." required/>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Loại</span>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn</option>
                                    <option value="1">Khuyến Mãi</option>
                                    <option value="2">Tin Tức Sản phẩm</option>
                                </select>
                            </div>
                            <div className="input-box-register">
                                <span className="details-register">Danh mục</span>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn</option>
                                    <option value="1">Sách Văn Học</option>
                                    <option value="2">Tiểu Thuyết</option>
                                    <option value="3">Sách Tiếng Anh</option>
                                </select>
                            </div>
                            <div className="input-box-register input-create-page-news-description">
                                <span className="details-register">Nội dung</span>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>
                            <div className="btn-cofirm-create-news">
                                <button className="btn-create">Đăng bài viết</button>
                                <button className="btn-cancel">Hủy</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </Fragment>
    )
}

export default CreatePageNews;