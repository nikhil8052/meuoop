"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Switch } from "@mui/material";
import Select from "react-select";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from 'next/router';


export default function Page() {

  const desktopFileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);

  const [mobileLandingPage, setMobileLandingPage] = useState(false);
  const [desktopLandingPage, setDesktopLandingPage] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [allThemes, setAllThemes] = useState([]);
  const [allPageTypes, setAllPageTypes] = useState([]);
  const [allElements, setAllElements] = useState([]);
  const [desktopTemUrl, setDesktopTemUrl] = useState(false);
  const [mobileTemUrl, setMobileTemUrl] = useState(false);






  useEffect(() => {

    const fetchThemes = async () => {
      try {
        const response = await axios.get("/api/themes");
        // Map the categories to a format suitable for react-select
        const formattedCategories = response.data.map((category) => ({
          value: category.id,
          label: category.name,
        }));
        setAllThemes(formattedCategories);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const fetchPageTypes = async () => {
      try {
        const response = await axios.get("/api/pages");
        // Map the categories to a format suitable for react-select
        const formattedCategories = response.data.map((category) => ({
          value: category.id,
          label: category.name,
        }));

        setAllPageTypes(formattedCategories);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchElements = async () => {
      try {
        const response = await axios.get("/api/elements");
        // Map the categories to a format suitable for react-select
        const formattedCategories = response.data.map((category) => ({
          value: category.id,
          label: category.name,
        }));

        setAllElements(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchElements();
    fetchThemes();
    fetchPageTypes();




  }, [])



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
  // HANDLE THE DATA HERE 
  const formik = useFormik({
    initialValues: {
      name: "",
      selectedThemes: [],
      selectedPages: [],
      selectedElements: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // Collect all data, including switches
      console.log("Mobile:", mobileLandingPage, "Desktop:", desktopLandingPage);

      if (!mobileLandingPage && !desktopLandingPage) {
        alert(" Select the screen type.");
        return;
      }
      var screen_type = "";
      // Get the screen type 
      if (mobileLandingPage) {
        screen_type = "mobile";
      } else if (desktopLandingPage) {
        screen_type = "desktop";
      } else if (mobileLandingPage || desktopLandingPage) {
        screen_type = "both";
      }

      if (screen_type == "") {
        alert(" Something went wrong...");
      }

      const formData = {
        ...values,
        mobileLandingPage,
        desktopLandingPage,
        screen_type,
        desktopTemUrl,
        mobileTemUrl,
        status: 'draft'
      };


      // Post the landing page
      var PostLandingPage = async () => {
        try {
          const response = await axios.post('/api/landing-page', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response:', response.data); // Access the response data
          if( response.data.code && response.data.code ==200){
            alert(" Data saved successfully");
            window.location='/admin/dashboard';
          }else {
            alert('Something went wrong...');
          }
          
        } catch (error) {
          console.error('Error posting data:', error.response?.data || error.message);
        }
      };

      PostLandingPage();
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

  const handlePublish = () => {
    formik.handleSubmit(); // Call the formik submit handler
  };


  const handleFileChange = async (event, type) => {
    const file = event.target.files[0]; // Get the selected file
    const formData = new FormData();

    formData.set("image", file);
    try {
      const response = await fetch("/api/images/tem-upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      console.log("Image uploaded successfully:", data);

      var tem_image_path = data.url;

      if (type === "desktop") {
        setDesktopTemUrl(tem_image_path);
      } else if (type === "mobile") {
        // setMobileFile(file);
        setMobileTemUrl(tem_image_path);

      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Upload failed: " + error.message);
    }

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
            <input id="name" type="text" onChange={formik.handleChange}
              value={formik.values.name} />
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
                  <div className={desktopTemUrl ? "p-0 m-0" : "upload_icon_desktop me-3 "} onClick={() => handleClick("desktop")}
                  >
              
                        <Image height={desktopTemUrl ? 130 : 50} width={desktopTemUrl ? 200 : 50}  src={desktopTemUrl ? desktopTemUrl : "/images/plus.svg"} className={desktopTemUrl ? "p-0 m-0" : ""} alt="Upload Icon" />
                      
                  </div>

                  <div className={mobileTemUrl ? "p-0 m-0" : "upload_icon_mobile "} onClick={() => handleClick("mobile")}
                  >
                      <Image height={mobileTemUrl ? 130 : 50} width={mobileTemUrl ? 200 : 50}  src={mobileTemUrl ? mobileTemUrl : "/images/plus.svg"} className={mobileTemUrl ? "p-0 m-0" : ""} alt="Upload Icon" />

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



                </div>


                {/* Page Type End  */}

                {/* Element Div  */}
                <div className="Elements_div mb-3">
                  <Select
                    id="elements"
                    isMulti
                    options={allElements} // Use the options for elements
                    value={formik.values.selectedElements} // Link it to formik
                    onChange={(selected) => {
                      formik.setFieldValue("selectedElements", selected); // Update formik field
                      setSelectedElements(selected); // Update state
                    }}
                    placeholder="Select Elements"
                  />
                  {formik.touched.selectedElements && formik.errors.selectedElements && (
                    <div className="error text-danger">{formik.errors.selectedElements}</div>
                  )}
                </div>
                {/* End Element Div  */}

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
