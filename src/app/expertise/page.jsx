import React from "react";
import "@/styles/expertise.scss";
import ExpertiseHero from "./_components/ExpertiseHero";
import WhyOurExpertise from "./_components/WhyOurExpertise";
import ExpertiseSecond from "./_components/ExpertiseSecond";

export const metadata = {
  title: "Our Expertise",
  description:
    "Discover Tech Fresco's expertise and meet our team of IT professionals. Learn how our skills and experience drive innovation and deliver exceptional technology solutions.Discover Tech Fresco's expertise and meet our team of IT professionals. Learn how our skills and experience drive innovation and deliver exceptional technology solutions.",
  openGraph: {
    title: "Our Expertise",
    description:
      "Discover Tech Fresco's expertise and meet our team of IT professionals. Learn how our skills and experience drive innovation and deliver exceptional technology solutions.Discover Tech Fresco's expertise and meet our team of IT professionals. Learn how our skills and experience drive innovation and deliver exceptional technology solutions.",
      images: "https://techfresco.com/images/meta.png",
  },
};

const Expertise = () => {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseSecond />
      <WhyOurExpertise />
    </>
  );
};

export default Expertise;
