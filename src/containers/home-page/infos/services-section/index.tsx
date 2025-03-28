"use client";

import Card from "@/components/shared-components/card";
import UnmatchedServices from "@/components/shared-components/unmatchedservices";
import { forwardRef } from "react";
import { servicesCardDataDesktop } from "@/data/servicesCardDataDesktop";

const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const navigateToWebsite = (website: string) => {
    window.open(website);
  };

  return (
    <div
      ref={ref}
      className="hidden xl:block relative w-full py-32 px-16 mb-40"
    >
      {/* Background div with gradient */}
      <div
        className="absolute inset-x-0 top-20 h-[100%] rounded-2xl"
        style={{
          background:
            "linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(252, 119, 50, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
          backdropFilter: "blur(65.8px)",
        }}
      />

      {/* Content container with relative positioning */}
      <div className="relative z-10 grid grid-cols-3 xl:gap-4 w-full max-w-8xl mx-auto min-h-[350px]">
        <div className="absolute left-0 top-[260] transform -translate-y-1/2">
          <UnmatchedServices />
        </div>
        <div className="absolute -top-30 right-[-60] w-2/3 grid grid-cols-1 md:grid-cols-2 gap-1">
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
    </div>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
