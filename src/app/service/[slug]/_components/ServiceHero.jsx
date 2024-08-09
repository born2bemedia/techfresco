"use client";
import React from "react";

import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/app/(home)/_components/Marquee";

const ServiceHero = ({ id, title, marqueeTexts, serviceSlug }) => {
  console.log(serviceSlug);
  return (
    <section className="service-hero">
      <div className="_container">
        <div className="service-hero__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              SERVICES • {id}
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {title}
            </motion.h1>
            <Marquee texts={marqueeTexts} />
          </div>
          <div className="col-02">
            <Image quality={90} fill src={`/images/services/${serviceSlug}.png`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
