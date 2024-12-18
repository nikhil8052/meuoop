'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    role: Yup.string()
      .required('Type is required')
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: '' // Default empty selection
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {

      
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Unknown error occurred');
      }

      const data = await response.json();
      console.log('User created:', data);

      // Show success message
      setMessage('User successfully created');
      setIsError(false);

      resetForm();
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage(`Error creating user: ${error.message}`);
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 card p-5">
      <h3 className='mb-4'>Add User</h3>

      {/* Message Alert */}
      {message && (
        <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="row">
            {/* Username field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Username</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your username"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
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
              <label htmlFor="role" className="form-label">Type</label>
              <Field as="select" name="role" className="form-select">
                <option value="">Select user type</option>
                <option value="1">Admin</option>
                <option value="2">Super Admin</option>
              </Field>
              <ErrorMessage name="role" component="div" className="text-danger" />
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
