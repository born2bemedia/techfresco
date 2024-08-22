"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Image from "next/image";
import RequestButton from "@/components/RequestButton";

const WhyOurExpertise = () => {
  return (
    <section className="why-expertise">
      <div className="_container">
        <div className="why-expertise__body">
          <div className="col-01">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="head"
            >
              <h2>Why Our Expertise Matters</h2>
              <p>
                Our specialised knowledge in these critical IT areas allows us
                to provide <br />
                solutions that address immediate needs and drive long-term
                success. <br />
                We focus on delivering impactful results that support your
                strategic <br />
                objectives and enhance overall business performance.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="image"
            ></motion.div>
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">35%</span>
              <div>
                <h3>Increase in Operational Efficiency</h3>
                <p>
                  Streamlined processes and automated tasks boost your business
                  We design tailored IT strategies and integrate advanced
                  technologies that streamline operations resulting in a 35%
                  efficiency boost.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">-60%</span>
              <div>
                <h3>Reduction in Downtime</h3>
                <p>
                  By deploying cutting-edge cybersecurity measures and proactive
                  risk management, we reduce system downtime by up to 60%.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">2.5X</span>
              <div>
                <h3>Faster Time-to-Market</h3>
                <p>
                  By deploying cutting-edge cybersecurity measures and proactive
                  risk management, we reduce system downtime by up to 60%.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">+40%</span>
              <div>
                <h3>Improvement in Data Utilisation</h3>
                <p>
                  We implement advanced data management and analytics that
                  transform your data into actionable insights and achieve a 40%
                  improvement in data utilisation
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">-45%</span>
              <div>
                <h3>IT Costs</h3>
                <p>
                  Through strategic IT infrastructure management and cloud
                  solutions, we help reduce IT costs by up to 45%.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="why-expertise__banner"
        >
          <div>
            <h2>Discover the Difference</h2>
            <p>
              Contact us to see how our expertise can help you tackle complex IT
              challenges <br />
              and achieve your business goals.
            </p>
          </div>
          <RequestButton className={"red-button"} text={"Get Assistance"} />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOurExpertise;
