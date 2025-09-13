import React from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";


const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className={classes.AllEncompassing}>
      <div>
        <Link to="/">
          <p className={classes.cancel}><MdCancel /></p>
        </Link>
      </div>
      <div className={classes.header_back}>
        <div className={classes.RegisterFormText}>
          <h1>Register</h1>
        </div>
      </div>
      <div className={classes.thebox}>
        <div className={classes.WordSide}>
          <div className={classes.form_container}>
            <form onSubmit={handleSubmit}>
              <div className={classes.FirstAndLastName}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className={classes.AllTheOtherFormNames}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
        <div className={classes.TheImageSide}></div>
      </div>
    </section>
  );
};

export default RegistrationForm;
