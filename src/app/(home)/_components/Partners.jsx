"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const sliderRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const divRefs = useRef([]);

  const logos = [
    "/images/home/logos/logo1.png",
    "/images/home/logos/logo2.png",
    "/images/home/logos/logo3.png",
    "/images/home/logos/logo4.png",
    "/images/home/logos/logo5.png",
    "/images/home/logos/logo6.png",
    "/images/home/logos/logo7.png",
    "/images/home/logos/logo8.png",
    "/images/home/logos/logo9.png",
    "/images/home/logos/logo10.png",
    "/images/home/logos/logo11.png",
    "/images/home/logos/logo12.png",
  ];

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
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20%",
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
    <section className="home-solutions partners">
      <div className="_container">
        <div className="home-solutions__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="solution-top"
          >
            <div>
              <h2>Our Partners</h2>
              <p>We can not do it alone. Our partners help us deliver the best service to you.</p>
            </div>
            <div className="arrows">
              <img
                src="/images/home/arrowPrev.svg"
                alt="Previous"
                onClick={handlePrevClick}
                style={{ cursor: "pointer" }}
              />
              <img
                src="/images/home/arrowNext.svg"
                alt="Next"
                onClick={handleNextClick}
                style={{ cursor: "pointer" }}
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="partners"
          >
            <Slider
              ref={sliderRef}
              {...SliderSettings}
              className="service-slider "
            >
              {logos.map((logo, index) => (
                <img key={index} src={logo} />
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
