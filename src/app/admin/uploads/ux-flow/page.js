"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Page() {
  const [images, setImages] = useState([]);
  const [isFirstStep, setIsFirstStep] = useState(true);

  const validationSchema = Yup.object({
    appName: Yup.string().required("App Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.set("image", file);

    try {
      const response = await fetch("http://localhost:3000/api/images", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      console.log( data , " This is the response ")
      if (data.url) {
        setImages([...images, data.url]);
      }

      console.log(images , " These are the iamge ")
      console.log("Image uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Upload failed: " + error.message);
    }
  };


  const handleNextStep = async (values, { setSubmitting }) => {
    try {
      await axios.post("/api/flows", {
        id: new Date().getTime().toString(),
        name: values.appName,
        description: values.description,
        type: "your_flow_type",
        status: "not_published",
      });
      setIsFirstStep(false);
    } catch (error) {
      console.error("Error saving flow:", error);
      alert("Error saving flow: " + error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePreviousStep = () => {
    setIsFirstStep(true);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          Meuooop
          <span>Upload UX Flow</span>
        </div>
        <div className="buttons">
          <button className="back-button" onClick={handlePreviousStep}>
            Back
          </button>
          <button className="preview">Preview</button>
          <button className="save-draft">Save Draft</button>
          <button className="publish">Publish</button>
        </div>
      </div>

      {isFirstStep ? (
        <Formik
          initialValues={{ appName: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={handleNextStep}
        >
          {({ isSubmitting }) => (
            <Form className="first_step step upload_flow_container">
              <div className="upload-icon">
                <Image height={100} width={100} src="/images/upload_icon.svg" alt="Upload Icon" />
              </div>
              <div className="input-group mb-2">
                <Field type="text" name="appName" placeholder="App Name" />
                <ErrorMessage name="appName" component="div" className="error-message" style={{ color: "red" }} />
                <Field type="text" name="description" placeholder="Description" />
                <ErrorMessage name="description" component="div" className="error-message" style={{ color: "red" }} />
              </div>

              <div className="search-group mb-2">
                <div className="search-bar">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search apps or flows" />
                </div>
                <div className="categories">
                  <div className="category active">WhatApps</div>
                  <div className="category inactive">Tik Tok</div>
                  <div className="category inactive">Instagram</div>
                  <div className="category inactive">In Drive</div>
                  <div className="category inactive">Google</div>
                </div>
              </div>
              <button type="submit" className="next-button" disabled={isSubmitting}>
                Save
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="second_step step second_step_main_div">
          <div className="second_step_left_div">
            <div className="app_name_container mb-4">
              <div className="app-icon"></div>
              <div className="app_name">App Name</div>
              <i className="fas fa-edit edit-icon"></i>
            </div>
            <div className="mobile-web-view">
              <div>Mobile</div>
              <div>Web</div>
            </div>
          </div>
          <div className="second_step_mid_div">
            <div className="add_new_image">
              <input type="file" onChange={handleImageUpload} />
              <div className="uploaded-images">
                {images.map((img, index ) => (
                  <img key={index} src={img} alt="Uploaded" width={100} height={100} />
                ))}
              </div>
              <button onClick={() => document.querySelector("input[type='file']").click()}>
                Add Another Image
              </button>
            </div>
          </div>
          <div className="second_step_right_div p-2 pt-4">
            <div className="menu">
              <div className="menu-item active">
                <span>Toggle</span>
                <i className="fas fa-check"></i>
              </div>
              <div className="menu-item">
                <span>Buttons</span>
                <i className="fas fa-check"></i>
              </div>
              <div className="menu-item">
                <span>Cards</span>
                <i className="fas fa-check"></i>
              </div>
              <div className="menu-item">
                <span>Navigation</span>
                <i className="fas fa-check"></i>
              </div>
              <div className="menu-item">
                <span>Profile</span>
                <i className="fas fa-check"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
