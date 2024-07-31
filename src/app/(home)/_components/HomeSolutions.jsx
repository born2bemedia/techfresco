"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSolutions = () => {
  const sliderRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const divRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleMouseMove = (e, index) => {
    if (isDesktop) {
      const rect = divRefs.current[index].getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseEnter = (index) => {
    if (isDesktop) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setHoveredIndex(null);
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
              {[
                "Cloud Services",
                "Network Security",
                "Hardware Help",
                "Cybersecurity Consulting",
                "Backup Solutions",
                "IT Consulting",
                "Tech Support",
                "Digital Transformation",
                "Mobile and Remote Networking",
                "Managed IT Services",
                "Email Services",
                "Technology Training"
              ].map((title, index) => (
                <div
                  key={index}
                  ref={(el) => (divRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                >
                  <span className="number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>
                    {index === 0 && "Selecting scalable cloud solutions for your business needs."}
                    {index === 1 && "Protecting your network from threats, breaches, occasional and intentional data leaks."}
                    {index === 2 && "Assistance with installation, maintenance, and repair of hardware."}
                    {index === 3 && "Consulting and implementation of security measures to safeguard your data."}
                    {index === 4 && "Selecting and setting reliable data backup and recovery services."}
                    {index === 5 && "Expert advice to optimize your IT strategy, infrastructure and local solutions."}
                    {index === 6 && "Responsive support for all your technical issues."}
                    {index === 7 && "Consulting on modernizing your business with the latest technology."}
                    {index === 8 && "Solutions for seamless remote and mobile connectivity."}
                    {index === 9 && "End-to-end management of your IT infrastructure."}
                    {index === 10 && "Secure and efficient email solutions for your organization."}
                    {index === 11 && "Training programs to upskill your team in technology."}
                  </p>
                  <Link
                    className="red-button"
                    href="#"
                    style={{
                      position: "absolute",
                      left:
                        hoveredIndex === index && isDesktop ? `${mousePos.x - 50}px` : "initial",
                      top:
                        hoveredIndex === index && isDesktop ? `${mousePos.y - 20}px` : "initial",
                    }}
                  >
                    <span>Explore</span>
                    <img src="/images/whiteArrow.svg" />
                  </Link>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
