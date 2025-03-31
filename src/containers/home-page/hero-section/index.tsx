"use client";

import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";
import LottieAnim from "@/components/shared-components/lottie/LottieAnim";
import animationData from "../../../assets/Scroll GIF/down-arrow.json";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <section className="px-6 xl:px-20 2xl:px-40 pt-4 max-h-screen ">
      <div className="flex gap-8 justify-between h-[85%] ">
        {/* Left Content (Text + Gradient Boxes) */}
        <div className=" z-10  w-[100%] flex flex-col gap-5   lg:w-[90%]   xl:w-[70%] ">
          <div
            className=" p-6 min-[1800px]:p-10 rounded-2xl backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(252, 119, 50, 0.1) 100%)",
            }}
          >
            <div className="flex flex-col ">
              <h1 className="text-[40px] min-[1800px]:text-[50px] leading-[50px]  ">
                <span className="font-bold">IBM</span> Maximo
                <br /> is
                <span className="text-[#FC7732] font-bold"> Our Game</span>
              </h1>
            </div>
          </div>

          <div className="bg-[#FC773233]/45 backdrop-blur-sm p-6  min-[1800px]:p-10  rounded-2xl  ">
            <div className="flex flex-col gap-5">
              <p className="text-sm   min-[1800px]:text-[18px] leading-[140%]  ">
                Unlock the full potential of{" "}
                <span className="font-bold">IBM Maximo</span> with{" "}
                <span className="font-bold">iMaxeam</span>’s expert{" "}
                <span className="font-bold">MAS integration</span>, innovative
                add-ons, and premium managed services designed to empower
                businesses worldwide.
              </p>
              <p className="text-sm   min-[1800px]:text-[18px] leading-[140%] ">
                From seamless <span className="font-bold">IBM MAS </span>{" "}
                integration to intelligent automation and proactive managed
                services, we ensure Maximo works smarter for you.
              </p>
              <p className="text-sm   min-[1800px]:text-[18px] leading-[140%] ">
                Our premium add-ons simplify data management, enhance
                accessibility, and improve visualization, giving business
                end-users and IT super-users the power to make faster, data
                driven decisions.
              </p>
              <h2 className="text-md  min-[1800px]:text-[20px] font-bold leading-[140%] text-[#FC7732] ">
                Discover the future of Maximo with iMaxeam.
              </h2>
              {/* Buttons */}
              <div className="self-end flex gap-5">
                <DynamicButton
                  text="Get in Touch"
                  fontSize="text-sm"
                  onClick={() => handleNavigate("/contact")}
                />
                <DynamicButton
                  hoverBgColor="hover:bg-black-100"
                  onClick={() => handleNavigate("/projects")}
                  hoverTextColor="hover:text-white"
                  borderColor="#292930"
                  underlineColor="white"
                  text="Learn more"
                  fontSize="text-sm"
                  textColor="bg-black-100"
                  bgColor="bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Video (Covers Entire Right Side) */}
        <div className="hidden pt-3  lg:flex lg:flex-col ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-[100%] object-cover rounded-4xl"
            src="/introimaxeam.webm"
          />
          <div className="pl-5 pt-5">
            <LottieAnim animationData={animationData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
