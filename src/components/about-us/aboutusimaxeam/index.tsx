import React from "react";
import Ceos from "../ceos";

const AboutUsImaxeam = () => {
  return (
    <div className="flex flex-col gap-30 ">
      <div className="px-4 xl:px-50 flex justify-between items-center gap-20 ">
        <div className="xl:w-[50%] flex flex-col gap-4">
          <strong className="text-orange-100 text-[58px] font-bold">
            iMaxeam
          </strong>
          <p className="xl:w-[90%]">
            iMaxeam Welcome to <strong>iMaxeam</strong>, your premier provider
            of
            <strong> comprehensive</strong> <strong>IBM Maximo</strong> services
            and products. <strong>iMaxeam</strong> is dedicated to helping
            businesses maximize their potential with{" "}
            <strong>IBM Maximo solutions</strong>.
          </p>
        </div>
        <div className=" hidden xl:inline xl:w-[50%]">
          <img src="/aboutiMaxeam.png" />
        </div>
      </div>
      <div className="px-4 xl:px-50 flex justify-between items-center gap-20 ">
        <div className=" hidden xl:inline xl:w-[50%]">
          <img src="/aboutOur-Commitment.png" />
        </div>
        <div className="xl:w-[50%] flex flex-col gap-4">
          <strong className="text-orange-100 text-[58px] font-bold">
            Our Commitment
          </strong>
          <p className="xl:w-[90%]">
            At <strong>iMaxeam</strong>, we are committed to ensuring every
            client gets the most out of IBM Maximo. With 21 years of combined
            experience in the industry, we understand the challenges businesses
            face and are dedicated to providing tailored solutions that optimize
            efficiency, reduce costs, and enhance operational performance.
          </p>
        </div>
      </div>
      <Ceos />
    </div>
  );
};

export default AboutUsImaxeam;
