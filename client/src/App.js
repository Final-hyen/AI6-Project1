import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil'

import LandingPage from './components/views/LandingPage/LandingPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import TopPage from './components/views/ProductPage/TopPage';
import CartPage from './components/views/CartPage/CartPage'
import BuyPage from './components/views/BuyPage/BuyPage'
import OrderCompletePage from './components/views/BuyPage/OrderCompletePage';
import AdminPage from './components/views/AdminPage/AdminPage';
import MyPage from './components/views/MyPage/MyPage'
import EditPage from './components/views/EditPage/EditPage';
import OrderTrackingPage from './components/views/MyPage/OrderTrackingPage';
import ProductEditPage from './components/views/EditPage/ProductEditPage';
import ProductPostPage from './components/views/PostPage/ProductPostPage';
import DeleteOrderPage from './components/views/MyPage/DeleteOrderPage';
import Header from './components/Main/MainHeader';
import Footer from './components/Footer/Footer';
import JoinForm from './components/Join/join.jsx';
import Login from './components/Login/login.jsx';
import ProductTable from './components/ProductTable/productTable';
import ProductDetail from './components/Products/productDetail';

function App() {
  return (
  <RecoilRoot>
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element = {<LandingPage />} />
          <Route exact path="/register" element = {<RegisterPage />} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/top" element = {<TopPage />} />
          <Route exact path='/detail/:id' element = {<ProductDetail />} />
          <Route exact path="/cart" element = {<CartPage />} />
          <Route exact path="/buypage" element = {<BuyPage />} />
          <Route exact path="/ordercompletepage" element = {<OrderCompletePage />} />
          <Route exact path="/mypage" element = {<MyPage />} />
          <Route exact path="/join" element = {<JoinForm />} />
          <Route exact path="/admin" element = {<AdminPage />} />
          <Route exact path="/edit" element = {<EditPage />} />
          <Route exact path="/ordertracking" element = {<OrderTrackingPage />} />
          <Route exact path="/productedit" element = {<ProductEditPage />} />
          <Route exact path="/productpost" element = {<ProductPostPage />} />
          <Route exact path="/deleteorder" element = {<DeleteOrderPage />} />
          <Route exact path="/product" element = {<ProductTable />} />
        </Routes>
        <Footer />
    </Router>
  </RecoilRoot>
  );
}

export default App;
