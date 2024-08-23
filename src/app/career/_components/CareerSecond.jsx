"use client";
import React from "react";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";

const CareerSecond = () => {
  return (
    <section className="career-second">
      <div className="_container">
        <div className="career-second__body">
          <div className="col-01">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Tech Fresco, we value impact over hours. You're not tied to
              specific working times or a required number of hours. We give you
              the freedom to deliver quality results on your own terms.
            </motion.p>
          </div>
          <div className="col-02">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                We Develop Talents
              </motion.h2>
              <div className="row">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">01</span>
                  <h3>Continuous Learning</h3>
                  <p>
                    We invest in your professional development by offering a
                    variety of learning opportunities. From specialised training
                    programs to certifications, we ensure our team members stay
                    at the cutting edge of industry advancements and
                    technologies.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">02</span>
                  <h3>Structured Guidance</h3>
                  <p>
                    We provide clear and comprehensive instructions for our core
                    processes, ensuring every team member understands the
                    standards and expectations. This structured approach allows
                    you to contribute to projects and grow confidently within
                    your role.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">03</span>
                  <h3>Mentorship and Support</h3>
                  <p>
                    Our mentorship program pairs you with experienced
                    professionals who guide you through your career journey at
                    Tech Fresco. Whether you seek advice on a specific project
                    or long-term career goals, our mentors support your growth
                    and success.
                  </p>
                </motion.div>
              </div>
            </div>
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                We Support Talents
              </motion.h2>
              <div className="row">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">01</span>
                  <h3>Flexible Work Schedule</h3>
                  <p>
                    We understand that work-life balance is crucial. Our
                    flexible work schedule allows you to manage your time
                    effectively, ensuring you can meet professional and personal
                    commitments without compromise.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">02</span>
                  <h3>Equipped for Success</h3>
                  <p>
                    We provide all the necessary tools and resources to help you
                    excel in your role. From cutting-edge technology to
                    dedicated workspaces, we ensure you have everything you need
                    to perform at your best.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <span className="number">03</span>
                  <h3>Wellness and Well-Being</h3>
                  <p>
                    We value your well-being. We offer wellness programs and
                    initiatives that support your physical and mental health,
                    helping you stay energised, focused, and ready to tackle new
                    challenges.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSecond;
