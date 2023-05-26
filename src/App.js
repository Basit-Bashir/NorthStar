import React from "react";
import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import "./App.css";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Navbar />
    </div>
  );
}

export default App;
