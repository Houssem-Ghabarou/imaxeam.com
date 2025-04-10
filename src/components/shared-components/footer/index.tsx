"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const router = useRouter();
  const handleEULA = () => {
    router.push("/eula");
  };
  const handlePrivacyPolicy = () => {
    router.push("/privacy-policy");
  };

  return (
    <footer className="bg-[#222222] flex flex-col px-10 md:px-40 lg:px-30 xl:px-50 2xl:px-90 py-5">
      <div className="flex flex-row gap-5 md:gap-10 items-center justify-between">
        <div className="text-white text-md flex gap-2 flex-col items-center">
          <img
            src={"/imaxeamfooter.svg"}
            alt="Imaxeam Logo"
            className=" md:min-w-40  w-25 md:w-80"
          />
          <img
            src={"/imaxeamfooter2.svg"}
            alt="Imaxeam Logo"
            className="md:min-w-40 w-25 md:w-80"
          />
        </div>

        {/* Separator line vertical */}
        <div className="block w-[1px] bg-white h-20"></div>

        <div className="hidden md:block text-center md:text-left">
          <div className="text-sm text-orange-100">About iMaxem</div>
          <p className="text-[13px] text-white-100 leading-[25px]">
            iMaxeam, a North American company with operations worldwide,
            provides IBM Maximo add-on products and solutions exclusive to
            Maximo.
          </p>
        </div>

        {/* Separator line vertical */}
        <div className="hidden md:block w-[1px] bg-white h-20"></div>

        <div className="text-nowrap flex flex-col gap-2 text-center md:text-left">
          <div className="text-orange-100 text-xs md:text-sm">
            Select Partners{" "}
            <span
              className="underline text-white-100 cursor-pointer"
              onClick={() =>
                window.open("https://www.jfc-associates.com/", "_blank")
              }
            >
              JFC
            </span>
          </div>
          <div className="text-orange-100 text-xs md:text-sm">
            Read Our{" "}
            <span className=" text-white-100">
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  handleEULA();
                }}
              >
                EULA
              </span>{" "}
              <span className="text-orange-100">,</span>
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  handlePrivacyPolicy();
                }}
              >
                {" "}
                Privacy Policy
              </span>
            </span>
          </div>
          <div className="text-orange-100 text-xs md:text-sm">
            Visit{" "}
            <span
              className="underline text-white-100 cursor-pointer"
              onClick={() => {
                router.push("/sitemap.xml");
              }}
            >
              Sitemap
            </span>
          </div>
        </div>
      </div>

      {/* Copyright iMaxeam */}
      <div className="text-white text-xs md:text-sm mt-5">
        <p className="text-center">Copyright © iMaxeam {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
