"use client";

import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative flex justify-between items-center px-6 xl:px-20 2xl:px-40 pt-4">
      {/* Left Content (Text + Gradient Boxes) */}
      <div className="relative z-10 flex flex-col gap-5 w-[100%] xl:w-[45%] 2xl:w-[42%]">
        <div
          className="relative p-10 rounded-2xl backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(252, 119, 50, 0.1) 100%)",
          }}
        >
          <div className="flex flex-col gap-5">
            <h1>
              <span className="font-bold">IBM</span> Maximo
              <br /> is
              <span className="text-orange-100 font-bold"> Our Game</span>
            </h1>
          </div>
        </div>

        <div className="bg-[#FC773233]/45 backdrop-blur-sm p-6 2xl:pr-10 rounded-2xl">
          <div className="flex flex-col gap-5">
            <p className="text-sm lg:text-[18px] 2xl:text-[20px]">
              Unlock the full potential of{" "}
              <span className="font-bold">IBM Maximo</span> with{" "}
              <span className="font-bold">iMaxeam</span>’s expert{" "}
              <span className="font-bold">MAS integration</span>, innovative
              add-ons, and premium managed services designed to empower
              businesses worldwide.
            </p>
            <p className="text-sm lg:text-[18px] 2xl:text-[20px]">
              From seamless <span className="font-bold">IBM MAS </span>{" "}
              integration to intelligent automation and proactive managed
              services, we ensure Maximo works smarter for you.
            </p>
            <h2 className="text-sm lg:text-[18px] 2xl:text-[20px] font-bold">
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
      <div className="hidden xl:block absolute   min-[1280px]:right-[-120px]  min-[1500px]:right-[-100px] min-[1700px]:right-[-100px] top-8 xl:w-[60%] 2xl:[50%] h-full z-0 ">
        <video
          autoPlay
          muted
          loop
          className="min-[1280px]:w-[600px] min-[1500px]:w-[700px] min-[1700px]:w-[780px] h-[90%] object-cover rounded-3xl overflow-hidden"
          src="introimaxeam.webm"
        />
      </div>
    </section>
  );
};

export default HeroSection;
