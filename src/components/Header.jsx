"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              <img src="/images/logo-main.svg" alt="logo" />
            </Link>

            <nav>
              <Link href="#">Services</Link>
              <Link href="#">Expertise</Link>
              <Link href="#">Insights</Link>
              <Link href="#">Career</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Client Area</Link>
            </nav>

            <Link href="#" className="bordered-button">
              Get Support
            </Link>

            <span onClick={() => menuOpen()} className="menu-btn">
              {!menuOpened ? (
                <img src="/images/menu-buger.svg" alt="menu-buger" />
              ) : (
                <img alt="logo" src="/images/burger-close.svg" />
              )}
            </span>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <Link href="#">Services</Link>
            <Link href="#">Expertise</Link>
            <Link href="#">Insights</Link>
            <Link href="#">Career</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Client Area</Link>
          </nav>
          <Link href="#" className="bordered-button">
            Get Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
