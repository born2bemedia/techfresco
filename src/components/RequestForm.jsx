import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CheckboxIcon from "@/icons/CheckboxIcon";
import { usePopup } from "@/context/PopupsContext";
import ThanksPopup from "./ThanksPopup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

const RequestForm = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();
  const countryCode = useCountryCode();

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
  });

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    policy: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus, status }
  ) => {
    setSubmitting(false);
    resetForm();
    setStatus({ success: true });
    /*try {
      const response = await fetch("/api/emails/contact", {
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
          setThanksPopupDisplay(true);
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }*/
  };

  return (
    <>
      <div className="request-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status, touched, errors }) => (
            <>
              <Form>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className={touched.name && errors.name ? "invalid" : ""}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={touched.email && errors.email ? "invalid" : ""}
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
                    className={touched.phone && errors.phone ? "invalid" : ""}
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
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message"
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
                    name="policy"
                    className={touched.policy && errors.policy ? "invalid" : ""}
                    id="policy"
                  />
                  <label for="policy">
                    <CheckboxIcon />
                    <span>
                      I consent to Tech Fresco storing my information to handle
                      my inquiry, as the Privacy Policy outlines.
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
                    <b>Thank you for your request!</b> We have received your
                    information, and our managers will be in touch with you
                    shortly.
                  </span>
                </div>
              )}
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RequestForm;
