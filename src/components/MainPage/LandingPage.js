import React from "react";
import classes from "./LandingPage.module.css";
import img1 from "../../Assets/Imgs/p1.jpg";
import img2 from "../../Assets/Imgs/p2.jpg";
import img3 from "../../Assets/Imgs/p3.jpg";

const products = [
  {
    id: 1,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img1,
  },
  {
    id: 2,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img2,
  },
  {
    id: 3,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img3,
  },
  {
    id: 4,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img2,
  },
  {
    id: 5,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img3,
  },
  {
    id: 6,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img2,
  },
  {
    id: 7,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img1,
  },
  {
    id: 8,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img3,
  },
  {
    id: 9,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img2,
  },
  {
    id: 10,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img1,
  },
  {
    id: 11,
    name: "HP Notebook G7 340s",
    price: "70,000",
    image: img3,
  },
  {
    id: 12,
    name: "Dell Inspiron",
    price: "65,000",
    image: img1,
  },
];

const LandingPage = () => {
  return (
    <>
      <div className={classes.landingCont}>
        <div className={classes.productsCont}>
          {products.map((product, index) => (
            <div
              className={`${classes.productDetails} ${
                (index + 4) % 4 === 0 ? classes.newLine : ""
              }`}
              key={product.id}
            >
              <img
                className={classes.productImg}
                src={product.image}
                alt="product img"
              />
              <div className={classes.productBio}>
                <p>{product.name}</p>
                <p>&#8377; {product.price}</p>
                <div className={classes.btnBox}>
                  <button className={classes.btn}>Buy Now</button>
                  <button className={classes.btn}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
