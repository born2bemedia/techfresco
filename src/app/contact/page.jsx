import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactWrap from "./_components/ContactWrap";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach out to Tech Fresco for expert IT solutions and support. Find our contact details, request a consultation, or get answers to your technology questions.",
  openGraph: {
    title: "Contact Us",
    description:
      "Reach out to Tech Fresco for expert IT solutions and support. Find our contact details, request a consultation, or get answers to your technology questions.",
      images: "https://techfresco.com/images/meta.png",
  },
};

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactWrap />
    </>
  );
};

export default Contact;
