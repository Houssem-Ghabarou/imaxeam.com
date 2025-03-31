"use client";

import CustomCarousel from "@/components/shared-components/caroussel";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/shared-components/emblacarousel/EmblaCaroussel";
import { useRouter } from "next/navigation";
import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";

const TrustSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = () => {
    router.push("/projects"); // Navigate to /projects
  };

  // Slides array with onClick event inside each object
  const slides = [
    {
      id: 1,
      src: "/ProjectssouthernCompany.png",
      image: "/ProjectssouthernCompany.png",
      description: "Explore the heights of natural beauty",
      button: "Learn more",
      textColor: "text-orange-100",
      onClick: handleNavigate, // Pass navigation function
    },
    {
      id: 2,
      src: "/Projectsmot.png",
      image: "/Projectsmot.png",
      description: "Relax with stunning ocean views",
      button: "Learn more",
      textColor: "text-orange-100",
      onClick: handleNavigate,
    },
    {
      id: 3,
      src: "/ProjectstimkenSteel.png",
      image: "/ProjectstimkenSteel.png",
      button: "Learn more",
      textColor: "text-orange-100",
      description: "Discover hidden paths through ancient woods",
      onClick: handleNavigate,
    },
    {
      id: 4,
      src: "/Projectsrtc.png",
      image: "/Projectsrtc.png",
      button: "Learn more",
      textColor: "text-orange-100",
      description: "Experience the energy of city life",
      onClick: handleNavigate,
    },
    {
      id: 5,
      src: "/Projectscswg.png",
      image: "/Projectscswg.png",
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
        style={{
          background:
            "linear-gradient(97.4deg, rgba(238, 238, 238, 0.5) 23.21%, rgba(242, 242, 242, 0.8) 81.91%)",
        }}
      >
        <div className="w-[100%] flex   flex-col gap-3 px-6 xl:px-20 2xl:px-40  py-5">
          {/* Pass the slides array with onClick to CustomCarousel */}
          <div className="w-full flex justify-between items-center">
            <div className="text-[20px]  lg:text-[64px] text-black-300">
              They <span className="text-orange-100 font-bold">Trust Us</span>
            </div>
            <a onClick={handleNavigate}>
              <DynamicButton
                text="Learn more"
                bgColor="bg-transparant "
                borderColor="border-black-100"
                textColor="text-black-100"
                underlineColor="black"
              />
            </a>
          </div>
          <div className="inline md:hidden  w-full   ">
            {/* Pass the slides array with onClick to EmblaCarousel */}
            <CustomCarousel slides={slides} perview={1} />
          </div>
          <div className="hidden md:inline lg:hidden  w-full  ">
            {/* Pass the slides array with onClick to EmblaCarousel */}
            <CustomCarousel slides={slides} perview={2} />
          </div>
          <div className="hidden lg:inline xl:hidden  w-full  ">
            {/* Pass the slides array with onClick to EmblaCarousel */}
            <CustomCarousel slides={slides} perview={3} />
          </div>
          <div className="hidden xl:inline  w-full  ">
            <CustomCarousel slides={slides} perview={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
