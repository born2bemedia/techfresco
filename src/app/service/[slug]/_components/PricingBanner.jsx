"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import RequestButton from "@/components/RequestButton";

const PricingBanner = () => {
  return (
    <section className="pricing-banner">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pricing-banner__body"
        >
          <h2>
            For a detailed quote or customised pricing, <br />
            please contact us directly.
          </h2>
          <RequestButton className={"red-button"} text={"Get Assistance"} />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBanner;
