"use client";

import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter(); // Initialize router

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <section className="pl-2 pr-2 xl:pl-25 xl:pr-25 pt-4 ">
      <div
        className="xl:max-h-[760px] bg-cover bg-center w-full py-20 px-3 xl:py-40 xl:px-25 rounded-2xl "
        style={{ backgroundImage: "url('/herosection.png')" }}
      >
        <div className="flex justify-between ">
          <div className="flex flex-col gap-5 w-[100%] xl:w-[45%]">
            <h1>
              <strong className="font-bold">IBM</strong> Maximo
              <br className="hidden xl:inline" /> is
              <strong className="text-orange-100"> Our Game</strong>
            </h1>
            <p>
              <strong>Elevate</strong> your Maximo experience with{" "}
              <strong> iMaxeam's innovative solutions,</strong>
              <br className="hidden xl:inline" /> designed to empower clients
              globally.
            </p>
            <p>
              Our premium add-ons <strong>enhance Maximo</strong>, making data
              management
              <br className="hidden xl:inline" /> effortless and improving
              access and visualization for
              <strong> business end-users</strong>
              <br className="hidden xl:inline" /> and
              <strong> I.T. super-users</strong> alike.
            </p>
            <h2>Discover the future of Maximo with iMaxeam.</h2>

            {/* buttons */}
            <div className="self-end flex gap-5 ">
              <DynamicButton
                text="Learn more"
                fontSize="text-xl"
                onClick={() => handleNavigate("/projects")}
              />
              <DynamicButton
                onClick={() => handleNavigate("/contact")}
                hoverBgColor="hover:bg-black-100"
                hoverTextColor="hover:text-white"
                borderColor="#292930"
                underlineColor="white"
                fontSize="text-xl"
                text="Get in Touch"
                textColor="bg-black-100"
                bgColor="bg-transparent"
              />
            </div>
          </div>
          <div className="w-[55%]  hidden xl:inline ml-25 ">
            <div className="relative ">
              <img src="/maximo.png" alt="Maximo" width={680} height={680} />
              <img
                src="/maxappsapp.png"
                width={250}
                height={250}
                alt="Maxapps"
                className="absolute right-30 top-15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
