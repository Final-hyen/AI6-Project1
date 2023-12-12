import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import LandingPage from "./components/views/LandingPage/LandingPage";
import CartContainer from "./components/Cart/CartContainer";
import BuyContainer from "./components/Buy/BuyContainer";
import CompleteContainer from "./components/OrderComplete/OrderCompleteContainer";
import AdminPage from "./components/views/AdminPage/AdminPage";
import UserInfoContainer from "./components/Mypage/UserInfoContainer";
import UserinfoEditContain from "./components/Edit/UserInfoEditContain.jsx";
import DeleteOrderPage from "./components/views/MyPage/DeleteOrderPage";
import Header from "./components/Main/MainHeader";
import Footer from "./components/Footer/Footer";
import LoginContainer from "./components/Login/LoginContainer";
import PostProduct from "./components/Admin/ProductPost.jsx";
import GetOuterProduct from "./components/views/ProductPage/OuterContainer";
import TopProducts from "./components/views/ProductPage/TopContainer";
import BottomProducts from "./components/views/ProductPage/BottomContainer";
import AdminGetProducts from "./components/Admin/ProductContainer";
import JoinContainer from "./components/Join/joinContainer.jsx";
import EditContainer from "./components/Edit/ProductEditContainer";
import DetailContainer from "./components/Products/DetailContainer";
import OrderTrackingContain from "./components/views/MyPage/OrderTrackingContain.jsx";
import AddressPopup from "./components/Mypage/address.jsx";
function App() {
  return (
    <RecoilRoot>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/join" element={<JoinContainer />} />
        <Route exact path="/login" element={<LoginContainer />} />
        <Route exact path="/top" element={<TopProducts />} />
        <Route exact path="/bottom" element={<BottomProducts />} />
        <Route exact path="/outer" element={<GetOuterProduct />} />
        <Route exact path="/detail/:id" element={<DetailContainer />} />
        <Route exact path="/cart" element={<CartContainer />} />
        <Route exact path="/buypage" element={<BuyContainer />} />
        <Route
          exact path="/ordercompletepage"
          element={<CompleteContainer />}
        />
        <Route exact path="/mypage" element={<UserInfoContainer />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/edit" element={<UserinfoEditContain />} />
        <Route exact path="/ordertracking" element={<OrderTrackingContain />} />
        <Route exact path="/productpost" element={<PostProduct />} />
        <Route exact path="/deleteorder" element={<DeleteOrderPage />} />
        <Route exact path="/product" element={<AdminGetProducts />} />
        <Route exact path="/productedit/:id" element={<EditContainer />} />
        <Route exact path="/popup" element={<AddressPopup />}/>
      </Routes>
      <Footer />
    </Router>
    </RecoilRoot>
  );
}

export default App;
