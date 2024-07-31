"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const SolutionTab6 = () => {
  return (
    <div className="solution tab6">
      <div>
        <h3>Low Lead to Customer Conversion</h3>
        <ul>
          <li>
            <b>Sales Funnel Analysis:</b> analysis and optimisation of each
            stage of the sales funnel to improve conversions.
          </li>
          <li>
            <b>Personalized Marketing:</b> personalised marketing strategies to
            address specific customer needs and pain points.
          </li>
          <li>
            <b>Retargeting Campaigns:</b> retargeting ads to re-engage visitors
            who have shown interest but haven't converted yet.
          </li>
          <li>
            <b>A/B Testing:</b> Continuous tests and refinement of marketing
            messages, calls-to-action, and landing pages to maximise conversion
            rates.
          </li>
        </ul>
      </div>
      <Link href="#" className="orange-button">
        Order solution
      </Link>
    </div>
  );
};

export default SolutionTab6;
