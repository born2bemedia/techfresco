"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const HomePilot = () => {
  return (
    <section className="home-pilot">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pilot-top"
        >
          <div>
            <h2>Pilot: Custom Cloud & AI Ecosystems</h2>
            <p>
              We develop and implement large-scale cloud CRM systems and custom
              software architectures featuring integrated AI technologies,
              advanced cybersecurity protocols, and automated data backup
              solutions.
            </p>
          </div>
        </motion.div>
        <div className="home-pilot__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="left"
          >
            <h2>Solution includes</h2>
            <div className="list">
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M2 2V29C2 29.2652 2.10536 29.5196 2.29289 29.7071C2.48043 29.8946 2.73478 30 3 30H30"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 14H7.25C6.55964 14 6 14.5596 6 15.25V24.75C6 25.4404 6.55964 26 7.25 26H9.75C10.4404 26 11 25.4404 11 24.75V15.25C11 14.5596 10.4404 14 9.75 14Z"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.75 11H16.25C15.5596 11 15 11.5596 15 12.25V24.75C15 25.4404 15.5596 26 16.25 26H18.75C19.4404 26 20 25.4404 20 24.75V12.25C20 11.5596 19.4404 11 18.75 11Z"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.7275 7H25.2275C24.5371 7 23.9775 7.55964 23.9775 8.25V24.75C23.9775 25.4404 24.5371 26 25.2275 26H27.7275C28.4178 26 28.9775 25.4404 28.9775 24.75V8.25C28.9775 7.55964 28.4178 7 27.7275 7Z"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Custom CRM & Software Development</span>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M12.1427 7.26402C12.94 4.93069 16.164 4.86002 17.1094 7.05202L17.1894 7.26535L18.2654 10.412C18.5119 11.1337 18.9104 11.794 19.4339 12.3486C19.9574 12.9031 20.5938 13.339 21.3 13.6267L21.5894 13.7347L24.736 14.8094C27.0694 15.6067 27.14 18.8307 24.9494 19.776L24.736 19.856L21.5894 20.932C20.8675 21.1784 20.2068 21.5769 19.652 22.1004C19.0973 22.6239 18.6612 23.2603 18.3734 23.9667L18.2654 24.2547L17.1907 27.4027C16.3934 29.736 13.1694 29.8067 12.2254 27.616L12.1427 27.4027L11.068 24.256C10.8216 23.5341 10.4232 22.8735 9.89967 22.3187C9.37616 21.7639 8.73974 21.3279 8.03335 21.04L7.74535 20.932L4.59868 19.8574C2.26402 19.06 2.19335 15.836 4.38535 14.892L4.59868 14.8094L7.74535 13.7347C8.467 13.4881 9.12737 13.0896 9.68192 12.5661C10.2365 12.0426 10.6723 11.4063 10.96 10.7L11.068 10.412L12.1427 7.26402ZM14.6667 8.12535L13.592 11.272C13.2165 12.3724 12.6057 13.3778 11.8021 14.218C10.9984 15.0583 10.0213 15.7133 8.93868 16.1374L8.60535 16.2587L5.45868 17.3334L8.60535 18.408C9.70575 18.7835 10.7111 19.3943 11.5513 20.198C12.3916 21.0016 13.0466 21.9788 13.4707 23.0614L13.592 23.3947L14.6667 26.5414L15.7414 23.3947C16.1168 22.2943 16.7277 21.2889 17.5313 20.4487C18.3349 19.6084 19.3121 18.9535 20.3947 18.5294L20.728 18.4094L23.8747 17.3334L20.728 16.2587C19.6276 15.8832 18.6223 15.2724 17.782 14.4687C16.9418 13.6651 16.2868 12.688 15.8627 11.6054L15.7427 11.272L14.6667 8.12535ZM25.3334 2.66669C25.5828 2.66669 25.8272 2.73666 26.0389 2.86865C26.2505 3.00064 26.4209 3.18936 26.5307 3.41335L26.5947 3.56935L27.0614 4.93735L28.4307 5.40402C28.6807 5.48895 28.8998 5.64617 29.0603 5.85577C29.2208 6.06537 29.3155 6.31791 29.3324 6.58138C29.3492 6.84485 29.2875 7.1074 29.155 7.33574C29.0225 7.56408 28.8251 7.74794 28.588 7.86402L28.4307 7.92802L27.0627 8.39469L26.596 9.76402C26.5109 10.0139 26.3536 10.233 26.1439 10.3933C25.9342 10.5537 25.6817 10.6483 25.4182 10.665C25.1547 10.6817 24.8923 10.6198 24.664 10.4872C24.4357 10.3546 24.252 10.1572 24.136 9.92002L24.072 9.76402L23.6054 8.39602L22.236 7.92935C21.986 7.84443 21.7669 7.6872 21.6064 7.4776C21.4459 7.268 21.3512 7.01546 21.3343 6.75199C21.3175 6.48852 21.3792 6.22598 21.5117 5.99764C21.6442 5.7693 21.8416 5.58543 22.0787 5.46935L22.236 5.40535L23.604 4.93869L24.0707 3.56935C24.1606 3.30592 24.3307 3.07723 24.5571 2.91535C24.7836 2.75347 25.055 2.66652 25.3334 2.66669Z"
                    fill="#EE342A"
                  />
                </svg>
                <span>AI Feature Integration</span>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4 5.50376L16.0058 2L28 5.50376V12.6891C28 20.2415 23.1668 26.9463 16.0018 29.3337C8.83472 26.9463 4 20.24 4 12.6858V5.50376Z"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14.6666L14.6667 19.3333L22.6667 11.3333"
                    stroke="#EE342A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>High-Level Security</span>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M11.399 7.008C10.439 8.182 10 9.7 10 11C10 11.2652 9.89464 11.5196 9.70711 11.7071C9.51957 11.8946 9.26522 12 9 12C5.376 12 4 14.528 4 16C4 16.855 4.216 17.835 4.878 18.592C5.515 19.32 6.708 20 9 20H13.852C13.667 20.64 13.552 21.31 13.514 22H9C6.293 22 4.485 21.18 3.372 19.909C2.284 18.665 2 17.145 2 16C2 13.644 3.93 10.47 8.057 10.047C8.229 8.591 8.797 7.031 9.851 5.742C11.166 4.134 13.201 3 16 3C17.7 3 19.682 3.562 21.258 4.851C22.679 6.014 23.731 7.738 23.955 10.057C25.333 10.222 26.669 10.74 27.736 11.565C29.063 12.589 30 14.114 30 16C30.0007 16.464 29.9593 16.9113 29.876 17.342C29.3379 16.5725 28.6826 15.8919 27.934 15.325C27.761 14.457 27.253 13.718 26.514 13.148C25.577 12.424 24.296 12 23 12C22.7348 12 22.4804 11.8946 22.2929 11.7071C22.1054 11.5196 22 11.2652 22 11C22 8.8 21.134 7.334 19.992 6.399C18.818 5.439 17.3 5 16 5C13.8 5 12.334 5.866 11.399 7.008ZM30 22.5C30 20.5109 29.2098 18.6032 27.8033 17.1967C26.3968 15.7902 24.4891 15 22.5 15C20.5109 15 18.6032 15.7902 17.1967 17.1967C15.7902 18.6032 15 20.5109 15 22.5C15 24.4891 15.7902 26.3968 17.1967 27.8033C18.6032 29.2098 20.5109 30 22.5 30C24.4891 30 26.3968 29.2098 27.8033 27.8033C29.2098 26.3968 30 24.4891 30 22.5ZM22.22 17.22C22.3606 17.0795 22.5512 17.0007 22.75 17.0007C22.9488 17.0007 23.1394 17.0795 23.28 17.22L27.28 21.22C27.3537 21.2887 27.4128 21.3715 27.4538 21.4635C27.4948 21.5555 27.5168 21.6548 27.5186 21.7555C27.5204 21.8562 27.5018 21.9562 27.4641 22.0496C27.4264 22.143 27.3703 22.2278 27.299 22.299C27.2278 22.3703 27.143 22.4264 27.0496 22.4641C26.9562 22.5018 26.8562 22.5204 26.7555 22.5186C26.6548 22.5168 26.5555 22.4948 26.4635 22.4538C26.3715 22.4128 26.2887 22.3537 26.22 22.28L23.5 19.56V27.25C23.5 27.4489 23.421 27.6397 23.2803 27.7803C23.1397 27.921 22.9489 28 22.75 28C22.5511 28 22.3603 27.921 22.2197 27.7803C22.079 27.6397 22 27.4489 22 27.25V19.56L19.28 22.28C19.2113 22.3537 19.1285 22.4128 19.0365 22.4538C18.9445 22.4948 18.8452 22.5168 18.7445 22.5186C18.6438 22.5204 18.5438 22.5018 18.4504 22.4641C18.357 22.4264 18.2722 22.3703 18.201 22.299C18.1297 22.2278 18.0736 22.143 18.0359 22.0496C17.9982 21.9562 17.9796 21.8562 17.9814 21.7555C17.9832 21.6548 18.0052 21.5555 18.0462 21.4635C18.0872 21.3715 18.1463 21.2887 18.22 21.22L22.22 17.22Z"
                    fill="#EE342A"
                  />
                </svg>
                <span>Regular Backups</span>
              </div>
            </div>
          </motion.div>
          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="right-top"
            >
              <h2>Solution includes</h2>
              <p>
                We are accepting only 2 projects due to the scale of development
                and our limited capacity. This ensures we are completely
                immersed in your business to deliver a top-class CRM fully
                adapted to your needs. If you are interested, please contact us.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="right-bottom"
            >
              <h2>Investment</h2>
              <div className="row">
                <div className="col">
                  <h3>Advance Structure</h3>
                  <p>
                    Development is initiated via a structured advance payment
                    model to secure dedicated engineering resources.
                  </p>
                </div>
                <div className="divider"></div>
                <div className="col">
                  <h3>Project Valuation</h3>
                  <p>
                    Starting from €1M (Subject to scope and technical
                    requirements).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePilot;
