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
                      Registered address: Revoluăní 1082/8, Nové Mesto, 110 00
                      Praha 1, Czech Republic
                      <br />
                      <br />
                      Office address: Lomnického 1705/9, 140 00 Praha 4-Nusle,
                      Czech Republic
                    </span>
                  </div>
                </li>
                <li>
                  <Link href="tel:+420910921065">
                    <PhoneIcon />
                    <span>+420 910 921 065</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@techfresco.com">
                    <MailIcon />
                    <span>info@techfresco.com </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <div>
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/service/cloud-services">Cloud services</Link>
                  </li>
                  <li>
                    <Link href="/service/network-security">
                      Network Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/hardware-help">Hardware help</Link>
                  </li>
                  <li>
                    <Link href="/service/cybersecurity">Cybersecurity</Link>
                  </li>
                  <li>
                    <Link href="#">Backup solutions</Link>
                  </li>
                  <li>
                    <Link href="/service/it-consulting">IT consulting</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>&nbsp;</h3>
                <ul>
                  <li>
                    <Link href="/service/tech-support">Tech support</Link>
                  </li>
                  <li>
                    <Link href="/service/digital-transformation">
                      Digital transformation
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/mobile-remote-networking">
                      Mobile and remote networking
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/managed-it-services">
                      Managed IT services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/email-services">Email services</Link>
                  </li>
                  <li>
                    <Link href="/service/technology-training">
                      Technology training
                    </Link>
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
          <p>© {currentYear} Lenas Company s.r.o. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
