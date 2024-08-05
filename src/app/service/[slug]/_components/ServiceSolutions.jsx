"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePopup } from "@/context/PopupsContext";

const ServiceSolutions = ({ categories, categoriesTitle }) => {
  const sliderRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const divRefs = useRef([]);
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = (service) => {
    setServiceValue(service);
    setOrderPopupDisplay(true);
  };

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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
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
    <section className="service-solutions">
      <div className="_container">
        <div className="service-solutions__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="solution-top"
          >
            <h2>{categoriesTitle}</h2>
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
          >
            <Slider
              ref={sliderRef}
              {...SliderSettings}
              className="service-slider"
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => (divRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                >
                  <span className="number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <button
                    onClick={() => orderPopupOpen(category.title)}
                    className="red-button"
                    href="#"
                    style={{
                      position: "absolute",
                      left:
                        hoveredIndex === index && isDesktop
                          ? `${mousePos.x - 50}px`
                          : "initial",
                      top:
                        hoveredIndex === index && isDesktop
                          ? `${mousePos.y - 20}px`
                          : "initial",
                    }}
                  >
                    <span>Order</span>
                    <img src="/images/whiteArrow.svg" />
                  </button>
                </div>
              ))}
            </Slider>
            <div className="arrows-bottom">
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
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutions;
