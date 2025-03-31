"use client";

// import animationData from "../../../assets/Scroll GIF/down-arrow.json";
import { useLottie } from "lottie-react";

interface props {
  animationData: any; // Define the type of animationData according to your needs
}
const LottieAnim = ({ animationData }: props) => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="w-10 h-10">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export default LottieAnim;
