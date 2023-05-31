import React from "react";
import classes from "./Footer.module.css";
const FooterPart = () => {
  return (
    <>
      <div className={classes.FooterCont}>
        <img alt="Logo" />
        <div className={classes.FooterAdd}>
          <p>Mir Mall Complex opposite District Police Lines Srinagar</p>
          <p>J&K 190001</p>
        </div>
      </div>
    </>
  );
};
export default FooterPart;
