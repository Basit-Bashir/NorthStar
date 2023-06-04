import React, { useState } from "react";
import classes from "./ProductUpload.module.css";

const ProductUpload = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const updatedImages = [...productImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        updatedImages.push(event.target.result);
        if (updatedImages.length > 3) {
          updatedImages.splice(0, updatedImages.length - 3);
        }
        setProductImages(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleProductUpload = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      images: productImages,
    };

    console.log(newProduct);

    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImages([]);
  };

  return (
    <div className={classes.productUpload}>
      <h1 className={classes.title}>Product Upload</h1>
      <form className={classes.form} onSubmit={handleProductUpload}>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className={classes.textarea}
          ></textarea>
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" className={classes.button}>
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
