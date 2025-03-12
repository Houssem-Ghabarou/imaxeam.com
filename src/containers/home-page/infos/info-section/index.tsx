import React from "react";

interface InfoSectionProps {
  displayreverse?: boolean;
}
const InfoSection = ({ displayreverse }: InfoSectionProps) => {
  return (
    <div className={`flex justify-between gap-8`}>
      <div className="w-[50%]  hidden xl:flex justify-center">
        <img src="/whoarewe.png" alt="Who are we" width={600} height={600} />
      </div>
      <div className="flex flex-col gap-5 w-[100%] xl:w-[50%] justify-center">
        <h3 className=" text-[29px] xl:text-[78px]">
          <strong className="font-bold">Who are </strong>
          <strong className="text-orange-100">we ?</strong>
        </h3>
        <p>
          We are honored to have been an{" "}
          <strong className="text-[#B28600]">IBM Gold Business Partner</strong>{" "}
          , and a<br className="hidden xl:inline" /> trusted IBM Maximo managed{" "}
          <span className="text-orange-100">service provider</span> . Offerings
          <strong> MAS 8</strong> and
          <br className="hidden xl:inline" />{" "}
          <strong>Ext. Maximo 7.6 support.</strong>
        </p>
        <p>
          <span className="text-orange-100">For more than a decade</span>, we
          have been delivering comprehensive <strong>IBM </strong>
          <br className="hidden xl:inline" />
          <strong>Maximo solutions</strong> , encompassing our{" "}
          <strong>flagship products</strong>
          and
          <br className="hidden xl:inline" /> exceptional{" "}
          <strong>services</strong>.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
