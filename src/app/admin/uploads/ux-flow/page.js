"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Page() {
  const [images, setImages] = useState([]);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [appName, setAppName] = useState(""); // State to store the app name
  const [description, setDescription] = useState(""); // State to store the description
  const [categories,setCategories] = useState([]); // State to store the description
  const [elements,setElements] = useState([]); // State to store the description




  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data); // Assuming response.data is an array of categories
        console.log(categories  )
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    const fetchElements = async () => {
      try {
        const response = await axios.get("/api/elements");
        console.log("Elements ", response.data )
        setElements(response.data); // Assuming response.data is an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchElements();

  }, []);

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
    const urlParams = new URLSearchParams(window.location.search);
    const flowId = urlParams.get("flow_id");

    const formData = new FormData();
    formData.set("image", file);
    if (flowId) {
      // Append flow_id to formData if it exists
      formData.set("flow_id", flowId);
      formData.set("status", 1);
      formData.set("order_id", 1);

    }


    try {
      const response = await fetch("http://localhost:3000/api/images", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.url) {
        setImages([...images, data.url]);
      }

      console.log("Image uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Upload failed: " + error.message);
    }
  };

  const handleNextStep = async (values, { setSubmitting }) => {
    try {
      // Save the flow information before going to the next step
      const response = await fetch("/api/flows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.appName,
          description: values.description,
          type: "ux_flow",
          status: "draft",
        }),
      });


      if( response.ok ){
        const data = await response.json();
        const flowId = data.flow_id ;
        if (flowId) {
          const currentUrl = new URL(window.location.href);
          currentUrl.searchParams.set("flow_id", flowId); // Add or update the flow_id query parameter
          window.history.pushState({}, "", currentUrl); // Update the URL without reloading
        } else {
          console.error("Flow ID is missing from the response");
        }
      }



      setAppName(values.appName); // Store the app name in state
      setDescription(values.description); // Store the description in state
      setIsFirstStep(false); // Move to the second step
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
          <button className="publish">Publish</button>
        </div>
      </div>

      {isFirstStep ? (
        <Formik
          initialValues={{ appName: appName || "", description: description || "" }}
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
                {categories.map((category, index) => (
                    <div key={index} className={`category ${index === 0 ? "active" : "inactive"}`}>
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="next-button" disabled={isSubmitting}>
                Save & Next
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="second_step step second_step_main_div">
          <div className="second_step_left_div">
            <div className="app_name_container mb-4">
              <div className="app-icon"></div>
              <div className="app_name">{appName}</div> {/* Display the app name here */}
              <i className="fas fa-edit edit-icon"></i>
            </div>
            <div className="mobile-web-view">
              <div className="mobile-web-view-active"> Mobile</div>
              <div>Web</div>
            </div>
          </div>
          <div className="second_step_mid_div">
            <div className="add_new_image">
              <input type="file" onChange={handleImageUpload} />
              <div className="uploaded-images">
                {images.map((img, index) => (
                  <img key={index} src={img} alt="Uploaded" width={100} height={100} />
                ))}
              </div>
              {/* <button onClick={() => document.querySelector("input[type='file']").click()}>
                Add Another Image
              </button> */}
            </div>
          </div>
          <div className="second_step_right_div p-2 pt-4">
            <div className="menu">

            {elements.map((category, index) => (
                     <div className={`menu-item ${index === 0 ? "active" : "inactive"}`} key={index} >
                      <span>{category.name}</span>
                    </div>
            ))}

              {/* <div className="menu-item active">
                <span>Toggle</span>
                <i className="fas fa-check"></i>
              </div> */}
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
