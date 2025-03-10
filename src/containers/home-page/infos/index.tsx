"use client";

import React from "react";
import InfoSection from "./info-section";
import ServicesSection from "./services-section";
import Card from "@/components/shared-components/card";
import { Carousel } from "flowbite-react";
import UnmatchedServices from "@/components/shared-components/unmatchedservices";

const customTheme = {
  indicators: {
    active: {
      off: "bg-gray-300 hover:bg-gray-400", // Inactive indicator color
      on: "bg-blue-500", // Active indicator color
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
};
const InfosContent = () => (
  <div className="flex flex-col gap-35">
    <InfoSection />
    <ServicesSection />
  </div>
);

const Infos = () => {
  const navigateToWebsite = (website: string) => {
    window.open(website);
  };

  return (
    <>
      <section
        className="hidden xl:inline h-[74%] bg-cover bg-center w-full py-20 px-3 xl:py-0 xl:px-25 rounded-2xl"
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
            height: "700px",
          }}
          className="py-10 mb-10 h-full"
        >
          <UnmatchedServices />
          <Carousel theme={customTheme} className="h-full">
            <div className="flex flex-col ">
              <Card
                minheight="min-h-[250px]"
                shadow="shadow-md"
                icon="/cloud.svg"
                iconHeight={80}
                iconWidth={80}
                title="Fully Managed Service on Cloud"
                subtitle="Boost efficiency with cloud-based managed solutions."
                textColor="text-orange-100"
              />
              <Card
                minheight="min-h-[250px]"
                shadow="shadow-md"
                icon="/onpremise.svg"
                iconHeight={80}
                iconWidth={80}
                title="On-Premise Managed Service"
                subtitle="Optimize resources with on-premise managed operations."
                textColor="text-[#2E51CC]"
              />
            </div>

            <div className="h-[500px]">
              <Card
                minheight="min-h-[350px]"
                shadow="shadow-md"
                icon="/maxvs.png"
                title="Visual Scheduler Calendar For Maximo"
                subtitle="PROVEN MAXIMO ADD-ONS SOLUTIONS"
                textColor="text-[#017A9B]"
                button="Learn more"
                onClick={() =>
                  navigateToWebsite("https://maxvs-scheduler.com/")
                }
                description="MAXVS is the Maximo visual scheduler for your team. With the integrated visual calendar, Maximo users can view and schedule W.O.and P.M.in a true calendar format. With a simple‘ drag and drop’, your schedule requires no manual entry for changes."
              />
            </div>

            <div className="h-[500px]">
              <Card
                minheight="min-h-[350px]"
                shadow="shadow-md"
                onClick={() => navigateToWebsite("https://maxls-dataload.com/")}
                icon="/maxls.png"
                title="Data Management Tool For Maximo"
                subtitle="PROVEN MAXIMO ADD-ONS SOLUTIONS"
                textColor="text-[#2E834E]"
                button="Learn more"
                description="MAXLS Data Management is the premier essential IBM Maximo add-on product for mass information load. It enables you to import, update, upload and direct edits of asset and MRO specifics. Think Maximo with Excel."
              />
            </div>
            <div className="h-[500px]">
              <Card
                minheight="min-h-[350px]"
                shadow="shadow-md"
                onClick={() => navigateToWebsite("https://maxapps-maximo.com/")}
                icon="/maxapps.png"
                title="Build Powerful, Secure, Flexible and Versatile Maximo Mobile EAM Applications"
                subtitle="IBM Maximo Mobile Solution for Your Enterprise"
                textColor="text-[#7057A5]"
                button="Learn more"
                description="MAXapps provides IBM Maximo teams with a flexible tool for generating dynamic mobile applications that can suit any business requirements."
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Infos;
