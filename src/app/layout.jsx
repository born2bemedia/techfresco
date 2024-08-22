import { Outfit } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { PopupsProvider } from "@/context/PopupsContext";
import RequestPopup from "@/components/RequestPopup";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Leading IT Services & Consulting | Tech Fresco",
    template: "%s",
  },
  description:
    "Explore expert IT services and consulting that help businesses drive growth, enhance security, and achieve digital transformation. Discover tailored solutions for your business IT needs.",
  openGraph: {
    title: {
      default:
        "Leading IT Services & Consulting | Tech Fresco",
      template: "%s",
    },
    description:
      "Explore expert IT services and consulting that help businesses drive growth, enhance security, and achieve digital transformation. Discover tailored solutions for your business IT needs.",
    images: "https://techfresco.com/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GoogleAnalytics gaId="G-61E1Q9SSHK" />
        <PopupsProvider>
          <Preloader />
          <Header />
          <main className="site">{children}</main>
          <Footer />
          <RequestPopup />
        </PopupsProvider>
      </body>
    </html>
  );
}
