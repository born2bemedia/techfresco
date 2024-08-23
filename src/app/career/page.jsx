import React from "react";
import "@/styles/career.scss";
import CareerHero from "./_components/CareerHero";
import CareerSecond from "./_components/CareerSecond";
import CareerBanner from "./_components/CareerBanner";

export const metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Tech Fresco. Discover the benefits of working with us and apply through our easy-to-use application form. Join our team and grow with us!",
  openGraph: {
    title: "Careers",
    description:
      "Explore career opportunities at Tech Fresco. Discover the benefits of working with us and apply through our easy-to-use application form. Join our team and grow with us!",
    images: "https://techfresco.com/images/meta.png",
  },
};

const Career = () => {
  return (
    <>
      <CareerHero />
      <CareerSecond />
      <CareerBanner />
    </>
  );
};

export default Career;
