"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="_container">
        <div className="contact-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Contact Tech Fresco
            </motion.h1>
          </div>
          <div className="col-02">
            <Image fill src="/images/default.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
