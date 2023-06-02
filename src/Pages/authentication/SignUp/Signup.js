import React, { useState } from "react";
import classes from "./Signup.module.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (phone.trim() === "") {
      errors.phone = "Phone number is required";
    }

    if (address.trim() === "") {
      errors.address = "Address";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const formData = {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address,
      };
    }
  };

  return (
    <>
      <div className={classes.mainDiv1}>
        <h1 className="logo">Welcome to North Star</h1>
        <div className={classes.container}>
          <h3 className="logo-3">Sign-up</h3>
          <form className={classes.signup} onSubmit={handleSubmit}>
            <div
              className={`${classes.userName}   ${
                errors.name ? classes.error : ""
              }`}
            >
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? classes.shake : ""}
              />
            </div>
            <div
              className={`${classes.userEmail}   ${
                errors.email ? classes.error : ""
              }`}
            >
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? classes.shake : ""}
              />
            </div>
            <div
              className={`${classes.userPassword}   ${
                errors.password ? classes.error : ""
              }`}
            >
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? classes.shake : ""}
              />
            </div>
            <div
              className={`${classes.userPassword}   ${
                errors.confirmPassword ? classes.error : ""
              }`}
            >
              <label>Confirm</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={errors.confirmPassword ? classes.shake : ""}
              />
            </div>
            <div
              className={`${classes.usernumber}   ${
                errors.phone ? classes.error : ""
              }`}
            >
              <label>Phone</label>
              <input
                type="number"
                placeholder="Enter Your Mobile No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={errors.phone ? classes.shake : ""}
              />
            </div>
            <div
              className={`${classes.useraddress}   ${
                errors.address ? classes.error : ""
              }`}
            >
              <label>Address</label>

              <input
                type="text"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={errors.address ? classes.shake : ""}
              />
            </div>
          </form>
          <div className={classes.btnDiv}>
            <button
              type="submit"
              className={classes.btn}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
