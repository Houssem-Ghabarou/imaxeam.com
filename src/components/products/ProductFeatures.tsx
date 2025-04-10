"use client";

import React, { useEffect, useState } from "react";
import DynamicButton from "../shared-components/Buttons/dynamicButton";
import LottieAnim from "../shared-components/lottie/LottieAnim";
import copyPastAnimation from "@/assets/MAXLS/User Mode/Copy-paste.json";
import Dynamics from "@/assets/MAXLS/User Mode/Dynamics.json";
import validation from "@/assets/MAXLS/User Mode/Validation.json";
import DirectEdit from "@/assets/MAXLS/User Mode/Direct Edit.json";
import ErrorChecking from "@/assets/MAXLS/User Mode/Error Checking.json";
import simulate from "@/assets/MAXLS/User Mode/Simulation.json";
import Installation from "@/assets/MAXLS/Admin Mode/Intallation.json";
import Advanced from "@/assets/MAXLS/Admin Mode/Advanced Settingd.json";

import Lottie from "lottie-react";

const ProductFeatures = () => {
  const [mode, setMode] = useState("user");
  console.log(mode, "mode");

  return (
    <div className=" px-3 lg:px-20 2xl:px-40 w-full xl:my-35">
      <div
        className="flex flex-col xl:flex-row   xlgap-8 rounded-2xl"
        style={{
          background:
            "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(187, 238, 145, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
          backdropFilter: "blur(65.8px)",
        }}
      >
        <div className="flex flex-col gap-4 w-[100%] xl:w-[40%] p-6 xl:p-20">
          {/* title */}
          <div className="text-[50px] text-black-100 font-[600] ">
            MAXLS: Key Features
          </div>
          <div className="flex gap-4">
            <DynamicButton
              onClick={() => setMode("user")}
              text="User Mode"
              bgColor={mode === "user" ? "bg-[#2E834E]" : "bg-transparent"}
              borderColor={
                mode === "user" ? "border-[#2E834E]" : "border-black-100"
              }
              textColor={mode === "user" ? "text-white-100" : "text-black-100"}
              underlineColor={mode === "user" ? "white" : "black"}
            />
            {/* admin */}
            <DynamicButton
              onClick={() => setMode("admin")}
              text="Admin Mode"
              bgColor={mode === "admin" ? "bg-[#2E834E]" : "bg-transparent"}
              borderColor={
                mode === "admin" ? "border-[#2E834E]" : "border-black-100"
              }
              textColor={mode === "admin" ? "text-white-100" : "text-black-100"}
              underlineColor={mode === "admin" ? "white" : "black"}
            />
          </div>
        </div>
        {/* floating cards */}
        {mode === "user" && (
          <div className="relative  p-6  xl:p-0 xl:w-[58%] xl:max-h-[350px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 xl:-mt-[60px] xl:-mr-[40px] x:-mb-[20px]">
              {/* First column: Full height (spans 3 rows) */}
              <div className="flex flex-col gap-4  mt-[20px]">
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={Dynamics}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Dynamics
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXLS displays data in a dynamic spreadsheet.
                  </p>
                </div>
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    // background:
                    //   "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={copyPastAnimation}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Copy Paste
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Copying data from Excel to Maximo and vice versa is a simple
                    copy-paste operation. This allows users to manage their data
                    in Excel and take it back to Maximo.{" "}
                  </p>
                </div>
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={validation}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Validation
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXLS follows all Maximo security and business rules,
                    maintaining data integrity and its confidentiality.
                  </p>
                </div>
              </div>

              {/* Second column: 3 individual items (1 per row) */}
              <div className="flex flex-col gap-4 ">
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={DirectEdit}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Direct Edit
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXLS offers users unique opportunities. It allows quick
                    change as well as adding bulk data within the embedded
                    spreadsheet.
                  </p>
                </div>
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    // background:
                    //   "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={ErrorChecking}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Errors Checking
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXLS highlights in red the row that contains errors. It
                    offers you direct access to the problem.
                  </p>
                </div>
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={simulate}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Simulate
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    The Simulate option will enable you to preview data before
                    committing it to the system. It allows you to visualize and
                    correct any errors before committing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {mode === "admin" && (
          <div className="relative p-6 xl:p-0 xl:w-[58%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:-mt-[15px] xl:-mr-[40px] xl:-mb-[30px] grid-rows-3 min-h-[400px]">
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden row-span-3 min-h-full"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <Lottie
                  animationData={Installation}
                  className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                  loop={true}
                />
                <div className="relative z-10 text-black-100 text-xl  xl:text-2xl font-[900]">
                  Easy Installation & Configuration
                </div>
                <p className="relative z-10 text-black-100 xl:text-md">
                  Installing MAXLS is a straightforward process. A provided
                  installer guides the administrator through each step. iMaxeam
                  offers comprehensive support throughout the installation,
                  deployment, distribution, and configuration of MAXLS. The
                  process mirrors that of Maximo, ensuring a familiar experience
                  for administrators.
                </p>
              </div>
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden row-span-3 min-h-full"
                style={{
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <Lottie
                  animationData={Advanced}
                  className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                  loop={true}
                />
                <div className="relative z-10 text-black-100 text-xl  xl:text-2xl font-[900]">
                  Advanced Settings
                </div>
                <ul className="relative z-10 text-black-100 xl:text-md list-disc pl-5">
                  <li>
                    MAXLS provides users with multiple data load modes,
                    including Standard, Turbo, Background, and Turbo Background
                    modes.
                  </li>
                  <li>
                    {" "}
                    The default setting, executing data loads sequentially.
                  </li>
                  <li>
                    Turbo Mode: Processes data in bulk using parallel
                    asynchronous operations, accelerating processing speed by a
                    factor of 5 to 10, depending on the application. Ideal for
                    independent, non-hierarchical data.
                  </li>
                  <li>
                    Background Mode: Allows users to initiate a data load
                    without waiting for completion or monitoring connection
                    status. Users can later verify the data load and address any
                    failures.
                  </li>
                  <li>
                    Turbo Background Mode: Enhances background data processing,
                    achieving speeds 5 to 10 times faster than Standard Mode.
                    Best suited for unstructured or dependency-free data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFeatures;
