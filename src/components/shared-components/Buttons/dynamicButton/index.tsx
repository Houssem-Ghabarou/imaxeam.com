"use client";
import React from "react";

interface DynamicButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  underlineColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
  animationClassName?: string;
  fontSize?: string;
  hoverTextColor?: string;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  text,
  textColor = "text-white",
  bgColor = "bg-orange-100",
  borderColor = "border-orange-500",
  underlineColor = "white",
  hoverBgColor, // Default hover background color= "hover:bg-orange-200"
  hoverTextColor,
  onClick = () => {},
  fontSize = "text-xl",
}) => {
  return (
    <button
      className={`group z-10 cursor-pointer px-5 py-2 rounded-[20px] border transition-all duration-300 ${textColor} ${bgColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} shadow-[0px_2px_30px_0px_${bgColor.replace(
        "bg-",
        ""
      )}66]`}
      onClick={onClick}
      style={{ "--underline-color": underlineColor } as React.CSSProperties} // Set CSS variable for underline
    >
      <div
        className={`button-custom-nav font-medium text-sm lg:text-md whitespace-nowrap`}
      >
        {text}
      </div>
    </button>
  );
};

export default DynamicButton;
