import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CheckboxIcon from "@/icons/CheckboxIcon";
//import { usePopup } from "@/context/PopupsContext";

const RequestForm = () => {
  //const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    company: Yup.string(),
    message: Yup.string(),
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
    { setSubmitting, resetForm, setStatus }
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
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, touched, errors }) => (
          <Form>
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Full Name"
                className={touched.name && errors.name ? "invalid" : ""}
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={touched.email && errors.email ? "invalid" : ""}
              />
            </div>

            <div>
              <Field
                name="phone"
                type="tel"
                placeholder="Phone"
                className={touched.phone && errors.phone ? "invalid" : ""}
              />
            </div>

            <div>
              <Field
                name="company"
                type="text"
                placeholder="Company and website"
                className={touched.company && errors.company ? "invalid" : ""}
              />
            </div>

            <div className="full">
              <Field
                name="message"
                as="textarea"
                placeholder="Message"
                className={touched.message && errors.message ? "invalid" : ""}
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
                  I consent to Tech Fresco storing my information to handle my
                  inquiry, as the Privacy Policy outlines.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="red-button"
              disabled={isSubmitting}
            >
              Get Assistance
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
