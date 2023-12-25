import React, { useState } from "react";

import { useFormik } from "formik";

import { emailRegex } from "../../../consts";
import { validator } from "../../../helpers";

import "../../../styles/Form.css";

export default function RegistrationForm() {
  const [errors, setErrors] = useState({});

  const initialValues = {
    email: "test@test.fr",
    password: "",
    confirm: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: ({ email, password, confirm }) => {
      let errors = {};
      if (!validator(email, "pattern", emailRegex)) {
        errors.email = "You have to provide a valid email.";
      }

      if (password.length > 0 && !validator(password, "length", null, 16, 5)) {
        errors.password =
          "Your password must be between 5 and 16 characters length.";
      }

      if (confirm.length > 0) {
        if (!validator(confirm, "length", null, 16, 5)) {
          errors.confirm =
            "Your password must be between 5 and 16 characters length.";
        }

        if (confirm !== password) {
          errors.confirm = "Your passwords must match";
        }
      }

      setErrors(errors);

      return errors;
    },
  });

  return (
    <div className="RegisterForm">
      <h1>Registration form</h1>
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
        <div className={`form-item${errors.confirm ? " has-error" : ""}`}>
          <label htmlFor="">Confirm</label>
          <input
            {...formik.getFieldProps("confirm")}
            name="confirm"
            type="password"
          />
          {errors.confirm && (
            <span className="error-message">
              <span className="error-item">{errors.confirm}</span>
            </span>
          )}
        </div>
        <div className="form-item">
          <button
            type="submit"
            // disabled={formik.isSubmitting || !formik.isValid}
          >
            Register !
          </button>
        </div>
      </form>
    </div>
  );
}
