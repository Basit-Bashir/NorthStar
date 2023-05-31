import React from "react";
import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Product from "./components/Products/Product";
import LandingPage from "./components/MainPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Navbar />
      <Product />
      <LandingPage />
    </div>
  );
}

export default App;
