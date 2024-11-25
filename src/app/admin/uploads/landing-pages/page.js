"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Switch } from "@mui/material";
import Select from "react-select";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Page() {

  const desktopFileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);

  const [mobileLandingPage, setMobileLandingPage] = useState(false);
  const [desktopLandingPage, setDesktopLandingPage] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);


  const allPageTypes = [
    { value: "option1", label: "Landing Page " },
    { value: "option2", label: "About Us" },
    { value: "option3", label: "Contact Us" },
    { value: "option4", label: "Terms and Conditions" },
  ];

  const allThemes = [
    { value: "option1", label: "Modern" },
    { value: "option2", label: "Glassmorphism" },
    { value: "option3", label: "AI" },
    { value: "option4", label: "Java" },
  ];


  const handleFileChange = (event, type) => {
    const file = event.target.files[0]; // Get the selected file
    if (type === "desktop") {
      setDesktopFile(file);
    } else if (type === "mobile") {
      setMobileFile(file);
    }
  };


  const handleClick = (type) => {
    if (type === "desktop" && desktopFileInputRef.current) {
      desktopFileInputRef.current.click();
    } else if (type === "mobile" && mobileFileInputRef.current) {
      mobileFileInputRef.current.click();
    }
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    selectedThemes: Yup.array().min(1, "At least one theme must be selected"),
    selectedPages: Yup.array().min(1, "At least one page type must be selected"),
  });


  // Formik for handling form state
  const formik = useFormik({
    initialValues: {
      name: "",
      selectedThemes: [],
      selectedPages: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // Collect all data, including switches
      const formData = {
        ...values,
        mobileLandingPage,
        desktopLandingPage,
      };
      console.log("Form Data:", formData);
    },
  });

  const handleTheme = (selected) => {
    setSelectedThemes(selected);
  };

  const handlePageType = (selected) => {
    setSelectedPages(selected);
  };

  const handleMobileSwitch = (event) => {
    setMobileLandingPage(event.target.checked)
  };

  const handleDesktopSwitch = (event) => {
    setDesktopLandingPage(event.target.checked)
  };

  return (
    <>

      <div className="header">
        <div className="logo">
          <p>Meuooop </p>
        </div>
        <div className="buttons">

          <button className="preview">Save Draft </button>
          <button className="publish" onClick={formik.handleSubmit} >Publish</button>
        </div>
      </div>
      <div class="main d-flex justify-content-between ">
        <div class="sidebar p-4">
          <div class="landing-upload-icon">
            <Image height={50} width={90} src="/images/upload_icon.svg" alt="Upload Icon" />

          </div>
          <div class="form-group m-0 mb-3">
            <label for="name">
              Name
            </label>
            <input id="name" type="text" />
            {formik.touched.name && formik.errors.name && (
              <div className="error text-danger">{formik.errors.name}</div>
            )}
          </div>

          {/* Swithces  */}

          <div className="swithes mb-3 paper">
            <div className="switch-div mobile-switch">
              <label> Mobile </label>
              <Switch checked={mobileLandingPage} onChange={handleMobileSwitch} />
            </div>
            <div className="switch-div desktop-switch">
              <label> Desktop </label>
              <Switch checked={desktopLandingPage} onChange={handleDesktopSwitch} />
            </div>
          </div>
          {/* End Switches  */}


          {/* Theme  Type Start  */}
          <div className="Page-tyeps mb-3">
            <label for="category mb-3">
              Select Themes
            </label>
            <Select
              id="themes"
              isMulti
              options={allThemes}
              value={selectedThemes}
              onChange={(selected) => {
                formik.setFieldValue("selectedThemes", selected);
                setSelectedThemes(selected);
              }}
              placeholder="Select Theme"


            />
            {formik.touched.selectedThemes && formik.errors.selectedThemes && (
              <div className="error text-danger">{formik.errors.selectedThemes}</div>
            )}
          </div>
          {/* Themem Type End  */}


        </div>
        <div class="landing-page-right-section w-100">
          <Paper
            elevation={0} // Controls the shadow depth
            style={{
              padding: "20px",
              height: "100%",
              textAlign: "center",
              backgroundColor: "#f5f5f5", // Optional custom color
            }}
          >
            <Paper>
              <div className="landing-page-upload">

                <input
                  type="file"
                  ref={desktopFileInputRef}
                  onChange={(e) => handleFileChange(e, "desktop")}
                  style={{ display: "none" }}
                />

                {/* Hidden file input for mobile */}
                <input
                  type="file"
                  ref={mobileFileInputRef}
                  onChange={(e) => handleFileChange(e, "mobile")}
                  style={{ display: "none" }}
                />

                <div className="d-flex ">
                  <div className="upload_icon_desktop me-3"           onClick={() => handleClick("desktop")}
                   >
                    <Image height={50} width={50} src="/images/plus.svg" alt="Upload Icon" />
                  </div>

                  <div className="upload_icon_mobile"           onClick={() => handleClick("mobile")}
                   >
                    <Image height={50} width={50} src="/images/plus.svg" alt="Upload Icon" />
                  </div>
                </div>
                {/* Page Type Start  */}

                <div className="Page-tyeps mb-3">

                  <Select
                    id="page_types"
                    isMulti
                    options={allPageTypes}
                    value={selectedPages}
                    onChange={(selected) => {
                      formik.setFieldValue("selectedPages", selected);
                      setSelectedPages(selected);
                    }}
                    placeholder="Page Type  "


                  />
                  {formik.touched.selectedPages && formik.errors.selectedPages && (
                    <div className="error text-danger ">{formik.errors.selectedPages}</div>
                  )}

                  <div className="mt-3">
                    <div className="elements">
                      <div className="element-div"> Element </div>
                      <div className="element-div"> Element </div>
                      <div className="element-div"> Element </div>
                    </div>
                  </div>

                </div>
                {/* Page Type End  */}

                {/* Delete Icon DIV  */}
                <div className="delete-icon">
                  <Image height={23} width={23} src="/images/delete.svg" alt="Upload Icon" />
                </div>
              </div>
            </Paper>

          </Paper>
        </div>
      </div>
    </>
  )
}
