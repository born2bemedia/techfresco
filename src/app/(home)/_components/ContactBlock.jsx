"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import RequestForm from "@/components/RequestForm";

const ContactBlock = () => {
  return (
    <section className="contact-block">
      <div className="_container">
        <div className="contact-block__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Need the right team to drive your business growth?
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/contact1.svg" />
              <span>Money-back guarantee</span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/contact2.svg" />
              <span>20+ tech talents</span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/contact3.svg" />
              <span>42 years of cumulative experience</span>
            </motion.div>
          </div>
          <div className="col-02">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Contact Us
            </motion.h2>
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
