"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import RequestButtonJob from "@/components/RequestButtonJob";
import RequestPopupJob from "@/components/RequestPopupJob";
import Link from "next/link";

const CareerBanner = () => {
  return (
    <>
      <section className="career-banner">
        <div className="_container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="career-banner__banner"
          >
            <div>
              <h2>Ready to Join Us?</h2>
              <p>
                If you're excited to make an impact and grow with us, we'd love
                to hear from you.
                <br />
                Take the next step in your career and become a part of the Tech
                Fresco team.
              </p>
            </div>
            <Link className="red-button" href="/join-tech-fresco-team">
              Submit an Application
            </Link>
          </motion.div>
        </div>
      </section>
      <RequestPopupJob />
    </>
  );
};

export default CareerBanner;
