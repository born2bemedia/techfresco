"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useCountryCode from "@/utils/useCountryCode";
import CheckboxIcon from "@/icons/CheckboxIcon";

function RequestPopupJob() {
  const { requestPopupDisplayJob, setRequestPopupDisplayJob } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    portfolio: Yup.string().url("This field is required."),
    expertise: Yup.string().required("This field is required."),
    experience: Yup.string().required("This field is required."),
    technologies: Yup.string().required("This field is required."),
    certifications: Yup.string().required("This field is required."),
    project: Yup.string().required("This field is required."),
    industryTrends: Yup.string().required("This field is required."),
    motivation: Yup.string().required("This field is required."),
    availability: Yup.string().required("This field is required."),
    workPreference: Yup.string().required("This field is required."),
    comments: Yup.string(),
    policyCheckboxJob: Yup.bool().oneOf(
      [true],
      "You must accept the privacy policy."
    ),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    expertise: "",
    experience: "",
    technologies: "",
    certifications: "",
    project: "",
    industryTrends: "",
    motivation: "",
    availability: "",
    workPreference: "",
    comments: "",
    policyCheckboxJob: false,
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplayJob(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    let cvData = null;
    if (values.cv) {
      cvData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.cv.name, // Get the filename
            mimetype: values.cv.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.cv);
      });
    }

    const payload = {
      ...values,
      cv: cvData,
    };

    try {
      const response = await fetch("/api/emails/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`request-popup-wrap job-popup ${
        requestPopupDisplayJob ? "opened" : ""
      }`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <img
                src="/images/closePopup.svg"
                className="popup-close"
                onClick={() => closePopup(resetForm)}
              />
              <div>
                <div className="request-form job-form">
                  <>
                    <h2>Join Tech Fresco Team</h2>
                    <Form>
                      <div>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          className={
                            touched.name && errors.name ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className={
                            touched.email && errors.email ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <PhoneInput
                          country={countryCode}
                          value=""
                          onChange={(value) => setFieldValue("phone", value)}
                          placeholder="Phone"
                          className={
                            touched.phone && errors.phone ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="portfolio"
                          type="text"
                          placeholder="Link to Portfolio"
                          className={
                            touched.portfolio && errors.portfolio
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="portfolio"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="expertise"
                          type="text"
                          placeholder="Area of Expertise"
                          className={
                            touched.expertise && errors.expertise
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="expertise"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="experience"
                          type="text"
                          placeholder="Years of Experience in IT"
                          className={
                            touched.experience && errors.experience
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="experience"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="technologies"
                          type="text"
                          placeholder="Specific Technologies/Tools You're Proficient In"
                          className={
                            touched.technologies && errors.technologies
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="technologies"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="certifications"
                          type="text"
                          placeholder="Relevant Certifications"
                          className={
                            touched.certifications && errors.certifications
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="certifications"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="project"
                          as="textarea"
                          placeholder="Describe a Project Where You Solved a Complex IT Challenge"
                          className={
                            touched.project && errors.project ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="project"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="industryTrends"
                          type="text"
                          placeholder="How Do You Stay Updated on Industry Trends?"
                          className={
                            touched.industryTrends && errors.industryTrends
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="industryTrends"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="motivation"
                          type="text"
                          placeholder="What Motivates You in Your Work?"
                          className={
                            touched.motivation && errors.motivation
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="motivation"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="availability"
                          type="text"
                          placeholder="Availability (Preferred Start Date)"
                          className={
                            touched.availability && errors.availability
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="availability"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="workPreference"
                          type="text"
                          placeholder="Work Environment Preference (Remote, Hybrid, On-site)"
                          className={
                            touched.workPreference && errors.workPreference
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="workPreference"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="comments"
                          as="textarea"
                          placeholder="Additional Comments or Information"
                          className={
                            touched.comments && errors.comments ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="comments"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full file-wrap">
                        <span
                          className="upload-custom"
                          onClick={() => document.getElementById("cv").click()}
                        >
                          <img src="/images/career/file.svg" />
                          {values.cv ? values.cv.name : "Upload your CV"}
                        </span>
                        <input
                          id="cv"
                          name="cv"
                          type="file"
                          onChange={(event) => {
                            setFieldValue("cv", event.currentTarget.files[0]);
                            console.log(event.currentTarget.files[0]);
                          }}
                          style={{ display: "none" }}
                        />
                        <ErrorMessage name="cv" component="span" />
                      </div>

                      <div className="checkbox">
                        <Field
                          type="checkbox"
                          name="policyCheckboxJob"
                          className={
                            touched.policyCheckboxJob &&
                            errors.policyCheckboxJob
                              ? "invalid"
                              : ""
                          }
                          id="policyCheckboxJob"
                        />
                        <label for="policyCheckboxJob">
                          <CheckboxIcon />
                          <span>
                            I agree to the processing of my personal data by
                            Tech Fresco in accordance with the Privacy Policy
                            for the purpose of handling my application.
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="red-button"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                    {status && status.success && (
                      <div className="success-message">
                        <img src="/images/success.svg" alt="Success" />
                        <span>
                          <b>Thank you for your request!</b> We have received
                          your information, and our managers will be in touch
                          with you shortly.
                        </span>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestPopupJob;
