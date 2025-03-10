import CustomCarousel from "@/components/shared-components/caroussel";
import { Carousel } from "flowbite-react";
import React from "react";
const slides = [
  {
    id: 1,
    src: "/southernCompanyThumbnail.png",
    description: "Explore the heights of natural beauty",
  },
  {
    id: 2,
    src: "/motThumbnail.png",
    description: "Relax with stunning ocean views",
  },
  {
    id: 3,
    src: "/timkenSteelThumbnail.png",
    description: "Discover hidden paths through ancient woods",
  },
  {
    id: 4,
    src: "/rtcThumbnail.png",
    description: "Experience the energy of city life",
  },
  {
    id: 5,
    src: "/cswgThumbnail.png",
    description: "Marvel at vast golden dunes",
  },
];
const TrustSection = () => {
  return (
    <section className="xl:inline bg-cover  bg-center w-full py-10 ">
      <div
        className="px-2 flex flex-col xl:flex-row  xl:justify-between   xl:px-50 items-center xl:gap-8 "
        style={{
          backgroundImage: "url('/trustus.png')",
          backgroundPosition: "bottom right",
          backgroundSize: "65% auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-5 w-[100%] xl:w-[50%] justify-center">
          <h3 className=" text-[29px] xl:text-[61px] font-bold ">
            They
            <span className="text-orange-100"> Trust us</span>
          </h3>
          <p>
            Experience unparalleled reliability with our dedicated services and{" "}
            <br className="hidden xl:inline" />
            innovative solutions, designed to <strong>elevate</strong> your
            asset management with <br className="hidden xl:inline" />
            <strong>Maximo</strong>.<br className="hidden xl:inline" /> We
            ensures <strong>seamless operations</strong> and{" "}
            <strong>enhanced productivity</strong>, backed by
            <br className="hidden xl:inline" /> our
            <strong> around-the-clock support</strong>
          </p>
          <p>
            <strong className="text-orange-100">Trust us, </strong>to be your
            steadfast partner, delivering continuous service and{" "}
            <br className="hidden xl:inline" /> expertise that keep your assets
            performing at their peak, <strong>24/7</strong>.
          </p>
        </div>
        <div className="xl:w-[50%] w-[100%]">
          <CustomCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
