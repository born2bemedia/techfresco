"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const SolutionTab1 = () => {
  return (
    <div className="solution tab1">
      <div>
        <h3>High Advertising Costs with Low Returns</h3>
        <ul>
          <li>
            <b>Performance Analysis:</b> thorough audits of existing advertising
            campaigns to identify inefficiencies.
          </li>
          <li>
            <b>Targeted Advertising:</b> data-driven targeting to reach the most
            relevant audience segments.
          </li>
          <li>
            <b>Budget Allocation:</b> budget allocation across various channels
            to ensure maximum ROI.
          </li>
          <li>
            <b>A/B Testing:</b> A/B testing for ad creatives, copy, and landing
            pages to determine the most effective elements.
          </li>
        </ul>
      </div>
      <Link href="#" className="orange-button">
        Order solution
      </Link>
    </div>
  );
};

export default SolutionTab1;
