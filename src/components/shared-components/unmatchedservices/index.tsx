import React from "react";

const UnmatchedServices = () => {
  return (
    <div className="bg-transparent flex flex-col justify-between px-1  xl:p-0">
      <div className=" text-[27px] leading-[27px] xl:text-[61px] xl:leading-[65px]">
        Unmatched
        <br className="hidden xl:inline" />{" "}
        <strong className="text-orange-100">Services</strong>,<br /> Unmatched
        <br className="hidden xl:inline" />{" "}
        <strong className="text-orange-100">
          Products ,<br />
        </strong>
      </div>

      <div className="flex justify-between items-center">
        <span className=" text-[14px] xl:text-[30px] text-[#76767b] ">
          Unmatched Excellence.
        </span>
        <img
          className="h-[40px] w-[40px] xl:h-[80px] xl:w-[80px] self-end "
          src="/Unmatched-Services-dots.png"
          alt="Unmatched Services"
        />
      </div>
    </div>
  );
};

export default UnmatchedServices;
