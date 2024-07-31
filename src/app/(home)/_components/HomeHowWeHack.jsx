"use client";
import React from "react";
import "@/styles/home/homeHowWeHack.scss";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeHowWeHack = () => {
  return (
    <section className="home-how-we-hack">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How We Hack the Marketing
        </motion.h2>
        <div className="home-how-we-hack__body">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>001</span>
              <h3>Data Collection</h3>
              <p>
                We gather data from all your marketing channels, including
                social media, email, and ad campaigns. This comprehensive data
                collection ensures we capture all relevant information to inform
                our strategy.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>002</span>
              <h3>Data Integration</h3>
              <p>
                Next, we integrate this data into a unified system. Combining
                data from various sources creates a complete picture of your
                marketing efforts, making it easier to analyse and act on.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>003</span>
              <h3>Data Cleaning</h3>
              <p>
                We then clean and prepare the data to eliminate any
                inconsistencies. This step ensures that the data we analyse is
                accurate and reliable, crucial for making informed decisions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>004</span>
              <h3>Insightful Analysis</h3>
              <p>
                We perform detailed analysis with clean data to uncover key
                trends and insights. This analysis reveals what's working in
                your campaigns and what needs adjustment.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>005</span>
              <h3>Strategy Optimization</h3>
              <p>
                We refine and optimise your marketing strategies using the
                insights gained. This process enhances the effectiveness of your
                campaigns and maximise your return on investment.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>006</span>
              <h3>Continuous Monitoring</h3>
              <p>
                We continuously monitor your campaigns in real-time. This
                oversight allows us to make timely adjustments and ensure your
                strategies remain effective and responsive to changes.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>007</span>
              <h3>Detailed Reporting</h3>
              <p>
                Finally, we provide comprehensive reports with actionable
                recommendations. These reports help you understand your
                campaigns' results and confidently plan future strategies.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="button-wrap"
          >
            <Link href="#" className="orange-button">
              <span>Get started</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowWeHack;
