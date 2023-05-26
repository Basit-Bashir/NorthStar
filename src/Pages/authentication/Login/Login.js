import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  const handleSignupClick = () => {};
  return (
    <>
      <div className={classes.mainDiv}>
        <h1 className="logo">Welcome to North Star</h1>
        <div className={classes.container}>
          <h3 className="logo-3">Login</h3>
          <form>
            <div className={classes.user}>
              <label>Username</label>
              <input type="text" placeholder="NorthStar"></input>
            </div>
            <div className={classes.userPass}>
              <label>Password</label>
              <input type="password" placeholder="*****"></input>
            </div>
          </form>
          <div className={classes.btnDiv}>
            <button type="submit" className={classes.btn}>
              Login
            </button>
          </div>
          <div className={classes.signupDiv}>
            <p className="new-text">OR</p>
            <button
              type="submit"
              className={classes.btn}
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
