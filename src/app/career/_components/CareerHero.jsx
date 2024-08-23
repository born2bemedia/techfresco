"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CareerHero = () => {
  return (
    <section className="career-hero">
      <div className="_container">
        <div className="career-hero__body">
          <div className="col-01">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Join Us and <br/>Shape the Future
            </motion.h1>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Tech Fresco, anything is possible. Become a part of our team and <br/>
              drive innovation at the forefront of technology. Contribute to <br/>
              transformative projects that deliver real value to our clients and <br/>
              help create a smarter, more connected world.
            </motion.h3>
          </div>
          <div className="col-02">
            <Image fill src="/images/career/careerHero.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
