import { Fragment } from 'react';
import LayoutUser from './layout/user';
import HomePage from './pages/user/homePage';
import RecommendPage from './pages/user/recommend';
import ContactPage from './pages/user/contactPage';
import ProductsPage from './pages/user/productsPage';
import LoginPage from './pages/user/loginPage';
import RegisterPage from './pages/user/registerPage';
import ForgotPasswordPage from './pages/user/forgotPasswordPage';
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
            <Route path="home" element={<HomePage/>} />
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
