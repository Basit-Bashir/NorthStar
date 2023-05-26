import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerCont}>
        <img src="" alt="Logo" />
        <h2>Welcome to North Star</h2>
        <div className={classes.headerBtn}>
          <button className={classes.btn}>Login</button>
          <button className={classes.btn}>Sign up</button>
          <button className={classes.btn}>Logout</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
