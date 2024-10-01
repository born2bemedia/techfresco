"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoneIcon from "@/icons/PhoneIcon";
import MailIcon from "@/icons/MailIcon";
import TikTok from "@/icons/social/TikTok";
import Instagram from "@/icons/social/Instagram";
import Facebook from "@/icons/social/Facebook";
import YouTube from "@/icons/social/YouTube";
import X from "@/icons/social/X";
import RequestButton from "./RequestButton";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [servicesOpened, setServicesOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const servicesOpen = () => {
    setServicesOpened(!servicesOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    setServicesOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header>
        <div className="_container">
          <div className="header-top">
            <div className="top-contacts">
              <Link href="tel:+420910921065">
                <PhoneIcon />
                <span>+420 910 921 065</span>
              </Link>
              <Link href="mailto:info@techfresco.com">
                <MailIcon />
                <span>info@techfresco.com </span>
              </Link>
            </div>
            <div className="soc">
              <Link href="https://www.facebook.com/techfresco/">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/techfresco/">
                <Instagram />
              </Link>
              <Link href="https://x.com/techfresco_com">
                <X />
              </Link>
            </div>
          </div>

          <div className="header-row">
            <Link href="/" className="logo">
              <img src="/images/logo-main.svg" alt="logo" />
            </Link>

            <nav>
              <div>
                <Link
                  href="#"
                  className="with-sub-menu"
                  onClick={() => servicesOpen()}
                >
                  Services
                  <img src="/images/menu-arrow.svg" />
                </Link>
                <div className={`submenu ${servicesOpened ? "opened" : ""}`}>
                  <Link href="/service/cloud-services">Cloud services</Link>
                  <Link href="/service/network-security">Network Security</Link>
                  <Link href="/service/hardware-help">Hardware help</Link>
                  <Link href="/service/cybersecurity">Cybersecurity</Link>
                  <Link href="/service/backup-solutions">Backup solutions</Link>
                  <Link href="/service/it-consulting">IT consulting</Link>
                  <Link href="/service/tech-support">Tech support</Link>
                  <Link href="/service/digital-transformation">
                    Digital transformation
                  </Link>
                  <Link href="/service/mobile-remote-networking">
                    Mobile and remote networking
                  </Link>
                  <Link href="/service/managed-it-services">
                    Managed IT services
                  </Link>
                  <Link href="/service/email-services">Email services</Link>
                  <Link href="/service/technology-training">
                    Technology training
                  </Link>
                </div>
              </div>
              <Link href="/expertise">Expertise</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/career">Career</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <RequestButton className={"bordered-button"} text={"Get Support"} />

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
            <div>
              <Link
                href="#"
                className="with-sub-menu"
                onClick={() => servicesOpen()}
              >
                Services
                <img src="/images/menu-arrow-mob.svg" />
              </Link>
              <div className={`submenu ${servicesOpened ? "opened" : ""}`}>
                <Link href="/service/cloud-services">Cloud services</Link>
                <Link href="/service/network-security">Network Security</Link>
                <Link href="/service/hardware-help">Hardware help</Link>
                <Link href="/service/cybersecurity">Cybersecurity</Link>
                <Link href="#">Backup solutions</Link>
                <Link href="/service/it-consulting">IT consulting</Link>
                <Link href="/service/tech-support">Tech support</Link>
                <Link href="/service/digital-transformation">
                  Digital transformation
                </Link>
                <Link href="/service/mobile-remote-networking">
                  Mobile and remote networking
                </Link>
                <Link href="/service/managed-it-services">
                  Managed IT services
                </Link>
                <Link href="/service/email-services">Email services</Link>
                <Link href="/service/technology-training">
                  Technology training
                </Link>
              </div>
            </div>
            <Link href="/expertise">Expertise</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/career">Career</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <RequestButton className={"bordered-button"} text={"Get Support"} />
          <div className="top-contacts">
            <Link href="tel:+420910921065">
              <PhoneIcon />
              <span>+420 910 921 065</span>
            </Link>
            <Link href="mailto:info@techfresco.com">
              <MailIcon />
              <span>info@techfresco.com </span>
            </Link>
          </div>
          <div className="soc">
            <Link href="https://www.facebook.com/techfresco/">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/techfresco/">
              <Instagram />
            </Link>
            <Link href="https://x.com/techfresco_com">
              <X />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
