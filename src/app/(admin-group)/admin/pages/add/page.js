'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddElement = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    status: Yup.string()
      .required('Status is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    status: '', // Default empty selection for status
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('/api/pages', {
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
      console.log('Element created:', data);

      // Show success message
      setMessage('Element successfully created');
      setIsError(false);
      resetForm();
    } catch (error) {
      console.error('Error creating element:', error);
      setMessage(`Error creating element: ${error.message}`);
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 card p-5">
      <h3 className='mb-4'>Add Element</h3>

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
            {/* Name field */}
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            {/* Status Dropdown */}
            <div className="col-md-6 mb-3">
              <label htmlFor="status" className="form-label">Status</label>
              <Field as="select" name="status" className="form-select">
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="block">Block</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-danger" />
            </div>

            {/* Submit button */}
            <div className="col-md-12">
              <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddElement;
