"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const SolutionTab2 = () => {
  return (
    <div className="solution tab2">
      <div>
        <h3>Low Brand Awareness</h3>
        <ul>
          <li>
            <b>Brand Strategy:</b> a cohesive brand strategy that defines your
            unique value proposition and market positioning.
          </li>
          <li>
            <b>Content Marketing:</b> engaging content that tells your brand
            story and resonates with your target audience.
          </li>
          <li>
            <b>Social Media Campaigns:</b> targeted social media campaigns to
            increase brand visibility and engagement.
          </li>
          <li>
            <b>Public Relations:</b> public relations to build positive media
            coverage and enhance brand reputation.
          </li>
        </ul>
      </div>
      <Link href="#" className="orange-button">
        Order solution
      </Link>
    </div>
  );
};

export default SolutionTab2;
