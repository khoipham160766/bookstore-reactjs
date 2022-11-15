import axios from "axios"

// book
export const handleAddBook = (databook) => {
    axios.post("http://localhost:8000/api/product", databook);
}
export const handleEditBook = (databook) => {
    databook = {...databook, 'Danh_Muc': databook.Danh_Muc.id};
    const id = databook.id;
    delete databook.id;
    delete databook.created_at;
    delete databook.updated_at;
    console.log(databook)
    axios.put(`http://localhost:8000/api/product/${id}`, databook);
}

// category 
export const handleAddCategory = (datacategory) => {
    axios.post("http://localhost:8000/api/category", datacategory);
}

// news 
export const handleAddNews = (datanews) => {
    axios.post("http://localhost:8000/api/news", datanews);
}