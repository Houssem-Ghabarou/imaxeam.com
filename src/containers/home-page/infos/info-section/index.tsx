import React from "react";

interface InfoSectionProps {
  displayreverse?: boolean;
  aboutus?: boolean;
}

const InfoSection = ({ displayreverse, aboutus }: InfoSectionProps) => {
  const textColorClass = aboutus ? "text-black-100" : "text-white-100";
  return (
    <div
      className={`flex ${
        displayreverse ? "flex-row-reverse" : "flex-row"
      } justify-between gap-8 ${
        !aboutus ? "bg-orange-100" : ""
      } relative h-[500px] px-6 xl:px-20 2xl:px-40`}
    >
      <div
        className={`flex flex-col gap-1 w-full justify-center  2xl:w-[50%] z-10 rounded-2xl ${
          aboutus ? "p-6" : ""
        }`}
        style={{
          background: aboutus
            ? "linear-gradient(94.62deg, rgba(238, 238, 238, 0.1) 8.4%, rgba(252, 119, 50, 0.16) 35.77%, rgba(238, 238, 238, 0.1) 78.4%)"
            : undefined,
        }}
      >
        <h3
          className={`text-[40px] xl:text-[60px] xl:leading-[100px] font-bold ${textColorClass}`}
        >
          Who are we ?
        </h3>
        <p className={`text-sm leading-[30px]  xl:w-[80%] ${textColorClass}`}>
          At <span className="font-bold">iMaxeam</span>, we take pride in being
          an <span className="font-bold">IBM Gold Business Partner</span> and a
          <span className="font-bold">
            trusted IBM Maximo Managed Service Provider
          </span>
          , delivering cutting-edge solutions for{" "}
          <span className="font-bold">IBM MAS</span> and{" "}
          <span className="font-bold">Maximo 7.6</span>.
        </p>
        <p className={`text-sm leading-[30px] xl:w-[80%] ${textColorClass}`}>
          With over a decade of expertise, we have been empowering businesses
          with comprehensive{" "}
          <span className="font-bold">Maximo solutions—from</span> seamless
          <span className="font-bold"> integrations</span> and{" "}
          <span className="font-bold">managed services</span> to our flagship
          products designed to <span className="font-bold">enhance</span>{" "}
          performance, efficiency, and scalability.
        </p>
        <p className={`text-sm leading-[30px]  xl:w-[80%] ${textColorClass}`}>
          <span className="font-bold">Our commitment</span> to innovation and
          excellence ensures that <span className="font-bold">your Maximo</span>{" "}
          <span className="font-bold">
            environment operates at its full potential
          </span>
          .
        </p>
        {aboutus ? (
          <img
            src="/aboutuslogo.svg"
            alt="About Us Logo"
            className="w-[250px] xl:w-[400px]"
            style={{ maxHeight: "none" }}
          />
        ) : (
          <img
            src="/imaxeamwhitelogo.svg"
            alt="iMaxeam"
            className="w-[250px] xl:w-[400px]"
            style={{ maxHeight: "none" }}
          />
        )}
      </div>
      {/* Image with absolute positioning and no size constraints */}
      <div
        className={`hidden 2xl:block absolute ${
          displayreverse ? "left-[80]" : "right-20"
        } top-1/2 transform -translate-y-1/2 z-0 rotate-20`}
      >
        <video
          autoPlay
          muted
          loop
          src="/whoarewe.webm"
          className="max-w-none w-auto h-auto overflow-hidden min-h-[750px]"
          style={{ maxHeight: "none" }}
          playsInline
        />
      </div>
    </div>
  );
};

export default InfoSection;
