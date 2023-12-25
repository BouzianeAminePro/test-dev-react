import React, { useState } from "react";

import { useFormik } from "formik";

import { emailRegex } from "../../../consts";
import { validator } from "../../../helpers";

import "../../../styles/Form.css";

export default function LoginForm() {
  const [errors, setErrors] = useState({});

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      let errors = {};
      if (!validator(email, "pattern", emailRegex)) {
        errors.email = "You have to provide a valid email.";
      }

      if (!password.length) {
        errors.password = "Your must provide a password.";
      }

      setErrors(errors);

      return errors;
    },
  });

  return (
    <div className="LoginForm">
      <h1>Login form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-item${errors.email ? " has-error" : ""}`}>
          <label htmlFor="">Email</label>
          <input {...formik.getFieldProps("email")} name="email" type="email" />
          {errors.email && (
            <span className="error-message">
              <span className="error-item">{errors.email}</span>
            </span>
          )}
        </div>
        <div className={`form-item${errors.password ? " has-error" : ""}`}>
          <label htmlFor="">Password</label>
          <input
            {...formik.getFieldProps("password")}
            name="password"
            type="password"
          />
          {errors.password && (
            <span className="error-message">
              <span className="error-item">{errors.password}</span>
            </span>
          )}
        </div>
        <div className="form-item">
          <button
            type="submit"
            // disabled={formik.isSubmitting || !formik.isValid}
          >
            Login !
          </button>
        </div>
      </form>
    </div>
  );
}
