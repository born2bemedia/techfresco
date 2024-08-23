import React from "react";
import "@/styles/service.scss";
import services from "@/lib/services";
import ServiceHero from "./_components/ServiceHero";
import ServiceSolutions from "./_components/ServiceSolutions";
import PricingBanner from "./_components/PricingBanner";
import ServicePlans from "./_components/ServicePlans";
import OrderPopup from "@/components/OrderPopup";

export async function generateMetadata({ params: { slug } }) {
  const serviceName = slug.replaceAll("-", "_");
  const serviceData = services[serviceName];

  return {
    title: serviceData.seo_title,
    description: serviceData.seo_description,
    openGraph: {
      title: serviceData.seo_title,
      description: serviceData.seo_description,
      images: "https://techfresco.com/images/meta.png",
    },
  };
}

const InnerService = ({ params: { slug } }) => {
  const serviceName = slug.replaceAll("-", "_");
  const serviceData = services[serviceName];

  return (
    <>
      <ServiceHero
        id={serviceData.number}
        title={serviceData.title}
        marqueeTexts={serviceData.advantages}
        serviceSlug={serviceName}
      />
      <ServiceSolutions
        categories={serviceData.categories}
        categoriesTitle={serviceData.categoriesTitle}
      />
      <ServicePlans title={serviceData.title} plans={serviceData.plans} />
      <PricingBanner />
      <OrderPopup />
    </>
  );
};

export default InnerService;
