"use client";
import React from "react";
import "@/styles/home/homeTools.scss";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import PartnersSlider from "./PartnersSlider";

const firstLogosRow = [
  '/images/home/logos/logo1.png',
  '/images/home/logos/logo2.png',
  '/images/home/logos/logo3.png',
  '/images/home/logos/logo4.png',
  '/images/home/logos/logo5.png',
  '/images/home/logos/logo6.png',
  '/images/home/logos/logo7.png',
];

const secondLogosRow = [
  '/images/home/logos/logo8.png',
  '/images/home/logos/logo9.png',
  '/images/home/logos/logo10.png',
  '/images/home/logos/logo11.png',
  '/images/home/logos/logo12.png',
  '/images/home/logos/logo13.png',
  '/images/home/logos/logo14.png',
];

const HomeTools = () => {
  return (
    <section className="home-tools">
      <div className="_container">
        <div className="home-tools__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Tools We Use
          </motion.h2>

          <PartnersSlider images={firstLogosRow} rtlDirection={false} />

          <PartnersSlider images={secondLogosRow} rtlDirection={true} />

        </div>
      </div>
    </section>
  );
};

export default HomeTools;
