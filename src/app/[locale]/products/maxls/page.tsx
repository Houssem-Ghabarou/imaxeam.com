import HeroSection from "@/components/products/HeroSection";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductHighlight from "@/components/products/ProductHighlight";
import GetInTouch from "@/components/shared-components/getInTouch";
import OurLocations from "@/components/shared-components/getInTouch/outLocations";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import React from "react";
// -mb-25 -mt-[100px] maxapps

const wordsToHighlight = ["MAXIMO", "PROVEN", "ADD-ONS", "SOLUTIONS"];
const data = [
  {
    title: "Proven",
    description:
      "MAXLS has been on the market since 2012. It is trusted by numerous companies that have been using it since day one and continue to expand usage of it.",
    underline: true,
  },
  {
    title: "Reliable",
    description:
      "MAXLS ensures data integrity and reliability, making it a trusted tool for businesses worldwide.",
    underline: true,
  },
  {
    title: "Efficient",
    description:
      "MAXLS streamlines data loading processes, saving time and reducing errors.",
    underline: true,
  },
  {
    title: "Scalable",
    description:
      "MAXLS adapts to the growing needs of your business, handling large-scale data effortlessly.",
    underline: true,
  },
  {
    title: "Secure",
    description:
      "MAXLS prioritizes data security, ensuring your information is protected at all times.",
    underline: false,
  },
  {
    title: "User-Friendly",
    description:
      "MAXLS offers an intuitive interface, making it easy for users to operate without extensive training.",
    underline: false,
  },
];
const Maxls = () => {
  return (
    <div className="min-h-screen flex flex-col py-30 gap-4 xl:gap-10 ">
      <HeroSection
        logo="/maxls.png"
        wordsToHighlight={wordsToHighlight}
        title={"Data Management"}
        titlePart2="Tool For Maximo"
        subtitle="PROVEN MAXIMO ADD-ONS SOLUTIONS"
        textColor="#1BAC66"
        linearGradient="linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)"
        image="/maxlsbg.svg"
        minusbottom="-mb-20"
        minustop="-mt-[20px]"
      />
      <InfiniteScroll />
      <ProductHighlight
        defaultGridCols={1}
        mdGridRows={3}
        mdGridCols={2}
        underlineColor="#BBEE91"
        data={data}
        bgColor="linear-gradient(97.4deg, rgba(68, 133, 79, 0.35) 23.21%, rgba(187, 238, 145, 0.56) 81.91%), linear-gradient(135deg, #44854F 0%, #BBEE91 100%)"
        image="/maxlshighlight.svg"
        title="MAXLS : A MAXIMO DATA LOADER"
      />
      <ProductFeatures />
      <GetInTouch />
      <OurLocations />
    </div>
  );
};

export default Maxls;
