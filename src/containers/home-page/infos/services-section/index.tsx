"use client";

import Card from "@/components/shared-components/card";
import UnmatchedServices from "@/components/shared-components/unmatchedservices";
import React, { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const navigateToWebsite = (website: string) => {
    window.open(website);
  };
  return (
    <div
      ref={ref}
      className=" hidden xl:grid place-items-center bg-cover bg-center  w-full py-20  px-20 rounded-2xl"
      // className=" h-[74%]  w-full py-20 px-3 xl:py-40 xl:px-25 rounded-2xl"
      style={{ backgroundImage: "url('/herosection.png')" }}
    >
      <div className=" hidden xl:grid grid-cols-3 xl:gap-4 w-full max-w-8xl ">
        {/* <Card
          minheight="min-h-[350px]"
          shadow="shadow-md"
          icon="/cloud.svg"
          iconHeight={80}
          iconWidth={80}
          title="Fully Managed Service on Cloud"
          subtitle="Boost efficiency with cloud-based managed solutions."
          textColor="text-orange-100"
        /> */}
        <UnmatchedServices />
        <Card
          minheight="min-h-[350px]"
          shadow="shadow-md"
          icon="/cloud.svg"
          iconHeight={80}
          iconWidth={80}
          title="Fully Managed Service on Cloud"
          subtitle="Boost efficiency with cloud-based managed solutions."
          textColor="text-orange-100"
        />
        <Card
          minheight="min-h-[350px]"
          shadow="shadow-md"
          icon="/onpremise.svg"
          iconHeight={80}
          iconWidth={80}
          title="On-Premise Managed Service"
          subtitle="Optimize resources with on-premise managed operations."
          textColor="text-[#2E51CC]"
        />
        <Card
          minheight="min-h-[350px]"
          shadow="shadow-md"
          icon="/maxvs.png"
          title="Visual Scheduler Calendar For Maximo"
          subtitle="PROVEN MAXIMO ADD-ONS SOLUTIONS"
          textColor="text-[#017A9B]"
          button="Learn more"
          onClick={() => navigateToWebsite("https://maxvs-scheduler.com/")}
          description="MAXVS is the Maximo visual scheduler for your team. With the integrated visual calendar, Maximo users can view and schedule W.O.and P.M.in a true calendar format. With a simple‘ drag and drop’, your schedule requires no manual entry for changes."
        />
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
    </div>
  );
});

export default ServicesSection;
