import React from "react";

interface InfoSectionProps {
  displayreverse?: boolean;
}

const InfoSection = ({ displayreverse }: InfoSectionProps) => {
  return (
    <div
      className={`flex justify-between gap-3 bg-orange-100 relative p-8 xl:p-8 min-h-[400px] xl:min-h-[600px]`}
    >
      {/* Text content - takes full width on mobile, half on desktop */}
      <div
        className={`flex flex-col gap-3 w-full xl:w-[50%] z-10 ${
          displayreverse ? "xl:ml-auto" : ""
        }`}
      >
        <h3 className="text-[29px] xl:text-[78px] text-white-100">
          <strong className="font-bold">Who are </strong>
          <strong>we ?</strong>
        </h3>
        <p className="w-[80%] text-white-100">
          At <span className="font-bold">iMaxeam</span>, we take pride in being
          an <span className="font-bold">IBM Gold Business Partner</span> and a
          <span className="font-bold">
            trusted IBM Maximo Managed Service Provider
          </span>
          , delivering cutting-edge solutions for{" "}
          <span className="font-bold">IBM MAS</span> and{" "}
          <span className="font-bold">Maximo 7.6</span>.
        </p>
        <p className="w-[80%] text-white-100">
          With over a decade of expertise, we have been empowering businesses
          with comprehensive{" "}
          <span className="font-bold">Maximo solutions—from</span> seamless
          <span className="font-bold">integrations</span> and{" "}
          <span className="font-bold">managed services</span> to our flagship
          products designed to <span className="font-bold">enhance</span>{" "}
          performance, efficiency, and scalability.
        </p>
        <p className="w-[80%] text-white-100">
          <span className="font-bold">Our commitment</span> to innovation and
          excellence ensures that <span className="font-bold">your Maximo</span>{" "}
          <span className="font-bold">
            environment operates at its full potential
          </span>
          .
        </p>
        <img
          src="/imaxeamwhitelogo.svg"
          alt="iMaxeam"
          className="w-[150px] xl:w-[400px]"
          style={{ maxHeight: "none" }}
        />
      </div>

      {/* Image with absolute positioning and no size constraints */}
      <div
        className={`hidden xl:block absolute ${
          displayreverse ? "left-0" : "right-0"
        } top-1/2 transform -translate-y-1/2 z-0`}
      >
        <img
          src="/who-are-we-bg.svg"
          alt="Who are we"
          className="max-w-none w-auto h-auto"
          style={{ maxHeight: "none" }}
        />
      </div>
    </div>
  );
};

export default InfoSection;
