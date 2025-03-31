"use client";

import React from "react";

interface HeroSectionProps {
  minusbottom?: string;
  minustop?: string;
  image: string;
  linearGradient: string;
  title: string;
  subtitle: string;
  details?: string;
  wordsToHighlight: string[];
  titlePart2: string;
  textColor: string;
  logo: string;
}

const highlightWords = (
  text: string | undefined,
  wordsToHighlight: string[] | undefined,
  highlightColor: string
) => {
  if (!text || !wordsToHighlight) return text;

  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    wordsToHighlight.includes(part) ? (
      <span key={index} style={{ color: highlightColor }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const HeroSection = ({
  minusbottom,
  minustop,
  image,
  linearGradient,
  title,
  subtitle,
  details,
  titlePart2,
  textColor = "#195A70", // Default highlight color
  wordsToHighlight,
  logo,
}: HeroSectionProps) => {
  return (
    <div className="px-6 lg:px-20 2xl:px-40 w-full">
      <div
        className="w-full flex justify-between rounded-2xl overflow-visible relative"
        style={{
          background:
            linearGradient ||
            "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(252, 119, 50, 0.1) 100%)",
          backdropFilter: "blur(65.8px)",
        }}
      >
        <div className=" flex flex-col gap-4 py-10 min-[1800px]:py-15 px-8  z-10">
          <h1 className="text-[#222222] text-[40px] min-[1800px]:text-[60px] leading-[50px] min-[1800px]:leading-[60px] font-bold xl:whitespace-nowrap">
            {highlightWords(title, wordsToHighlight, textColor)}
            <br className="hidden xl:inline" />{" "}
            {highlightWords(titlePart2, wordsToHighlight, textColor)}
          </h1>
          <h2 className="text-[#222222] font-[600] leading-[140%] text-[28px] ">
            {highlightWords(subtitle, wordsToHighlight, textColor)}
          </h2>
          <div className="text-[#656565] text-[16px] leading-[22px]">
            <span className="font-bold">IBM MAXIMO </span>- Verified solutions |{" "}
            <button
              className=" underline underline-offset-4 cursor-pointer"
              style={{ color: textColor, textDecorationColor: textColor }}
              onClick={() => {
                window.open("https://www.ibm.com/partnerplus", "_blank");
              }}
            >
              learn more
            </button>
          </div>
          <img src={logo} alt="MAXVS" className="w-50  " />
        </div>
        <div className="hidden xl:flex items-end">
          <img
            src={image ? image : "/services.png"}
            alt={"services"}
            className={`w-full h-auto ${
              minusbottom ? minusbottom : "-mb-10"
            } ${minustop}   z-10`} // Increased negative margin to move more of the image outside
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
