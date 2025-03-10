import AboutUsImaxeam from "@/components/about-us/aboutusimaxeam";
import GetInTouch from "@/components/shared-components/getInTouch";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import InfoSection from "@/containers/home-page/infos/info-section";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Imaxeam.com",
  description:
    "Who are we? We are honored to have been an IBM Gold Business Partner, and a trusted IBM Maximo managed service provider. Offerings MAS 8 and Ext. Maximo 7.6 support.",
};
const AboutUs = () => {
  return (
    <div className="min-h-screen py-60 px-3 ">
      <InfoSection />
      <InfiniteScroll />
      <AboutUsImaxeam />

      <GetInTouch />
    </div>
  );
};

export default AboutUs;
