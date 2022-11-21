import { Fragment } from 'react';
// start ui user
import LayoutUser from './layout/user';
import HomePage from './pages/user/homePage';
import RecommendPage from './pages/user/recommendPage';
import ContactPage from './pages/user/contactPage';
import ProductsPage from './pages/user/productsPage';
import TypeProductsPage from './pages/user/productsPage/typeProductPage';
import LoginPage from './pages/user/loginPage';
import RegisterPage from './pages/user/registerPage';
import ForgotPasswordPage from './pages/user/forgotPasswordPage';
import DetailProductPage from './pages/user/detailProductPage';
import LayoutManageUser from './pages/user/managePage';
import Cart from './components/user/cart';
import ProfileUser from './components/user/profile';
import OrderList from './components/user/order';
import PayMent from './components/user/payment';
import NewsPage from './pages/user/newsPage';
import ListNews from './components/user/news/listNews';
import DetailNews from './components/user/news/detailNews';
// end ui user

// start ui admin
import LayoutAdmin from './layout/admin';
import DashboardPage from './pages/admin/dashboardPage';
// ->book
import ManageBookPage from './pages/admin/manageBookPage';
import AddBookPage from './pages/admin/manageBookPage/addBookPage';
import EditBookPage from './pages/admin/manageBookPage/editBookPage';
// ->category
import ManageCategoryPage from './pages/admin/manageCategoryPage';
import AddCategoryPage from './pages/admin/manageCategoryPage/addCategoryPage';
import EditCategoryPage from './pages/admin/manageCategoryPage/editCategoryPage';
// ->customer
import ManageCustomerPage from './pages/admin/manageCusomerPage';
import EditCustomerPage from './pages/admin/manageCusomerPage/editCustomerPage';
// ->employee
import ManageEmployeePage from './pages/admin/manageEmployeePage';
import EditEmployeePage from './pages/admin/manageEmployeePage/editEmployeePage';
// ->feedback
import ManageFeedBackPage from './pages/admin/manageFeedbackPage';
import DetailFeedbackPage from './pages/admin/manageFeedbackPage/detailFeedbackPage';
// ->import
import ManageImportPage from './pages/admin/manageImportPage';
// ->news
import ManageNewsPage from './pages/admin/manageNewsPage';
import CreatePageNews from './pages/admin/manageNewsPage/createPageNews';
import EditPageNews from './pages/admin/manageNewsPage/editPageNews';
// ->order
import ManageOrderPage from './pages/admin/manageOrderPage';
import DetailOrderPage from './pages/admin/manageOrderPage/detailOrderPage';
import StatisticalPage from './pages/admin/statisticPage';
// end ui admin
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Fragment>
        <Routes>
            {/* router user */}
            <Route path="/user" element={<LayoutUser/>}>
                <Route path="contact" element={<ContactPage/>} />
                <Route path="recommend" element={<RecommendPage/>} />
                <Route path="book" element={<ProductsPage/>} />
                <Route path="book/:namecategory" element={<TypeProductsPage/>} />
                <Route path="detail" element={<DetailProductPage/>} />
                <Route path="home" element={<HomePage/>} />
                <Route path="news" element={<NewsPage/>}>
                    <Route path="detail" element={<DetailNews/>}/>
                    <Route index element={<ListNews/>}/>
                </Route>
                <Route path="manage" element={<LayoutManageUser/>}>
                    <Route path="account" element={<ProfileUser/>}/>
                    <Route path="order" element={<OrderList/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="payment" element={<PayMent/>}/>
                </Route>
                <Route index element={<HomePage/>} />
            </Route>
            <Route path='/user/login' element={<LoginPage/>}/>
            <Route path='/user/register' element={<RegisterPage/>}/>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
            {/* end router user */}

            {/* router admin */}
            <Route path='/admin' element={<LayoutAdmin/>}>
                <Route path="dashboard" element={<DashboardPage/>}/>
                <Route path="books" element={<ManageBookPage/>}/>
                    <Route path="books/add" element={<AddBookPage/>}/>
                    <Route path="books/edit/:idbook" element={<EditBookPage/>}/>
                <Route path="categories" element={<ManageCategoryPage/>}/>
                    <Route path="categories/add" element={<AddCategoryPage/>}/>
                    <Route path="categories/edit/:idcategory" element={<EditCategoryPage/>}/>
                <Route path="customers" element={<ManageCustomerPage/>}/>
                    <Route path="customers/edit/:idcustomer" element={<EditCustomerPage/>}/>
                <Route path="employees" element={<ManageEmployeePage/>}/>
                    <Route path="employees/edit/:idemployee" element={<EditEmployeePage/>}/>
                <Route path="news" element={<ManageNewsPage/>}/>
                    <Route path="news/create" element={<CreatePageNews/>} />
                    <Route path="news/edit/:idnews" element={<EditPageNews/>} />
                <Route path="orders" element={<ManageOrderPage/>}/>
                    <Route path="orders/detail/:idorder" element={<DetailOrderPage/>}/>
                <Route path="imports" element={<ManageImportPage/>}/>
                <Route path="feedback" element={<ManageFeedBackPage/>}/>
                    <Route path="feedback/detail/:idfeedback" element={<DetailFeedbackPage/>}/>
                <Route path="statistical" element={<StatisticalPage/>}/>
                <Route index element={<DashboardPage/>} />
            </Route>
            {/* end router admin */}
        </Routes>
    </Fragment>
  );
}

export default App;
