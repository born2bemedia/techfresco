import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import "@/styles/home.scss";
import HomeSolutions from "./_components/HomeSolutions";
import HomeApproach from "./_components/HomeApproach";
import Partners from "./_components/Partners";
import OurInsights from "./_components/OurInsights";
import ContactBlock from "./_components/ContactBlock";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeApproach />
      <HowItWorks />
      <Partners />
      <OurInsights />
      <ContactBlock />
    </>
  );
}
