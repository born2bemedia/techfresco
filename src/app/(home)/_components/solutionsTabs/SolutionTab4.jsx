"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const SolutionTab4 = () => {
  return (
    <div className="solution tab4">
      <div>
        <h3>Poor Search Engine Visibility</h3>
        <ul>
          <li>
            <b>Technical SEO Audit:</b> a thorough audit to identify and fix
            technical issues affecting search visibility.
          </li>
          <li>
            <b>On-Page SEO:</b> optimisation of every page to rank higher and
            earn more relevant traffic.
          </li>
          <li>
            <b>Link Building:</b> a robust backlink strategy to increase domain
            authority and search rankings.
          </li>
          <li>
            <b>Local SEO:</b> optimisation of your online presence to attract
            local customers through local search strategies.
          </li>
        </ul>
      </div>
      <Link href="#" className="orange-button">
        Order solution
      </Link>
    </div>
  );
};

export default SolutionTab4;
