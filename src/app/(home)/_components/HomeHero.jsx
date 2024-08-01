"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./Marquee";


const HomeHero = () => {

  const marqueeTexts = [
    "IT",
    "Consulting",
    "Support",
    "IT",
    "Consulting",
    "Support",
    "IT",
    "Consulting",
    "Support",
    "IT",
    "Consulting",
    "Support",
  ];

  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We are Tech Fresco.
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We solve complex <br />
              growth challenges and <br />
              deliver reliable solutions.
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              <Link href="#" className="black-button">
                Get Assistance
              </Link>
              <Link href="#" className="bordered-button red">
                Explore Services
              </Link>
            </motion.div>
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

export default HomeHero;
