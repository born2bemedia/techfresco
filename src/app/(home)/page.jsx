import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import "@/styles/home.scss";
import HomeSolutions from "./_components/HomeSolutions";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
    </>
  );
}
