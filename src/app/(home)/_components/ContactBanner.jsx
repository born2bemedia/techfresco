"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const ContactBanner = () => {
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
          <h2>Want the same results for your business? Contact us now!</h2>
          <Link href="#" className="red-button">
            Get Assistance
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
