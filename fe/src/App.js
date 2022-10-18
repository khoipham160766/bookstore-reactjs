import { Fragment } from 'react';
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
import NewsPage from './pages/user/newsPage';
import ListNews from './components/user/news/listNews';
import DetailNews from './components/user/news/detailNews';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<LayoutUser/>}>
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
                </Route>
                <Route index element={<HomePage/>} />
            </Route>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
