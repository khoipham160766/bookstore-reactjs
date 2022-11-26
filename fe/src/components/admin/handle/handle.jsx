import axios from "axios";



// book
export const handleAddBook = (databook) => {
   axios.post("http://localhost:8000/api/product", databook);
}
export const handleEditBook = (databook) => {
    databook = {...databook, 'Danh_Muc': (!(databook.Danh_Muc.id)?databook.Danh_Muc:databook.Danh_Muc.id),'Don_Gia': databook.Don_Gia.replace('.','')};
    const id = databook.id;
    delete databook.id;
    delete databook.created_at;
    delete databook.updated_at;
    axios.put(`http://localhost:8000/api/product/${id}`, databook);
}

// category 
export const handleAddCategory = (datacategory) => {
    axios.post("http://localhost:8000/api/category", datacategory);
}
export const handleEditCategory = (datacategory) => {
    const id = datacategory.id;
    delete datacategory.id;
    delete datacategory.created_at;
    delete datacategory.updated_at;
    axios.put(`http://localhost:8000/api/category/${id}`, datacategory);
}
// news 
export const handleAddNews = (datanews) => {
    axios.post("http://localhost:8000/api/news", datanews);
}
export const handleEditNews = (datanews) => {
    datanews = {...datanews, 'Ma_DM': (!(datanews.Ma_DM.id)?datanews.Ma_DM:datanews.Ma_DM.id)}
    const id = datanews.id;
    delete datanews.id;
    delete datanews.created_at;
    delete datanews.updated_at;
    axios.put(`http://localhost:8000/api/news/${id}`, datanews);
}
export const handleDeleteNews = (id) => {
    axios.delete(`http://localhost:8000/api/news/${id}`);
}

// customer
export const handleEditCustomer = (datacustomer) => {
    const id = datacustomer.id;
    delete datacustomer.id;
    delete datacustomer.created_at;
    delete datacustomer.updated_at;
    delete datacustomer.Mat_Khau;
    delete datacustomer.Tinh_Trang;
    delete datacustomer.Avatar;
    axios.put(`http://localhost:8000/api/customer/${id}`, datacustomer);
}

// employee
export const handleEditEmployee = (dataemployee) => {
    dataemployee = {...dataemployee, 'Quyen': (!(dataemployee.Quyen.id)?dataemployee.Quyen:dataemployee.Quyen.id)};
    const id = dataemployee.id;
    delete dataemployee.id;
    delete dataemployee.created_at;
    delete dataemployee.updated_at;
    delete dataemployee.Mat_Khau;
    delete dataemployee.Tinh_Trang;
    axios.put(`http://localhost:8000/api/employee/${id}`, dataemployee);
}

// feedback
export const handleDeleteFeedback = (id) => {
    axios.delete(`http://localhost:8000/api/feedback/${id}`);
}