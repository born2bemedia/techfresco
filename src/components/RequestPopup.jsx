"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select, { components } from "react-select";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

function RequestPopup() {
  const { requestPopupDisplay, setRequestPopupDisplay, serviceValue } =
    usePopup();
  const countryCode = useCountryCode();

  const services = [
    { value: "Cloud services", label: "Cloud services" },
    { value: "Network Security", label: "Network Security" },
    { value: "Hardware help", label: "Hardware help" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Backup solutions", label: "Backup solutions" },
    {
      value: "Information technology consulting",
      label: "Information technology consulting",
    },
    { value: "Tech support", label: "Tech support" },
    {
      value: "Digital transformation services",
      label: "Digital transformation services",
    },
    {
      value: "Mobile and remote networking",
      label: "Mobile and remote networking",
    },
    { value: "Managed IT services", label: "Managed IT services" },
    { value: "Email services", label: "Email services" },
    { value: "Technology training", label: "Technology training" },
  ];

  const industry = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Automotive", label: "Automotive" },
    { value: "Construction", label: "Construction" },
    { value: "Education", label: "Education" },
    { value: "Energy", label: "Energy" },
    { value: "Finance", label: "Finance" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Insurance", label: "Insurance" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Media and Entertainment", label: "Media and Entertainment" },
    { value: "Pharmaceuticals", label: "Pharmaceuticals" },
    { value: "Retail", label: "Retail" },
    { value: "Telecommunications", label: "Telecommunications" },
    {
      value: "Transportation and Logistics",
      label: "Transportation and Logistics",
    },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Government", label: "Government" },
    { value: "Non-Profit", label: "Non-Profit" },
  ];

  const challenges = [
    { value: "Data Security", label: "Data Security" },
    { value: "Managing Data", label: "Managing Data" },
    { value: "Meeting Regulations", label: "Meeting Regulations" },
    { value: "IT System Reliability", label: "IT System Reliability" },
    { value: "Scaling IT", label: "Scaling IT" },
    { value: "Reducing Downtime", label: "Reducing Downtime" },
    { value: "Controlling Costs", label: "Controlling Costs" },
    { value: "System Integration", label: "System Integration" },
    { value: "Finding IT Talent", label: "Finding IT Talent" },
    { value: "Disaster Recovery", label: "Disaster Recovery" },
    { value: "User Training", label: "User Training" },
    { value: "Upgrading Technology", label: "Upgrading Technology" },
    { value: "Cloud Management", label: "Cloud Management" },
    { value: "Vendor Relations", label: "Vendor Relations" },
    { value: "Supporting Remote Work", label: "Supporting Remote Work" },
    { value: "Optimising Performance", label: "Optimising Performance" },
    { value: "Backup Solutions", label: "Backup Solutions" },
    { value: "Network Protection", label: "Network Protection" },
    { value: "Staying Innovative", label: "Staying Innovative" },
    { value: "Improving User Experience", label: "Improving User Experience" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#ffffff4d",
      height: "40px",
      borderRadius: state.isFocused ? "20px 20px 0 0" : "20px",
      background: "#FFFFFF",
      border: state.isFocused ? "1px solid #fff" : "1px solid #fff",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 20px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "40px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "40px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#878787",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#878787",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#fff",
      margin: "0",
      borderRadius: "0 0 20px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#878787",
      padding: "10px 24px",
      "&:hover": {
        background: "#fff",
        color: "#EE342A",
      },
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/images/select.svg" alt="custom dropdown icon" />
      </components.DropdownIndicator>
    );
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your full name"),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please provide your email address."),
    phone: Yup.string().required("Please enter a valid phone number."),
    company: Yup.string().required(
      "Please provide your company name and website."
    ),
    message: Yup.string().required("Please enter your message."),
    policy: Yup.bool().oneOf([true], "You must accept privacy policy."),
    service: Yup.string().required("Please select necessary options."),
    industry: Yup.string().required("Please specify your industry."),
    challenges: Yup.string().required("Please select your challenges."),
  });

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    policyCheckbox: false,
    service: "",
    industry: "",
    challenges: "",
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setSubmitting(false);
    resetForm();
    setStatus({ success: true });
    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(JSON.stringify(values));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
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
      className={`request-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}
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
                <h2>Get IT Assistance</h2>
                <p>
                  Fill out the form below and submit your message. We'll respond
                  as soon as possible.
                </p>
                <div className="request-form">
                  <>
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
                          placeholder="Your phone"
                          className={
                            touched.phone && errors.phone ? "invalid" : ""
                          }
                        />
                        <ErrorMessage name="phone" component="span" />
                      </div>

                      <div>
                        <Field
                          name="company"
                          type="text"
                          placeholder="Company and website"
                          className={
                            touched.company && errors.company ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="company"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Select
                          name="service"
                          options={services}
                          styles={customStyles}
                          components={{ DropdownIndicator }}
                          className={`form-field ${
                            touched.service && errors.service ? "invalid" : ""
                          }`}
                          onChange={(option) =>
                            setFieldValue("service", option.value)
                          }
                          placeholder="What services are you interested in?"
                        />
                        <ErrorMessage
                          name="service"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Select
                          name="industry"
                          options={industry}
                          styles={customStyles}
                          components={{ DropdownIndicator }}
                          className={`form-field ${
                            touched.industry && errors.industry ? "invalid" : ""
                          }`}
                          onChange={(option) =>
                            setFieldValue("industry", option.value)
                          }
                          placeholder="Industry"
                        />
                        <ErrorMessage
                          name="industry"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Select
                          name="challenges"
                          options={challenges}
                          styles={customStyles}
                          components={{ DropdownIndicator }}
                          className={`form-field ${
                            touched.challenges && errors.challenges
                              ? "invalid"
                              : ""
                          }`}
                          onChange={(option) =>
                            setFieldValue("challenges", option.value)
                          }
                          placeholder="Choose your IT challenge"
                        />
                        <ErrorMessage
                          name="challenges"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="message"
                          as="textarea"
                          placeholder="Comments, questions or additional information"
                          className={
                            touched.message && errors.message ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="checkbox">
                        <Field
                          type="checkbox"
                          name="policyCheckbox"
                          className={
                            touched.policyCheckbox && errors.policyCheckbox ? "invalid" : ""
                          }
                          id="policyCheckbox"
                        />
                        <label for="policyCheckbox">
                          <CheckboxIcon />
                          <span>
                            I consent to Tech Fresco storing my information to
                            handle my inquiry, as the Privacy Policy outlines.
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

export default RequestPopup;
