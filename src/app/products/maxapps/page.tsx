import ProductHighlight from "@/components/maxapps/ProductHighlight";
import HeroSection from "@/components/products/HeroSection";
import MaxappsFeatures from "@/components/products/MaxappsFeatures";
import GetInTouch from "@/components/shared-components/getInTouch";
import OurLocations from "@/components/shared-components/getInTouch/outLocations";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import React from "react";
// -mb-25 -mt-[100px] maxapps

const wordsToHighlight = [
  "Powerful,",
  "Secure,",
  "Flexible",
  "Versatile",
  "Mobile",
  "and",
];

const Maxapps = () => {
  return (
    <div className="min-h-screen flex flex-col py-30 gap-10  ">
      <HeroSection
        wordsToHighlight={wordsToHighlight}
        title="IBM Maximo"
        titlePart2="Mobile Solution"
        subtitle="Build Powerful, Secure, Flexible and
Versatile Maximo Mobile EAM
Applications"
        linearGradient="linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(111, 86, 164, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)"
        image="/maxappsbg.svg"
        minusbottom="-mb-25"
        textColor="#7057A5"
        logo="/maxapps.png"
        minustop="-mt-[90px]"
      />
      <InfiniteScroll />
      <ProductHighlight />
      <MaxappsFeatures />
      <GetInTouch />
      <OurLocations />
    </div>
  );
};

export default Maxapps;
