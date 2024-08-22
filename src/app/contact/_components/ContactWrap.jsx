"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import RequestForm from "@/components/RequestForm";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const ContactWrap = () => {
  return (
    <section className="contact-block">
      <div className="_container">
        <div className="contact-block__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              General Inquiries
            </motion.h2>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img src="/images/contact/phone.svg" />
                <div>
                  <h3>Call us:</h3>
                  <Link href="tel:+420 910 921 065">+420 910 921 065</Link>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img src="/images/contact/email.svg" />
                <div>
                  <h3>Email us:</h3>
                  <Link href="mailto:info@techfresco.com">
                    info@techfresco.com
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="full"
              >
                <img src="/images/contact/location.svg" />
                <div>
                  <h3>Visit us:</h3>
                  <span>
                    Lomnického 1705/9, 140 00 Praha 4-Nusle, Czech Republic
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.559680309716!2d14.430278776413239!3d50.057079271519726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9470f567f6a9%3A0x9a3ccd5c80e3d18a!2sLomnick%C3%A9ho%201705%2F9%2C%20140%2000%20Praha%204-Nusle%2C%20Czechia!5e0!3m2!1sen!2sua!4v1724342695991!5m2!1sen!2sua"
                  width="600"
                  height="160"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="full"
              >
                <img src="/images/contact/location.svg" />
                <div>
                  <h3>Official Inquiries:</h3>
                  <span>
                    Revoluăní 1082/8, Nové Mesto, 110 00 Praha 1, Czech Republic
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.834009937702!2d14.425353976415188!3d50.08939457152553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ea87370dbd%3A0x9581770b78e060e9!2zUmV2b2x1xI1uw60gMTA4Mi84LCAxMTAgMDAgTm92w6kgTcSbc3RvLCBDemVjaGlh!5e0!3m2!1sen!2sua!4v1724342778592!5m2!1sen!2sua"
                  width="600"
                  height="160"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
          <div className="col-02">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Assistance Request
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Fill out the form below and submit your message. We'll respond as
              soon as possible.
            </motion.p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWrap;
