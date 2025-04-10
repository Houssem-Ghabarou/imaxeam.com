import React from "react";

interface ProductHighlightProps {
  bgColor?: string;
  image?: string;
  data?: any[];
  title?: string;
  underlineColor?: string;
  defaultGridCols: number;
  mdGridCols: number;
  mdGridRows: number;
  linearGradient?: string;
}

const ProductHighlight = ({
  data,
  bgColor,
  image,
  title,
  underlineColor,
  defaultGridCols = 1,
  mdGridCols = 2,
  mdGridRows = 2,
  linearGradient,
}: ProductHighlightProps) => {
  return (
    <div
      style={{
        background: bgColor,
        backdropFilter: "blur(60.8px)",
        // backgroundColor: bgColor,
      }}
      className={`flex flex-col xl:flex-row   mt-20 xl:mt-0`}
    >
      <div className="-mt-[120px] self-center xl:self-start xl:-mt-[70px]  min-[1800px]:w-[52%] ">
        <img src={image} className="object-fit " alt="producthighlight" />
      </div>
      <div className=" w-[100%] xl:w-[55%]  px-6 xl:px-10 pt-1 xl:pt-15 flex flex-col gap-6">
        <div className="text-[20px] text-white-100 font-[600] ">{title}</div>
        <div
          className={`grid grid-cols-${defaultGridCols} md:grid-rows-${mdGridRows} md:grid-cols-${mdGridCols} gap-6`}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 border-b-[0.3px]  ${
                item?.underline || "md:border-none"
              }`}
              style={{
                borderColor: underlineColor,
              }}
            >
              <div className="text-white-100 ">{item?.title}</div>
              <p className="text-white-100 text-md pb-5  xl:w-[100%] leading-[22px]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
