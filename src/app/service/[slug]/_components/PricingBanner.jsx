"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

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
            For a detailed quote or customised pricing, please contact us
            directly.
          </h2>
          <Link href="#" className="red-button">
            Get Assistance
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBanner;
