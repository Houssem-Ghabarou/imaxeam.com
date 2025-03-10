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
      className={`group cursor-pointer px-5 py-2 rounded-[20px] border transition-all duration-300 ${textColor} ${bgColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`}
      onClick={onClick}
      style={{ "--underline-color": underlineColor } as React.CSSProperties} // Set CSS variable for underline
    >
      <div className={`button-custom-nav ${fontSize} font-medium`}>{text}</div>
    </button>
  );
};

export default DynamicButton;
