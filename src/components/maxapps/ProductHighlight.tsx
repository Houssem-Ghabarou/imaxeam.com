"use client";

import React from "react";
import DynamicButton from "../shared-components/Buttons/dynamicButton";

const ProductHighlight = () => {
  return (
    <div
      className="flex flex-col xl:flex-row xl:gap-4"
      style={{
        background:
          "linear-gradient(97.4deg, rgba(238, 238, 238, 0) 23.21%, rgba(242, 242, 242, 0) 81.91%), linear-gradient(135deg, #40367E 0%, #7057A5 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(65.8px)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/maxappsback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div className="hidden xl:inline -mt-[130px] w-[100%] xl:w-[50%]">
        <img src="/maxapps.svg" className="" alt="maxapps" />
      </div>
      <div className="w-[100%] px-10 xl:px-0 xl:w-[50%] py-5 xl:py-15 flex flex-col justify-center gap-2 xl:gap-6 ">
        <div className=" text-2xl xl:text-[50px] text-white-100 font-[600]  xl:w-[70%]">
          Manage your work with <span className="text-[#EBC204]">MAXapps</span>
        </div>
        <div className="xl:w-[70%]">
          <p className="text-white-100 text-lg font-[400]">
            MAXapps Maximo Mobile takes IBM Maximo to the next level, where
            you'll have additional features such as advanced GIS without needing
            a separate app. In order for laborers to do their jobs efficiently,
            MAXapps gives workers access to Maximo asset data on their mobile
            devices so they can do their work effectively.
          </p>
        </div>
        <div className="flex  gap-2 xl:gap-4  ">
          <DynamicButton
            onClick={() =>
              window.open("https://maxapps-maximo.com/get-started/", "_blank")
            }
            text="Get Started"
            bgColor="bg-[#EBC204]"
            textColor="text-black-100"
            underlineColor="black"
            borderColor="border-[#EBC204]"
          />
          {/* learn more */}
          <DynamicButton
            onClick={() => window.open("https://maxapps-maximo.com", "_blank")}
            text="Learn more"
            bgColor="bg-transparant "
            borderColor="border-white-100"
            textColor="text-white-100"
            underlineColor="white"
          />
        </div>
      </div>
      <div className=" xl:hidden -mt-[90px] ml-[43px] w-[100%] xl:w-[50%]">
        <img src="/maxapps.svg" className="" alt="maxapps" />
      </div>
    </div>
  );
};

export default ProductHighlight;
