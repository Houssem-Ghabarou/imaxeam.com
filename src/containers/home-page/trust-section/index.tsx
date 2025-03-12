"use client";

import CustomCarousel from "@/components/shared-components/caroussel";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/shared-components/emblacarousel/EmblaCaroussel";
import { useRouter } from "next/navigation";

const TrustSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = () => {
    router.push("/projects"); // Navigate to /projects
  };

  // Slides array with onClick event inside each object
  const slides = [
    {
      id: 1,
      src: "/southernCompanyThumbnail.png",
      image: "/southernCompanyThumbnail.png",
      description: "Explore the heights of natural beauty",
      button: "Learn more",
      textColor: "text-orange-100",
      onClick: handleNavigate, // Pass navigation function
    },
    {
      id: 2,
      src: "/motThumbnail.png",
      image: "/motThumbnail.png",
      description: "Relax with stunning ocean views",
      button: "Learn more",
      textColor: "text-orange-100",
      onClick: handleNavigate,
    },
    {
      id: 3,
      src: "/timkenSteelThumbnail.png",
      image: "/timkenSteelThumbnail.png",
      button: "Learn more",
      textColor: "text-orange-100",
      description: "Discover hidden paths through ancient woods",
      onClick: handleNavigate,
    },
    {
      id: 4,
      src: "/rtcThumbnail.png",
      image: "/rtcThumbnail.png",
      button: "Learn more",
      textColor: "text-orange-100",
      description: "Experience the energy of city life",
      onClick: handleNavigate,
    },
    {
      id: 5,
      src: "/cswgThumbnail.png",
      image: "/cswgThumbnail.png",
      button: "Learn more",
      textColor: "text-orange-100",
      description: "Marvel at vast golden dunes",
      onClick: handleNavigate,
    },
  ];

  const OPTIONS: EmblaOptionsType = {};

  return (
    <section className="xl:inline bg-cover bg-center w-full py-10">
      <div
        className="px-2 flex flex-col xl:flex-row xl:justify-between xl:px-50 items-center xl:gap-8"
        style={{
          backgroundImage: "url('/trustus.png')",
          backgroundPosition: "bottom right",
          backgroundSize: "65% auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-5 w-[100%] xl:w-[50%] justify-center">
          <h3 className="text-[29px] xl:text-[61px] font-bold">
            They <span className="text-orange-100">Trust us</span>
          </h3>
          <p>
            Experience unparalleled reliability with our dedicated services and{" "}
            <br className="hidden xl:inline" />
            innovative solutions, designed to <strong>elevate</strong> your
            asset management with <br className="hidden xl:inline" />
            <strong>Maximo</strong>.<br className="hidden xl:inline" /> We
            ensure <strong>seamless operations</strong> and{" "}
            <strong>enhanced productivity</strong>, backed by
            <br className="hidden xl:inline" /> our
            <strong> around-the-clock support</strong>.
          </p>
          <p>
            <strong className="text-orange-100">Trust us, </strong>to be your
            steadfast partner, delivering continuous service and{" "}
            <br className="hidden xl:inline" /> expertise that keeps your assets
            performing at their peak, <strong>24/7</strong>.
          </p>
        </div>
        <div className="xl:w-[50%] xl:inline hidden">
          {/* Pass the slides array with onClick to CustomCarousel */}
          <CustomCarousel slides={slides} />
        </div>
        <div className="xl:hidden w-full">
          {/* Pass the slides array with onClick to EmblaCarousel */}
          <EmblaCarousel options={OPTIONS} slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
