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

const MaxappsFeatures = () => {
  const [mode, setMode] = useState("user");
  console.log(mode, "mode");

  return (
    <div className="px-3 lg:px-20 2xl:px-40 my-10 w-full  xl:mt-20 xl:mb-75">
      <div
        className="flex flex-col xl:flex-row   xl:gap-8 rounded-2xl"
        style={{
          background:
            "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
          backdropFilter: "blur(65.8px)",
        }}
      >
        <div className="flex flex-col gap-4 w-[100%] xl:w-[40%] p-6 xl:p-20">
          {/* title */}
          <div className="text-[50px] text-black-100 font-[600] ">
            MAXAPPS: Key Features
          </div>
        </div>
        {/* floating cards */}
        {mode === "user" && (
          <div className="relative  p-6  xl:p-0 xl:w-[58%]  xl:max-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:-mt-[60px] xl:-mr-[40px] x:-mb-[20px]">
              {/* First column: Full height (spans 3 rows) */}
              <div className="flex flex-col gap-4  -mt-[-40px]">
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={Dynamics}
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Easy Deployment to the End-User
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Deploy your IBM Maximo applications to the end-user in a
                    fraction of the time and with a single click.
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
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Fast User Interface Customization
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    With a wide variety of plug-and-play components and widgets,
                    bring an impressive IBM mobile application experience to
                    your users without coding or development skills.
                  </p>
                </div>
              </div>

              {/* Second column: 3 individual items (1 per row) */}
              <div className="flex flex-col gap-4  ">
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={DirectEdit}
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Advanced Mobile Features
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Benefit from the advantage of our ready-to-use components
                    that handle advanced features such as GiS, real-time worker
                    tracking, etc.
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
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Fully Integrated
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    The MAXapps mobile add-on is fully integrated with IBM
                    Maximo.
                  </p>
                </div>
                <div
                  className="px-6 py-5 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={simulate}
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Send Instant Updates
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Any configuration changes or security updates are
                    immediately distributed to your Maximo mobile users
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4  mt-[20px]">
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={Dynamics}
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Meet Company Requirements
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Mobile and Maximo features can be added to MAXapps specific
                    to IBM Maximo.
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
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    Highly Scalable Solution
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    MAXapps can scale from a few dozen to hundreds, to thousands
                    of users without resizing the Maximo instance.
                  </p>
                </div>
                <div
                  className="px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(112, 87, 165, 0.2) 72.03%, rgba(170, 170, 170, 0.1) 107.44%)",
                    backdropFilter: "blur(65.8px)",
                  }}
                >
                  <Lottie
                    animationData={validation}
                    className="absolute top-1/2 left-38 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                    loop={true}
                  />
                  <div className="relative z-10 text-black-100 text-xl font-[900]">
                    First-Class Security
                  </div>
                  <p className="relative z-10 text-black-100 text-md">
                    Mobile applications delivered by MAXapps support high-level
                    encryption, SSL, and LDAP.
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

export default MaxappsFeatures;
