"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RequestButton from "@/components/RequestButton";

const HomeApproach = () => {
  return (
    <section className="home-approach">
      <div className="_container">
        <div className="home-approach__body">
          <div className="col-01">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Our Approach
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                We take a systematic approach to understand and enhance your IT
                infrastructure:
              </motion.p>
              <RequestButton className={"red-button"} text={"Get Assistance"} />
            </div>
            <Image
              src="/images/home/approachMob.png"
              width={360}
              height={224}
            />
          </div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/businessIcon.svg" />
              <div>
                <h3>Business and Task Analysis</h3>
                <p>
                  We analyse your business operations and specific tasks to
                  understand your unique needs.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/itIcon.svg" />
              <div>
                <h3>IT Solutions and Infrastructure Inspection</h3>
                <p>
                  We inspect your current IT solutions and infrastructure to
                  identify strengths and weaknesses.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/home/tailoredIcon.svg" />
              <div>
                <h3>Tailored Service Solution</h3>
                <p>
                  We craft a customised service solution to improve your IT
                  systems and accelerate your growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApproach;
