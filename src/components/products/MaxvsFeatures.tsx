import React from "react";
import DynamicButton from "../shared-components/Buttons/dynamicButton";

const MaxvsHighlight = () => {
  return (
    <div className=" px-6 lg:px-20 2xl:px-40 w-full my-10">
      <div
        className="flex  gap-8 rounded-2xl"
        style={{
          background:
            "linear-gradient(96.24deg, rgba(170, 170, 170, 0.1) -14.9%, rgba(187, 238, 145, 0.2) 33.3%, rgba(170, 170, 170, 0.1) 53.27%)",
          backdropFilter: "blur(65.8px)",
        }}
      >
        <div className="flex flex-col gap-4 w-[40%] p-20">
          {/* title */}
          <div className="text-[50px] text-black-100 font-[600] ">
            MAXLS: Key Features
          </div>
          <div className="flex gap-4">
            <DynamicButton
              text="User Mode"
              bgColor="bg-[#2E834E]"
              borderColor="border-[#2E834E]"
              textColor="text-white-100"
              underlineColor="white"
            />
            {/* admin */}
            <DynamicButton
              text="Admin Mode"
              bgColor="bg-transparent"
              borderColor="border-black-100"
              textColor="text-black-100"
              underlineColor="black"
            />
          </div>
        </div>
        {/* floating cards */}
        <div className="relative w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-[40px] -mb-[40px]">
            {/* First column: Full height (spans 3 rows) */}
            <div className="flex flex-col gap-4 row-span-3 mt-[10px]">
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  // background:
                  //   "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
            </div>

            {/* Second column: 3 individual items (1 per row) */}
            <div className="flex flex-col gap-4 ">
              <div
                className="px-6 py-5 rounded-xl flex flex-col gap-4"
                style={{
                  // background:
                  //   "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-5 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-5 rounded-xl flex flex-col gap-4"
                style={{
                  // background:
                  //   "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
            </div>

            {/* Third column: Full height (spans 3 rows) */}
            <div className="flex flex-col gap-4 row-span-3 mt-[20px] ">
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
              <div
                className="px-6 py-4 rounded-xl flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                  backdropFilter: "blur(65.8px)",
                }}
              >
                <div className="text-black-100 text-xl font-[900]">
                  Dynamics
                </div>
                <p className="text-black-100 text-sm">
                  MAXLS displays data in a dynamic spreadsheet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxvsHighlight;
