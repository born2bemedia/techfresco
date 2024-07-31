"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import BlackArrowIcon from "@/icons/blackArrowIcon";

const ServicePlans = ({ title, plans }) => {
  const getImageName = (planName) => {
    return planName.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <section className="service-plans">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {title} Package Solutions
        </motion.h2>
        <div className="service-plans__body">
          {plans.map((plan, index) => {
            const imageName = getImageName(plan.planName);
            return (
              <div key={index}>
                <div className="plan-top">
                  <div className="icons">
                    <img
                      src={`/images/services/${imageName}.svg`}
                      alt={plan.planName}
                    />
                  </div>
                  <h4>{plan.planName}</h4>
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    ))}
                  </ul>
                </div>
                <div className="plan-bottom">
                  <p dangerouslySetInnerHTML={{ __html: plan.price }} />
                  <button className="bordered-button">
                    <span>Order</span>
                    <BlackArrowIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
