import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import "@/styles/home.scss";
import HomeSolutions from "./_components/HomeSolutions";
import HomeApproach from "./_components/HomeApproach";
import ContactBanner from "./_components/ContactBanner";
import Partners from "./_components/Partners";
import OurInsights from "./_components/OurInsights";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeApproach />
      <ContactBanner />
      <Partners />
      <OurInsights />
    </>
  );
}
