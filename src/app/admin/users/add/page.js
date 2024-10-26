// src/pages/signup.js (or pages/signup.js based on your structure)
'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    user_type: Yup.string()
      .required('Type is required')  
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
    user_type: '' // Default empty selection

  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Form submitted:', values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container mt-5 card p-5">
      <h3 className='mb-4'>Add User </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="row">
            {/* Username field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <Field
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="text-danger" />
            </div>

            {/* Email field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

          {/* User Type Dropdown */}
        <div className="col-md-6 mb-3">
          <label htmlFor="user_type" className="form-label"> Type</label>
          <Field as="select" name="user_type" className="form-select">
            <option value="">Select user type</option>
            <option value="admin"> Admin</option>
            <option value="super_admin">Super Admin</option>
          </Field>
          <ErrorMessage name="user_type" component="div" className="text-danger" />
        </div>


            {/* Password field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            {/* Submit button */}
            <div className="col-md-12">
              <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
