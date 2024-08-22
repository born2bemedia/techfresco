import React from "react";
import "@/styles/expertise.scss";
import ExpertiseHero from "./_components/ExpertiseHero";
import WhyOurExpertise from "./_components/WhyOurExpertise";
import ExpertiseSecond from "./_components/ExpertiseSecond";

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
