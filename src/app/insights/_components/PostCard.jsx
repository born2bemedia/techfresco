"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const PostCard = ({ post, index }) => {
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
    <>
      <Link
        href={`/insights/${post.slug}`}
        ref={(el) => (divRefs.current[index] = el)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => handleMouseMove(e, index)}
        className="post"
      >
        <img src={post.thumbnail} />
        <span>{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span
          className="red-button"
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
          <span>Read</span>
          <img src="/images/whiteArrow.svg" />
        </span>
      </Link>
    </>
  );
};

export default PostCard;
