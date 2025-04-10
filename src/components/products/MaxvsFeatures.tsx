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

const MaxvsFeatures = () => {
  const [mode, setMode] = useState("user");

  return (
    <div className=" px-3 lg:px-20 2xl:px-40 my-10 w-full xl:my-70">
      <div
        className="flex flex-col xl:flex-row   xlgap-8 rounded-2xl"
        style={{
          background:
            "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(36, 163, 204, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
          backdropFilter: "blur(65.8px)",
        }}
      >
        <div className="flex flex-col gap-4 w-[100%] xl:w-[40%] p-6 xl:p-20">
          {/* title */}
          <div className="text-[50px] text-black-100 font-[600] ">
            MAXVS: Key Features
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
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(36, 163, 204, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={Dynamics}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Drag & Drop
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    With a simple ‘drag and drop’, your schedule requires no
                    manual entry for changes.Arrange WOs by the hour, day, or
                    week.Users can assign labor or craft to a WO and add any
                    important event to the visual
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
                    Forecast PMs
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Visually understand the scheduling impacts that your Maximo
                    PMs and WOs have.
                  </p>
                </div>
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(36, 163, 204, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={validation}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Gantt and Task Views
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    With the Gantt view, users can manage work orders and tasks
                    through a Gantt interface. MAXVS is designed to be easy to
                    use and to make you more efficient with planning, work
                    orders, and preventive maintenance.
                  </p>
                </div>
              </div>

              {/* Second column: 3 individual items (1 per row) */}
              <div className="flex flex-col gap-4 ">
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(36, 163, 204, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={DirectEdit}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Resource Availability
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Schedule & see all resource availability by hour, day, week,
                    & month – on 1 screen.
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
                    Calendar Format
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXVS is a visual calendar and scheduling tool for Maximo
                    users. It enables quick visualization and assignment of
                    approved WOs in a familiar calendar format, allowing users
                    to view and schedule W.O. and P.M. efficiently.
                  </p>
                </div>
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(36, 163, 204, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={simulate}
                    className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Assignment Manager
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Assign resources with drag & drop – ensuring scheduled
                    equals planned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaxvsFeatures;
