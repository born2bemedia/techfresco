"use client";
import React from "react";
import "@/styles/home/homeWhy.scss";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeWhy = () => {
  return (
    <section className="home-why">
      <div className="_container">
        <div className="home-why__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our team of marketing specialists excels in data-driven strategies.
            With deep <br />
            expertise in data analysis, digital marketing, and performance
            optimization, we craft <br />
            effective solutions that deliver real results.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="button-wrap"
          >
            <Link href="#" className="orange-button">
              Meet our experts
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
