import React from "react";
import "@/styles/service.scss";
import services from "@/lib/services";
import ServiceHero from "./_components/ServiceHero";
import ServiceSolutions from "./_components/ServiceSolutions";
import PricingBanner from "./_components/PricingBanner";
import ServicePlans from "./_components/ServicePlans";

const InnerService = ({ params: { slug } }) => {
  const serviceName = slug.replace("-", "_");
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
    </>
  );
};

export default InnerService;
