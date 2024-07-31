"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSolutions = () => {
  const sliderRef = useRef(null);
  const SliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="home-solutions">
      <div className="_container">
        <div className="home-solutions__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="solution-top"
          >
            <h2>Our Solutions</h2>
            <div className="arrows">
              <img
                src="/images/home/arrowPrev.svg"
                alt="Previous"
                onClick={handlePrevClick}
              />
              <img
                src="/images/home/arrowNext.svg"
                alt="Next"
                onClick={handleNextClick}
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Slider
              ref={sliderRef}
              {...SliderSettings}
              className="service-slider"
            >
              <div>
                <span className="number">01</span>
                <h3>Cloud Services</h3>
                <p>
                  Selecting scalable cloud solutions for your business needs.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">02</span>
                <h3>Network Security</h3>
                <p>
                  Protecting your network from threats, breaches, occasional and
                  intentional data leaks.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">03</span>
                <h3>Hardware Help</h3>
                <p>
                  Assistance with installation, maintenance, and repair of
                  hardware.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">04</span>
                <h3>Cybersecurity Consulting</h3>
                <p>
                  Consulting and implementation of security measures to
                  safeguard your data.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">05</span>
                <h3>Backup Solutions</h3>
                <p>
                  Selecting and setting reliable data backup and recovery
                  services.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">06</span>
                <h3>IT Consulting</h3>
                <p>
                  Expert advice to optimise your IT strategy, infrastructure and
                  local solutions.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">07</span>
                <h3>Tech Support</h3>
                <p>Responsive support for all your technical issues.</p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">08</span>
                <h3>Digital Transformation</h3>
                <p>
                  Consulting on modernising your business with the latest
                  technology.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">09</span>
                <h3>Mobile and Remote Networking</h3>
                <p>Solutions for seamless remote and mobile connectivity.</p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">10</span>
                <h3>Managed IT Services</h3>
                <p>End-to-end management of your IT infrastructure.</p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">11</span>
                <h3>Email Services</h3>
                <p>
                  Secure and efficient email solutions for your organisation.
                </p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
              <div>
                <span className="number">12</span>
                <h3>Technology Training</h3>
                <p>Training programs to upskill your team in technology.</p>
                <Link className="red-button" href="#">
                  <span>Explore</span>
                  <img src="/images/whiteArrow.svg" />
                </Link>
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
