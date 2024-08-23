"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RequestButton from "@/components/RequestButton";
import Marquee from "@/app/(home)/_components/Marquee";

const InsightsHero = () => {
  const marqueeTexts = [
    "Trends",
    "Analysis",
    "Updates",
    "Trends",
    "Analysis",
    "Updates",
    "Trends",
    "Analysis",
    "Updates",
    "Trends",
    "Analysis",
    "Updates",
  ];

  return (
    <section className="insights-hero">
      <div className="_container">
        <div className="insights-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Market Insights <br />
              and News
            </motion.h1>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Welcome to our news section, which highlights top trends, reveals research <br />
              findings, and provides the latest updates on industry developments.
            </motion.h3>
            <Marquee texts={marqueeTexts} />
          </div>
          <div className="col-02">
            <Image fill src="/images/insights/insightsHero.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;