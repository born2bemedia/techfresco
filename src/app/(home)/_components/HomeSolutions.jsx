"use client";
import "@/styles/home/homeSolutions.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import SolutionTab1 from "./solutionsTabs/SolutionTab1";
import SolutionTab2 from "./solutionsTabs/SolutionTab2";
import SolutionTab3 from "./solutionsTabs/SolutionTab3";
import SolutionTab4 from "./solutionsTabs/SolutionTab4";
import SolutionTab5 from "./solutionsTabs/SolutionTab5";
import SolutionTab6 from "./solutionsTabs/SolutionTab6";

const HomeSolutions = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="home-solutions">
      <div className="_container">
        <div className="home-solutions__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Challenges,
            <span>Our Solutions</span>
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <div>
                <button
                  onClick={() => tabChange("tab1")}
                  className={`${activeTab == "tab1" ? "active" : ""}`}
                >
                  High Advertising Costs with Low Returns
                </button>
                <button
                  onClick={() => tabChange("tab2")}
                  className={`${activeTab == "tab2" ? "active" : ""}`}
                >
                  Low Brand Awareness
                </button>
                <button
                  onClick={() => tabChange("tab3")}
                  className={`${activeTab == "tab3" ? "active" : ""}`}
                >
                  Insufficient Website Traffic
                </button>
                <button
                  onClick={() => tabChange("tab4")}
                  className={`${activeTab == "tab4" ? "active" : ""}`}
                >
                  Poor Search Engine Visibility
                </button>
                <button
                  onClick={() => tabChange("tab5")}
                  className={`${activeTab == "tab5" ? "active" : ""}`}
                >
                  Low Lead Generation
                </button>
                <button
                  onClick={() => tabChange("tab6")}
                  className={`${activeTab == "tab6" ? "active" : ""}`}
                >
                  Low Lead to Customer Conversion
                </button>
              </div>
              <Link href="#" className="bordered-button">
                <span>Explore all solutions</span>
                <ButtonArrow />
              </Link>
            </div>

            <div className="tabs-content">
              {activeTab == "tab1" && <SolutionTab1 />}
              {activeTab == "tab2" && <SolutionTab2 />}
              {activeTab == "tab3" && <SolutionTab3 />}
              {activeTab == "tab4" && <SolutionTab4 />}
              {activeTab == "tab5" && <SolutionTab5 />}
              {activeTab == "tab6" && <SolutionTab6 />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
