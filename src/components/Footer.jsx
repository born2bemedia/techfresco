import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import TikTok from "@/icons/social/TikTok";
import X from "@/icons/social/X";
import YouTube from "@/icons/social/YouTube";
import Linkedin from "@/icons/social/Linkedin";
import LocationIcon from "@/icons/LocationIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import MailIcon from "@/icons/MailIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-wrap">
        <div className="_container">
          <div className="footer-row">
            <div className="left">
              <div className="logo">
                <Link href="/">
                  <img src="/images/foot-logo.svg" />
                </Link>
              </div>
              <ul>
                <li>
                  <div>
                    <LocationIcon />
                    <span>
                      Registered address
                      <br />
                      Office address
                    </span>
                  </div>
                </li>
                <li>
                  <Link href="#">
                    <PhoneIcon />
                    <span>Phone</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <MailIcon />
                    <span>Email</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <div>
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="#">Cloud services</Link>
                  </li>
                  <li>
                    <Link href="#">Network Security</Link>
                  </li>
                  <li>
                    <Link href="#">Hardware help</Link>
                  </li>
                  <li>
                    <Link href="#">Cybersecurity</Link>
                  </li>
                  <li>
                    <Link href="#">Backup solutions</Link>
                  </li>
                  <li>
                    <Link href="#">IT consulting</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>&nbsp;</h3>
                <ul>
                  <li>
                    <Link href="#">Tech support</Link>
                  </li>
                  <li>
                    <Link href="#">Digital transformation</Link>
                  </li>
                  <li>
                    <Link href="#">Mobile and remote networking</Link>
                  </li>
                  <li>
                    <Link href="#">Managed IT services</Link>
                  </li>
                  <li>
                    <Link href="#">Email services</Link>
                  </li>
                  <li>
                    <Link href="#">Technology training</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link href="#">Expertise</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Insights</Link>
                  </li>
                  <li>
                    <Link href="#">Client Area</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Get Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <div className="_container">
          <ul>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Cookie Policy</Link>
            </li>
            <li>
              <Link href="#">Refund Policy</Link>
            </li>
          </ul>
          <p>© {currentYear} Lenas Company s.r.o. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
