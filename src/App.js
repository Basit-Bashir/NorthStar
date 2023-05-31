import React from "react";
import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Product from "./components/Products/Product";
import LandingPage from "./components/MainPage/LandingPage";
import Filter from "./components/MainPage/Filter";
import FooterPart from "./components/Footer/FooterPart";
function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Navbar />
      <Product />
      <Filter />
      <LandingPage />

      <FooterPart />
    </div>
  );
}

export default App;
