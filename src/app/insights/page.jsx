import React from "react";
import "@/styles/insights.scss";
import InsightsHero from "./_components/InsightsHero";
import InsightsLoop from "./_components/InsightsLoop";

export const metadata = {
  title: "Insights",
  description:
    "Stay updated with the latest news and articles from Tech Fresco. Explore our Insights page for valuable information and expert perspectives on technology trends and industry developments.",
  openGraph: {
    title: "Insights",
    description:
      "Stay updated with the latest news and articles from Tech Fresco. Explore our Insights page for valuable information and expert perspectives on technology trends and industry developments.",
      images: "https://techfresco.com/images/meta.png",
  },
};

const Insights = () => {
  return (
    <>
      <InsightsHero />
      <InsightsLoop />
    </>
  );
};

export default Insights;
