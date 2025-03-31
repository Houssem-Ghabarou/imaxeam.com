import Lottie from "lottie-react";
interface FeatureCardProps {
  title: string;
  description: string;
  animationData: object;
  className?: string;
  rowSpan?: number; // Default value is 1
}

const FeatureCard = ({
  title,
  description,
  animationData,
  className = "",
  rowSpan = 1,
}: FeatureCardProps) => {
  return (
    <div
      className={`px-6 py-4 rounded-xl flex flex-col gap-4 relative overflow-hidden row-span-${rowSpan} ${className}`}
      style={{
        background:
          "linear-gradient(113.64deg, rgba(187, 238, 145, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
        backdropFilter: "blur(65.8px)",
      }}
    >
      <Lottie
        animationData={animationData}
        className="absolute top-1/2 left-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
        loop={true}
      />
      <div className="relative z-10 text-black-100 text-xl font-[900]">
        {title}
      </div>
      <p className="relative z-10 text-black-100 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
