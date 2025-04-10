import React from "react";
import Ceos from "../ceos";

const AboutUsImaxeam = () => {
  return (
    <div className="flex flex-col gap-5 xl:gap-30   xl:mt-30 ">
      <div className="px-6 xl:px-20 2xl:px-40 flex justify-between items-center gap-20 relative  ">
        <div
          className="xl:w-[50%] 2xl:w-[55%] flex flex-col gap-4 p-8 rounded-2xl pr-20"
          style={{
            background: `linear-gradient(97.4deg, rgba(238, 238, 238, 0.5) 23.21%, rgba(242, 242, 242, 0.8) 81.91%)`,
          }}
        >
          <strong className="text-orange-100 text-lg xl:text-[50px] font-bold">
            iMaxeam
          </strong>
          <p className="xl:w-[90%]">
            Welcome to <strong>iMaxeam</strong>, your premier provider of
            <strong> comprehensive</strong> <strong>IBM Maximo</strong> services
            and products. <strong>iMaxeam</strong> is dedicated to helping
            businesses maximize their potential with{" "}
            <strong>IBM Maximo solutions</strong>.
          </p>
        </div>
        <div className=" hidden  xl:inline  absolute xl:right-100 2xl:right-130">
          <img src="/aboutus0.svg" width={300} alt="aboutus" />
        </div>
        <div className=" hidden xl:inline  absolute xl:right-20 2xl:right-48 top-[-180]">
          <img src="/aboutus1.svg" width={300} alt="aboutus1" />
        </div>
      </div>
      <div className="px-6 xl:px-20 2xl:px-40  flex   flex-row-reverse justify-between items-center gap-20 relative xl:mt-30 xl:mb-10 ">
        {/* <div className=" hidden xl:inline xl:w-[50%]">
          <img src="/aboutOur-Commitment.png" />
        </div> */}
        {/*  abouts 2 3*/}
        <div className=" hidden xl:inline  absolute xl:left-20 2xl:left-45 top-[-180]">
          <img src="/aboutus2.svg" width={300} alt="aboutus2" />
        </div>
        <div className=" hidden xl:inline  absolute xl:left-100 2xl:left-125">
          <img src="/aboutus3.svg" width={300} alt="aboutus3" />
        </div>
        <div
          className="xl:w-[50%] 2xl:w-[55%]  flex flex-col gap-4 rounded-2xl p-8 pl-30"
          style={{
            background: `linear-gradient(97.4deg, rgba(238, 238, 238, 0.5) 23.21%, rgba(242, 242, 242, 0.8) 81.91%)`,
          }}
        >
          <strong className="text-orange-100  text-lg xl:text-[50px] font-bold">
            Our Commitment
          </strong>
          <p className="xl:w-[90%] ">
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
