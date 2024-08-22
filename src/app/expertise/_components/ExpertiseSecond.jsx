"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RequestButton from "@/components/RequestButton";

const ExpertiseSecond = () => {
  return (
    <section className="expertise-second">
      <div className="_container">
        <div className="row">
          <div className="col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/expertise/icon1.svg" />
              <div>
                <h3>Strategic IT Leadership</h3>
                <p>
                  We excel in guiding businesses through comprehensive IT
                  strategy development and implementation. Our approach ensures
                  that technology decisions align with your business objectives,
                  enabling long-term success.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3>How It Helps:</h3>
                <p>
                  Transforms technology investments into a strategic advantage,
                  optimising resource allocation and supporting overall business
                  growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/expertise/icon2.svg" />
              <div>
                <h3>Advanced Cybersecurity and Risk Management</h3>
                <p>
                  Our team specialises in creating and maintaining robust
                  security frameworks that protect against various threats. We
                  ensure your data and systems are secure and compliant with
                  industry regulations.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3>How It Helps:</h3>
                <p>
                  Safeguards your business from potential cyber threats, reduces
                  vulnerabilities, and maintains compliance, providing peace of
                  mind and operational stability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/expertise/icon3.svg" />
              <div>
                <h3>Cloud and Infrastructure Optimization</h3>
                <p>
                  We are adept at designing and managing high-performance cloud
                  and infrastructure solutions that drive efficiency and
                  scalability. Our expertise ensures that your IT environment is
                  both flexible and cost-effective.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3>How It Helps:</h3>
                <p>
                  Enhances operational agility and performance, reduces costs,
                  and supports growth by providing scalable and optimised IT
                  environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/expertise/icon4.svg" />
              <div>
                <h3>Data Strategy and Analytics</h3>
                <p>
                  We develop and execute effective data strategies and analytics
                  frameworks. Our expertise helps manage data effectively and
                  derive actionable insights to drive business decisions.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3>How It Helps:</h3>
                <p>
                   Improves data quality and accessibility, enabling better
                  decision-making and fostering a data-driven culture within
                  your organisation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSecond;
