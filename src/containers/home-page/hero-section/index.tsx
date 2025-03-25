"use client";

import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <section className="pl-2 pr-2 xl:pl-40 xl:pr-40 pt-4 flex justify-between items-center relative">
      {/* Left Content (Text + Gradient Boxes) */}
      <div className="flex flex-col gap-5 w-[60%] relative z-10">
        <div
          className="relative p-10 rounded-2xl  backdrop-blur-sm "
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

        <div className="bg-[#FC773233]/45 backdrop-blur-sm  p-6 pr-10 rounded-2xl ">
          <div className="flex flex-col gap-5">
            <p>
              Unlock the full potential of{" "}
              <span className="font-bold">IBM Maximo</span> with{" "}
              <span className="font-bold">iMaxeam</span>’s expert{" "}
              <span className="font-bold">MAS integration</span>, innovative
              add-ons, and premium managed services designed to empower
              businesses worldwide.
            </p>
            <p>
              From seamless <span className="font-bold">IBM MAS </span>
              integration to intelligent automation and proactive managed
              services, we ensure Maximo works smarter for you. Our premium
              add-ons <span className="font-bold">simplify</span> data
              management, <span className="font-bold">enhance</span>{" "}
              accessibility, and <span className="font-bold">improve</span>{" "}
              visualization, giving business end-users and IT super-users the
              power to make faster, data driven decisions.
            </p>
            <h2>Discover the future of Maximo with iMaxeam.</h2>
            {/* buttons */}
            <div className="self-end flex gap-5 ">
              <DynamicButton
                text="Get in Touch"
                fontSize="text-xl"
                onClick={() => handleNavigate("/contact")}
              />
              <DynamicButton
                hoverBgColor="hover:bg-black-100"
                onClick={() => handleNavigate("/projects")}
                hoverTextColor="hover:text-white"
                borderColor="#292930"
                underlineColor="white"
                text="Learn more"
                fontSize="text-xl"
                textColor="bg-black-100"
                bgColor="bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image (Slightly Overlapping the Text Content) */}
      <div className="relative   flex justify-end">
        <img
          src="herosectionimage.svg"
          alt="hero"
          className="w-full h-auto relative -left-10 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
