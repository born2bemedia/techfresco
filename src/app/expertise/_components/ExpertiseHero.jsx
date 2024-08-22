"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RequestButton from "@/components/RequestButton";
import Marquee from "@/app/(home)/_components/Marquee";

const ExpertiseHero = () => {
  const marqueeTexts = [
    "Skills",
    "People",
    "Results",
    "Skills",
    "People",
    "Results",
    "Skills",
    "People",
    "Results",
    "Skills",
    "People",
    "Results",
  ];

  return (
    <section className="expertise-hero">
      <div className="_container">
        <div className="expertise-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Your One-Stop Partner <br />
              for All IT Needs
            </motion.h1>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              When it comes to business IT needs, expertise and knowledge are{" "}
              <br />
              the only factors that truly matter, and we bring both in
              abundance.
            </motion.h3>
            <Marquee texts={marqueeTexts} />
          </div>
          <div className="col-02">
            <Image fill src="/images/home/homeHero.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
