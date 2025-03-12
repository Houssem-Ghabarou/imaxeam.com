"use client";

import Card from "@/components/shared-components/card";
import UnmatchedServices from "@/components/shared-components/unmatchedservices";
import React, { forwardRef } from "react";
import { servicesCardDataDesktop } from "@/data/servicesCardDataDesktop";

const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const navigateToWebsite = (website: string) => {
    window.open(website);
  };

  return (
    <div
      ref={ref}
      className="hidden xl:grid place-items-center bg-cover bg-center w-full py-20 px-20 rounded-2xl"
      style={{ backgroundImage: "url('/herosection.png')" }}
    >
      <div className="hidden xl:grid grid-cols-3 xl:gap-4 w-full max-w-8xl">
        <UnmatchedServices />
        {servicesCardDataDesktop?.map((card, index) => (
          <Card
            key={index}
            {...card}
            onClick={
              card?.link ? () => navigateToWebsite(card?.link) : undefined
            }
          />
        ))}
      </div>
    </div>
  );
});

export default ServicesSection;
