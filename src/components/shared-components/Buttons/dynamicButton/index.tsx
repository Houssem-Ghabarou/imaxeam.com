"use client";
import React from "react";

interface DynamicButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  onClick?: () => void;
  animationClassName?: string;
  fontSize?: string;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  text,
  textColor = "text-white-100",
  bgColor = "bg-orange-100",
  onClick = () => {},
  animationClassName = "button-custom-nav",
  fontSize = " text-xl",
}) => {
  const borderColor = textColor?.slice(5);
  return (
    <button
      className={`cursor-pointer px-5 py-2 rounded-[20px] ${textColor} ${bgColor} border-1 border-${borderColor} `}
      onClick={onClick}
    >
      <div className={`${animationClassName} ${fontSize} font-medium`}>
        {text}
      </div>
    </button>
  );
};

export default DynamicButton;
