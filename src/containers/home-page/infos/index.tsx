"use client";

import React from "react";
import InfoSection from "./info-section";
import ServicesSection from "./services-section";
import EmblaCarousel from "@/components/shared-components/emblacarousel/EmblaCaroussel";
import { EmblaOptionsType } from "embla-carousel";
import UnmatchedServices from "@/components/shared-components/unmatchedservices";
import { servicesCardData } from "@/data/servicesCardData";

const OPTIONS: EmblaOptionsType = {};

const InfosContent = () => (
  <div className="flex flex-col gap-35">
    <InfoSection displayreverse={true} />
    <ServicesSection />
  </div>
);

const Infos = () => {
  return (
    <>
      <section
        className="hidden   xl:inline h-[74%] bg-cover bg-center w-full py-20 px-3 xl:py-0 xl:px-25 rounded-2xl"
        style={{
          backgroundImage: "url('/who-are-we-bg.png')",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <InfosContent />
      </section>

      <section className="flex flex-col gap-4 xl:hidden pl-2 pr-2">
        <InfoSection />
        <div
          style={{
            backgroundImage: "url('/herosection.png')",
            backgroundPosition: "center center",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "15px",
            // height: "700px",
          }}
          className="py-10 mb-10 h-full"
        >
          <UnmatchedServices />
          <EmblaCarousel options={OPTIONS} slides={servicesCardData} />
        </div>
      </section>
    </>
  );
};

export default Infos;
