import React from "react";

const UnmatchedServices = () => {
  return (
    <div className="bg-transparent flex flex-col justify-between px-1  xl:p-0 relative">
      <div className=" text-[27px] leading-[27px] xl:text-[61px] xl:leading-[65px]">
        Unmatched
        <br className="hidden xl:inline" />{" "}
        <span className="text-orange-100 font-bold">Services</span>,<br />{" "}
        Unmatched
        <br className="hidden xl:inline" />{" "}
        <span className="text-orange-100 font-bold">
          Products ,<br />
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className=" text-[14px] xl:text-[30px] text-[#76767b] ">
          Unmatched Excellence.
        </span>
        <img
          className="inline xl:hidden h-[40px] w-[40px] xl:h-[50] xl:w-[50] self-end  "
          src="/Unmatched-Services-dots.png"
          alt="Unmatched Services"
        />
      </div>
      <img
        className="hidden xl:inline h-[40px] w-[40px] xl:h-[50] xl:w-[50]  absolute right-[-55]  bottom-[-40]"
        src="/Unmatched-Services-dots.png"
        alt="Unmatched Services"
      />
    </div>
  );
};

export default UnmatchedServices;
