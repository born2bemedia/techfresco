"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./Marquee";

const HowItWorks = () => {
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
    <section className="how-it-works">
      <div className="_container">
        <div className="how-it-works__top">
          <div className="left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              See how our IT services drive your business <br />
              growth with proven results:
            </motion.p>
          </div>
          <div className="right">
            <Image src="/images/home/howItWorks.png" width={904} height={186} />
          </div>
        </div>
        <div className="how-it-works__body">
          <Marquee texts={marqueeTexts} />
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">30%</span>
              <h3>Increase in Efficiency</h3>
              <p>
                Streamlined processes and automated tasks boost your business
                productivity by up to 30%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">50%</span>
              <h3>Reduction in Downtime</h3>
              <p>
                Improved network security and robust backup solutions reduce
                system downtime by half.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">20%</span>
              <h3>Cost Savings</h3>
              <p>
                Our tailored IT solutions and managed services cut your
                operational costs by 20%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">3x</span>
              <h3>Faster Issue Resolution</h3>
              <p>
                Our tech support resolves issues three times faster, minimising
                disruptions. Connect it now!
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">40%</span>
              <h3>Boost in Data Security</h3>
              <p>
                We apply advanced cybersecurity measures to increase data
                protection by 40%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="value">25%</span>
              <h3>Improved Customer Satisfaction</h3>
              <p>
                Enhanced IT infrastructure ensures a 25% improvement in customer
                service and satisfaction.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="how-it-works__banner"
        >
          <h2>Want the same results for your business? Contact us now!</h2>
          <Link href="#" className="red-button">
            Get Assistance
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
