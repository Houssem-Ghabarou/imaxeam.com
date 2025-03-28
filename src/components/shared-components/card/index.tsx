import Image from "next/image";
import React from "react";
import DynamicButton from "../Buttons/dynamicButton";

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  image?: string; // Added image prop
  button?: boolean | string; // Changed to a boolean instead of a string
  textColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: () => void;
  padding?: string;
  shadow?: string;
  minheight?: string;
  title2?: string; // Added title2 prop
  icon2?: string; // Added icon2 prop
  subtitle2?: string; // Added subtitle2 prop
  textColor2?: string; // Added textColor2 prop
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  icon,
  button = false, // Default to false to avoid undefined behavior
  textColor = "text-[#017A9B]", // Default text color
  iconWidth,
  iconHeight,
  image,
  onClick,
  padding = "px-8 py-6",
  shadow,
  minheight,
  subtitle2,
  title2,
  icon2,
  textColor2,
}) => {
  return (
    <div
      className={` ${minheight} m-1 bg-transparant flex justify-between  `}
      // style={{
      //   background: `linear-gradient(100.66deg, #FFFFFF 21.54%, rgba(255, 255, 255, 0.5) 58.28%, #FFFFFF 96.98%)`,
      // }}
    >
      <div className="flex flex-col flex-grow">
        {/* First container for title, subtitle, image, and description */}
        <div
          className={`rounded-lg ${shadow} flex flex-col h-full ${padding}  m-1 bg-transparant justify-between `}
          // className="flex flex-col gap-4"
          style={{
            background: `linear-gradient(100.66deg, #FFFFFF 21.54%, rgba(255, 255, 255, 0.5) 58.28%, #FFFFFF 96.98%)`,
          }}
        >
          <div>
            <h4
              className={`font-[600] text-[16px] min-[1750px]:text-[24px] w-[100%] ${textColor}`}
            >
              {title}
            </h4>
            {image && (
              <div className="relative w-[100%] h-[150px]">
                <img
                  src={image}
                  alt={"servicemaximo"}
                  className="rounded-xl object-cover"
                />
              </div>
            )}
            <h5
              className={`font-[400] text-[16px] min-[1750px]:text-[19px] ${textColor}`}
            >
              {subtitle}
            </h5>
            <div className="font-[400] text-[14px] min-[1750px]:text-[16px] text-black-100 tracking-wider">
              {description}
            </div>
          </div>

          {/* Button and Icon */}
          <div
            className={`flex items-center gap-4 ${
              icon && button ? "justify-between" : "justify-end"
            }`}
          >
            {icon && (
              <img
                src={icon}
                alt={title || "servicemaximo"}
                width={iconWidth || 150}
                height={iconHeight || 150}
              />
            )}
            {button && (
              <DynamicButton
                underlineColor={textColor.match(/\[([^\]]+)\]/)?.[1] || ""}
                borderColor={textColor}
                onClick={onClick}
                text="Learn more"
                fontSize="text-xs"
                textColor={textColor}
                bgColor="bg-transparent"
                animationClassName="li-custom-nav"
              />
            )}
          </div>
        </div>

        {/* Second container for title2, subtitle2, and icon2 */}
        {title2 || subtitle2 || icon2 ? (
          <div
            // className="flex flex-col gap-4"
            className={`rounded-lg ${shadow} flex flex-col h-full ${padding}  m-1 bg-transparant`}
            style={{
              background: `linear-gradient(100.66deg, #FFFFFF 21.54%, rgba(255, 255, 255, 0.5) 58.28%, #FFFFFF 96.98%)`,
            }}
          >
            {title2 && (
              <h4
                className={`font-[600] text-[16px] min-[1750px]:text-[24px] w-[100%] ${
                  textColor2 || "text-black"
                }`}
              >
                {title2}
              </h4>
            )}

            {subtitle2 && (
              <h5
                className={`font-[400] text-[16px] min-[1750px]:text-[19px] ${
                  textColor2 || "text-black"
                }`}
              >
                {subtitle2}
              </h5>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
