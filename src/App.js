// import "./App.css";
// import "./styles/Nav.css";
// import "./styles/Banner.css";
// import "./styles/Footer.css";
// import "./styles/Sorry.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Banner from "./pages/Banner.js";
// import Cart from "./pages/cart.js";
// import Reference from "./pages/reference.js";
// import Checkout from "./pages/checkout.js";
// import Sorry from "./pages/Sorry";
// import Lecture from "./pages/lecture.js";
// import Login from "./pages/login";
// import Register from "./Login/register/Register";
// import BT from "./pages/Banner_test1";
// import BTT from "./pages/Banner_test2";
// import Lecture2 from "./pages/lecture2.js";
// import List from "./pages/List.js"; // 임시 리스트
// import Detail from "./pages/Detail.js"; // 임시 상세
// import data from "./assets/data.js";
// import { Routes, Route } from "react-router-dom";
// import FAQ from "./pages/FAQ";
// // import { AuthContextProvider } from "./context/AuthContext";

// function App() {
//   // 디테일 페이지 용
//   const items = data;

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Banner />} />
//         <Route path="/class" element={<Lecture />}></Route>
//         <Route path="/lecture2" element={<Lecture2 />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="checkout" element={<Checkout />} />
//         <Route path="/reference/*" element={<Reference />} />
//         <Route path="/login/*" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/forget" element={<Forget />} /> */}
//         <Route path="/*" element={<div>잘못된 경로임</div>} />
//         <Route path="/sorry" element={<Sorry />} />
//         <Route path="/bt" element={<BT />} />
//         <Route path="/btt" element={<BTT />} />
//         <Route path="/faq" element={<FAQ />} />
//         {/* 임시 리스트 */}
//         <Route path="/list" element={<List />} />
//         <Route path="/detail/:id" element={<Detail items={items} />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;
import "./App.css";

import "./styles/Nav.css";
import "./styles/Banner.css";
import "./styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner.js";
import CartPage from "./pages/CartPage";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Referencepage from "./pages/Referencepage";
import CheckoutPage from "./pages/CheckoutPage.js";

import Lecture from "./pages/lecture.js";
import Login from "./pages/login";
import Register from "./Login/register/Register";
import Lecture2 from "./pages/lecture2.js";
import List from "./pages/List.js"; // 임시 리스트
import Detail from "./pages/Detail.js"; // 임시 상세
import data from "./assets/data.js";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

import Forget from "./components/forget";
import Detail1 from "./pages/lecture2";

// 서버용
import axios from "axios";
import { useState } from "react";
import TermsOfUse from "./components/TermsOfUse";

function App() {
  // 디테일 페이지 용
  const items = data;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/class" element={<Lecture />} />
        <Route path="/lecture2" element={<Lecture2 />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/reference/*" element={<Referencepage />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/*" element={<div>잘못된 경로임</div>} />
        <Route path="/terms" element={<TermsOfUse />} />

        {/* 임시 리스트 */}
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/lecture2/:id" element={<Detail1 items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
