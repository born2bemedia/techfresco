"use client";
import "@/styles/home/homeRecentAnalytics.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeRecentAnalytics = () => {
  return (
    <section className="home-recent">
      <div className="_container">
        <div className="home-recent__body">
          <div className="left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Recent Analytics from the Next Wave Ad Team
            </motion.h2>
            <Link href="#" className="bordered-button">
              <span>Explore all solutions</span>
              <ButtonArrow />
            </Link>
          </div>

          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="article-top">
                <Link
                  href="#"
                  className="thumb"
                  style={{ backgroundImage: "url(/images/home/thumb.png)" }}
                ></Link>
                <h3>Heading</h3>
                <h2>Article 1</h2>
                <p>Preview</p>
              </div>
              <Link href="#" className="orange-button">
                Read
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="article-top">
                <Link
                  href="#"
                  className="thumb"
                  style={{ backgroundImage: "url(/images/home/thumb.png)" }}
                ></Link>
                <h3>Heading</h3>
                <h2>Article 1</h2>
                <p>Preview</p>
              </div>
              <Link href="#" className="orange-button">
                Read
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecentAnalytics;
