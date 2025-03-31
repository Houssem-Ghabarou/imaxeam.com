import React from "react";

const images = [
  "/rcjyGrey-1.png",
  "/sorfert-grey.png",
  "/scGrey.png",
  "/timkensteel.png",
  "/ucsdh.png",
  "/motGrey.png",
  "/bates-grey.png",
  "/gaia-grey.png",
].filter(Boolean);

const InfiniteScroll = () => {
  return (
    <div className=" pt-10">
      <div className="overflow-hidden w-full  rounded-2xl py-5">
        <div className="relative flex whitespace-nowrap">
          {/* Ensure seamless looping by duplicating images multiple times */}
          <div className="scrolling flex justify-center  min-w-max animate-scroll gap-10">
            {[...images, ...images, ...images].map((src, index) => (
              <div key={index} className="h-20 w-auto relative flex-shrink-0">
                <img
                  src={src}
                  alt={`Image ${index}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
