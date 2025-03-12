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
}) => {
  return (
    <div
      className={`bg-white-100 rounded-lg ${shadow}  flex flex-col h-full ${padding} ${minheight}  m-1 `}
    >
      <div className="flex flex-col flex-grow gap-2">
        <h4 className={`font-[600] text-[24px] w-[100%] ${textColor}`}>
          {title}
        </h4>
        {image && (
          <div className="relative w-[100%] h-[150px]">
            <img
              src={image}
              alt={"servicemaximo"}
              className="rounded-xl  object-cover"
            />
          </div>
        )}
        <h5 className={`font-[400] text-[19px] ${textColor}`}>{subtitle}</h5>
        <div className="font-[400] text-[16px] text-black-100 tracking-wider">
          {description}
        </div>
      </div>

      {/* Always maintain a gap between description and button/icon */}
      <div
        className={`flex items-center gap-4  ${
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
            fontSize="text-m"
            textColor={textColor}
            bgColor="bg-transparent"
            animationClassName="li-custom-nav"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
