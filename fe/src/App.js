import { Fragment } from 'react';
// ui user
import LayoutUser from './layout/user';
import HomePage from './pages/user/homePage';
import RecommendPage from './pages/user/recommendPage';
import ContactPage from './pages/user/contactPage';
import ProductsPage from './pages/user/productsPage';
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

// ui admin
import LayoutAdmin from './layout/admin';
import DashboardPage from './pages/admin/dashboardPage';
import ManageBookPage from './pages/admin/manageBookPage';
import ManageCategoryPage from './pages/admin/manageCategoryPage';
import ManageCustomerPage from './pages/admin/manageCusomerPage';
import ManageEmployeePage from './pages/admin/manageEmployeePage';
import ManageFeedBackPage from './pages/admin/manageFeedbackPage';
import ManageImportPage from './pages/admin/manageImportPage';
import ManageNewsPage from './pages/admin/manageNewsPage';
import ManageOrderPage from './pages/admin/manageOrderPage';
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
                <Route path="product" element={<ProductsPage/>} />
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
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
            {/* end router user */}

            {/* router admin */}
            <Route path='/admin' element={<LayoutAdmin/>}>
                <Route exact path="dashboard" element={<DashboardPage/>}/>
                <Route path="books" element={<ManageBookPage/>}/>
                <Route path="categories" element={<ManageCategoryPage/>}/>
                <Route path="customers" element={<ManageCustomerPage/>}/>
                <Route path="employees" element={<ManageEmployeePage/>}/>
                <Route path="news" element={<ManageNewsPage/>}/>
                <Route path="orders" element={<ManageOrderPage/>}/>
                <Route path="imports" element={<ManageImportPage/>}/>
                <Route path="feedback" element={<ManageFeedBackPage/>}/>
                {/* <Route path="chart" element={<ChartPage/>}/> */}
                <Route index element={<DashboardPage/>} />
            </Route>
            {/* end router admin */}
        </Routes>
    </Fragment>
  );
}

export default App;
