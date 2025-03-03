import DynamicButton from "@/components/shared-components/Buttons/dynamicButton";
import maxapps from "../../../../public/maxapps.png";
import maximo from "../../../../public/maximo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className=" h-[74%]  bg-cover bg-center w-full py-20 px-3 xl:py-40 xl:px-25 rounded-2xl"
      style={{ backgroundImage: "url('/herosection.png')" }}
    >
      <div className="flex justify-between ">
        <div className="flex flex-col gap-5 w-[100%] xl:w-[45%]">
          <h1>
            <strong className="font-bold">IBM</strong> Maximo
            <br />
            is
            <strong className="text-orange-100"> Our Game</strong>
          </h1>
          <p>
            <strong>Elevate</strong> your Maximo experience with{" "}
            <strong> iMaxeam's innovative solutions,</strong>
            <br /> designed to empower clients globally.
          </p>
          <p>
            Our premium add-ons <strong>enhance Maximo</strong>, making data
            management
            <br /> effortless and improving access and visualization for
            <strong> business end-users</strong>
            <br /> and
            <strong> I.T. super-users</strong> alike.
          </p>
          <h2>Discover the future of Maximo with iMaxeam.</h2>

          {/* buttons */}
          <div className="self-end flex gap-5 ">
            <DynamicButton text="Learn more" />
            <DynamicButton
              text="Get in Touch"
              textColor="bg-black-100"
              bgColor="bg-transparent"
            />
          </div>
        </div>
        <div className="w-[55%]  hidden xl:inline ml-25 ">
          <div className="relative ">
            <Image src={maximo} alt="Maximo" width={680} height={680} />
            <Image
              src={maxapps}
              width={250}
              height={250}
              alt="Maxapps"
              className="absolute right-30 top-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
